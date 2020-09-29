/*******
 * Read input from System.in
 * Use: println to output your result to STDOUT.
 * Use: System.err.println to output debugging information to STDERR.
 * ***/
import kotlin.collections.HashMap
import kotlin.collections.HashSet
import kotlin.text.*

// todo: découper en plus petit problèmes

enum class FightResult {
    Win,
    Loose,
    Tie
}

enum class PogemonType(val type: String) {
    Fire("feu"),
    Water("eau"),
    Plant("plante"),
    Ice("glace"),
    Poison("poison"),
    Ground("sol"),
    Flight("vol");

    companion object {
        private val stringToPogemonType = HashMap<String, PogemonType>(values().size)

        init {
            for (pogemon in values()) {
                stringToPogemonType[pogemon.type] = pogemon
            }
        }

        fun from(type: String) = stringToPogemonType.getValue(type)
    }

    override fun toString() = type
}

fun List<PogemonType>.toStringValue() = this.joinToString(" ") { it.toString() }

fun Map<PogemonType, Int>.hasRemainingValues(): Boolean {
    for ((_, numberRemaining) in this) {
        if (numberRemaining > 0)
            return true
    }
    return false
}

fun Map<PogemonType, Int>.toRemainingList(): ArrayList<PogemonType> {
    val list = ArrayList<PogemonType>(size * 2)
    for ((card, numberRemaining) in this) {
        repeat(numberRemaining) { list.add(card) }
    }
    return list
}

data class Fight(val card1: PogemonType, val card2: PogemonType, val winner: PogemonType)

data class BestFightForType(val type: PogemonType) {
    val winAgainst = HashSet<PogemonType>()
    val tieAgainst = HashSet<PogemonType>()
    val looseAgainst = HashSet<PogemonType>()
}

object WhoWin {
    private val fightList = listOf(
            Fight(PogemonType.Fire, PogemonType.Water, PogemonType.Water),
            Fight(PogemonType.Fire, PogemonType.Plant, PogemonType.Fire),
            Fight(PogemonType.Fire, PogemonType.Ice, PogemonType.Fire),

            Fight(PogemonType.Water, PogemonType.Plant, PogemonType.Plant),
            Fight(PogemonType.Water, PogemonType.Ground, PogemonType.Ground),

            Fight(PogemonType.Plant, PogemonType.Poison, PogemonType.Plant),
            Fight(PogemonType.Plant, PogemonType.Ground, PogemonType.Ground),
            Fight(PogemonType.Plant, PogemonType.Flight, PogemonType.Plant)
    )

    private val fights = HashMap<PogemonType, HashMap<PogemonType, Boolean>>(fightList.size * 2) // Type1, Type2, Type1 win?

    val bestFightForType = HashMap<PogemonType, BestFightForType>()

    /**
     * @return true if my card win,
     */
    fun fightAgainst(myCard: PogemonType, opponentCard: PogemonType): FightResult {
        val result = fights[myCard]?.get(opponentCard) ?: return FightResult.Tie
        return if (result) FightResult.Win else FightResult.Loose
    }

    init {
        val pogemonTypes = PogemonType.values()

        // Init fight list
        for (type in pogemonTypes) {
            fights[type] = HashMap()
            bestFightForType[type] = BestFightForType(type)
        }

        for ((firstType, secondType, winnerType) in fightList) {
            fights[firstType]!![secondType] = firstType == winnerType
            fights[secondType]!![firstType] = secondType == winnerType
        }

        // Init win against list and tie against list
        for (pogemon in pogemonTypes) {
            for (other in pogemonTypes) {
                if (pogemon == other)
                    continue

                val pogemonBestFight = bestFightForType.getValue(pogemon)
                val otherBestFight = bestFightForType.getValue(other)

                when (fightAgainst(pogemon, other)) {
                    FightResult.Win -> {
                        pogemonBestFight.winAgainst.add(other)
                        otherBestFight.looseAgainst.add(pogemon)
                    }
                    FightResult.Tie -> {
                        pogemonBestFight.tieAgainst.add(other)
                        otherBestFight.tieAgainst.add(pogemon)
                    }
                    FightResult.Loose -> {
                        otherBestFight.winAgainst.add(pogemon)
                        pogemonBestFight.looseAgainst.add(other)
                    }
                }
            }
        }
    }
}

data class Deck(val cardList: List<PogemonType>) {
    operator fun get(index: Int): PogemonType? {
        if (index >= cardList.size)
            return null
        return cardList[index]
    }

    private fun selectCardWhenMineIsNullFromCardsAllowed(
            otherDeck: Deck,
            index: Int,
            cardsAllowed: HashSet<PogemonType>,
            myRemainingCardMap: Map<PogemonType, Int>):
            Pair<PogemonType, List<PogemonType>>? {

        if (!myRemainingCardMap.hasRemainingValues())
            return null

        val cards = cardsAllowed.intersect(myRemainingCardMap.keys)

        if (cards.isEmpty())
            return null

        for (card in cards) {
            val numberOfThisTypeCard = myRemainingCardMap[card]

            if (numberOfThisTypeCard == null || numberOfThisTypeCard < 1)
                continue

            val nextRemainingCardMap = if (numberOfThisTypeCard == 1) myRemainingCardMap - setOf(card) else myRemainingCardMap + (card to (numberOfThisTypeCard - 1))
            val nextList = selectToWinAgainstThisCard(otherDeck, index, card, nextRemainingCardMap)

            if (nextList != null)
                return card to nextList
        }

        return null
    }

    private fun selectCardWhenMineIsNull(otherDeck: Deck, index: Int, myRemainingCardMap: Map<PogemonType, Int>): List<PogemonType>? {
        val currentOpponentCard = otherDeck[index]!!

        val bestFightTypes = WhoWin.bestFightForType.getValue(currentOpponentCard)

        var result = selectCardWhenMineIsNullFromCardsAllowed(otherDeck, index, bestFightTypes.looseAgainst, myRemainingCardMap)
        if (result == null) {
            result = selectCardWhenMineIsNullFromCardsAllowed(otherDeck, index, bestFightTypes.tieAgainst, myRemainingCardMap)
            if (result == null) {
                result = selectCardWhenMineIsNullFromCardsAllowed(otherDeck, index, bestFightTypes.winAgainst, myRemainingCardMap)
                        ?: return null // here this path is dead
            }
        }
        val (currentCard, cardListAfterCurrent) = result
        return cardListAfterCurrent + currentCard
    }

    private fun selectToWinAgainstThisCard(otherDeck: Deck, index: Int, myCurrentCard: PogemonType?, myRemainingCardMap: Map<PogemonType, Int>): List<PogemonType>? {
        val currentOpponentCard = otherDeck[index]

        if (currentOpponentCard == null) {
            if (myCurrentCard == null && !myRemainingCardMap.hasRemainingValues())
                return null
            return myRemainingCardMap.toRemainingList()
        }

        if (myCurrentCard == null) {
            return selectCardWhenMineIsNull(otherDeck, index, myRemainingCardMap)
        }

        return when (WhoWin.fightAgainst(myCurrentCard, currentOpponentCard)) {
            FightResult.Win -> selectToWinAgainstThisCard(otherDeck, index + 1, myCurrentCard, myRemainingCardMap)
            FightResult.Tie -> selectToWinAgainstThisCard(otherDeck, index + 1, null, myRemainingCardMap)
            FightResult.Loose -> selectToWinAgainstThisCard(otherDeck, index, null, myRemainingCardMap)
        }
    }

    /**
     * @return list of pogemon to win over otherDeck or null otherwise
     */
    fun solveAgainst(otherDeck: Deck): List<PogemonType>? {
        val myCardMap = cardList.groupBy { it }.mapValues { (_, list) -> list.size }
        return selectToWinAgainstThisCard(otherDeck, 0, null, myCardMap)
    }
}

fun main(args: Array<String>) {
    val input = generateSequence(::readLine).toList()

    System.err.println("====================")
    System.err.println(input)
    System.err.println("\n\n")

    val (sachaCards, mineCards) = input
            .drop(1)
            .map { line ->
                line
                        .toLowerCase()
                        .split(" ")
                        .map { PogemonType.from(it) }
            }
            .map { Deck(it) }
            .toList()
    val result = mineCards.solveAgainst(sachaCards)
    if (result == null) {
        println("-1")
    } else {
        println(result.reversed().toStringValue())
    }
}