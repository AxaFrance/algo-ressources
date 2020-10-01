import java.util.*
import kotlin.collections.ArrayList
import kotlin.collections.HashSet

/*******
 * Read input from System.in
 * Use: println to ouput your result to STDOUT.
 * Use: System.err.println to ouput debugging information to STDERR.
 * ***/

fun String.containsPalindrome(start: Int = 0, end: Int = length - 1): Boolean {
    val length = end - start
    for (i in 0 until (length / 2)) {
        if (this[start + i] != this[end - i])
            return false
    }
    return true
}

data class PalindromePositions(val start: Int, val end: Int) {
    val size: Int
        get() = end - start

    fun overlap(other: PalindromePositions): Boolean {
        // Cannot be the same character in two different palindromes
        val otherRange = other.start..other.end
        return start in otherRange || end in otherRange
    }

    fun cutInPalindromes(): List<PalindromePositions>? {
        if (size <= 1)
            return null

        val list = ArrayList<PalindromePositions>(3)
        list.add(PalindromePositions(start, start))

        if (size > 2)
            list.add(PalindromePositions(start + 1, end - 1))

        list.add(PalindromePositions(end, end))

        return list
    }
}

fun String.substring(positions: PalindromePositions) = substring(positions.start, positions.end + 1)

fun String.expandPalindrome(start: Int, end: Int): PalindromePositions? {
    val range = 0 until length
    if (start !in range || end !in range)
        return null

    if (!containsPalindrome(start, end))
        return null

    return expandPalindrome(start - 1, end + 1) ?: return PalindromePositions(start, end)
}

/**
 * This method is not perfect, but it will be perfect for this use case.
 * It doesn't find all palindromes. When two or more palindromes have the same
 * center and the same parity, it will juste keep the longest.
 * If two palindromes have the same center but different parity eg (even, odd), it will keep both.
 * For palindrome with even number of letter, the center will be at index `[length / 2 - 1]`.
 */
fun String.findLongestSubPalindromes(): Set<PalindromePositions> {
    val palindromes = HashSet<PalindromePositions>(length * 2)

    for (i in 0 until length) {
        var result = expandPalindrome(i, i + 1)
        if (result != null)
            palindromes.add(result)
        result = expandPalindrome(i, i)
        if (result != null)
            palindromes.add(result)
    }
    return palindromes
}

/**
 * Keep longest palindromes and remove overlapping (2 cannot have same boundaries)
 * Sort result by start value
 */
fun Set<PalindromePositions>.filterOverlappingPositions(): List<PalindromePositions> {
    val list = sortedByDescending { it.size }
    val resultList = ArrayList<PalindromePositions>(size)

    exteriorLoop@ for (positions in list) {
        for (greaterPalindromePositions in resultList) {
            if (positions.overlap(greaterPalindromePositions))
                continue@exteriorLoop
        }
        resultList.add(positions)
    }

    return resultList.sortedBy { it.start }
}

fun String.cutInNPalindromes(n: Int): List<PalindromePositions>? {
    // todo: le faire en filtrant les palindromes
    val palindromes = LinkedList(findLongestSubPalindromes().filterOverlappingPositions())
    if (palindromes.size > n)
        return null
    if (palindromes.size == n)
        return palindromes

    // todo: le problème ici, c'est qu'on arrive à 9 et qu'on ne peut faire des palindromes que en en rajoutant 2 et pas seulement 1
    whileLoop@ while (palindromes.size < n) {
        for ((index, palindrome) in palindromes.withIndex()) {
            val newPalindromes = palindrome.cutInPalindromes()
            if (newPalindromes == null || palindromes.size + newPalindromes.size > n)
                continue
            palindromes.removeAt(index)
            palindromes.addAll(index, newPalindromes)
            continue@whileLoop
        }

    }

    if (palindromes.size == n)
        return palindromes

    return null
}

fun String.toPalindromeStrings(positions: Iterable<PalindromePositions>) =
        positions.joinToString(" ") { substring(it) }

fun main(args: Array<String>) {
    val input = generateSequence(::readLine).toList()
    val (_, K) = input[0].split(" ").map { it.toInt() } // we must cut in K palindromes
    val skewer = input[1]
    val palindromes = skewer.cutInNPalindromes(K)
    if (palindromes == null)
        println("IMPOSSIBLE")
    else
        println(skewer.toPalindromeStrings(palindromes))
}
