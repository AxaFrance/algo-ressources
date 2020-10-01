/*******
 * Read input from System.in
 * Use: println to output your result to STDOUT.
 * Use: System.err.println to output debugging information to STDERR.
 * ***/
import kotlin.collections.HashMap
import kotlin.text.*


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

    /**
     * @return true if my card win,
     */
    fun fightAgainst(myCard: PogemonType, opponentCard: PogemonType): FightResult {
        val result = fights[myCard]?.get(opponentCard) ?: return FightResult.Tie
        return if (result) FightResult.Win else FightResult.Loose
    }

    init {
        val pogemonTypes = PogemonType.values()

        for (type in pogemonTypes) {
            fights[type] = HashMap()
        }

        for ((firstType, secondType, winnerType) in fightList) {
            fights[firstType]!![secondType] = firstType == winnerType
            fights[secondType]!![firstType] = secondType == winnerType
        }
    }
}

data class Deck(val cardList: List<PogemonType>) {
    operator fun get(index: Int): PogemonType? {
        if (index >= cardList.size)
            return null
        return cardList[index]
    }

    private fun solveThisCard(otherDeck: Deck, index: Int, myCurrentCard: PogemonType?, myRemainingCardMap: Map<PogemonType, Int>): List<PogemonType>? {
        val currentOpponentCard = otherDeck[index]

        if (currentOpponentCard == null) {
            if (myCurrentCard == null && !myRemainingCardMap.hasRemainingValues())
                return null
            return myRemainingCardMap.toRemainingList()
        }

        if (myCurrentCard == null) {
            if (!myRemainingCardMap.hasRemainingValues())
                return null
            for ((card, numberOfThisCard) in myRemainingCardMap) {
                val nextRemainingCardMap = if (numberOfThisCard == 1) myRemainingCardMap - setOf(card) else myRemainingCardMap + (card to (numberOfThisCard - 1))
                val result = solveThisCard(otherDeck, index, card, nextRemainingCardMap)
                if (result != null)
                    return result + card
            }
            return null
        }

        return when (WhoWin.fightAgainst(myCurrentCard, currentOpponentCard)) {
            FightResult.Win -> solveThisCard(otherDeck, index + 1, myCurrentCard, myRemainingCardMap)
            FightResult.Tie -> solveThisCard(otherDeck, index + 1, null, myRemainingCardMap)
            FightResult.Loose -> solveThisCard(otherDeck, index, null, myRemainingCardMap)
        }
    }

    /**
     * @return list of pogemon to win over otherDeck or null otherwise
     */
    fun solveAgainstAnotherDeck(otherDeck: Deck): List<PogemonType>? {
        val myCardMap = cardList.groupBy { it }.mapValues { (_, list) -> list.size }
        return solveThisCard(otherDeck, 0, null, myCardMap)
    }
}

fun main(args: Array<String>) {
    val input = generateSequence(::readLine)

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

    val result = mineCards.solveAgainstAnotherDeck(sachaCards)
    if (result == null) {
        println("-1")
    } else {
        println(result.reversed().toStringValue())
    }
}
