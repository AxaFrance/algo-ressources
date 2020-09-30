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

/*
private fun String.cutInPalindromes(): LinkedList<String> {
    val palindromeList = LinkedList<String>()
    var start = 0

    for (end in 0 until length) {
        if (start == end || containsPalindrome(start, end))
            continue

        val palindrome = substring(start, end)
        palindromeList.add(palindrome)
        start = end
    }

    palindromeList.add(substring(start, length - 1))
    return palindromeList
}
*/

data class PalindromePositions(val start: Int, val end: Int) {
    val size: Int
        get() = end - start

    fun overlap(other: PalindromePositions): Boolean {
        // Cannot be the same character in two different palindromes
        val otherRange = other.start..other.end
        return start in otherRange || end in otherRange
    }

    fun cutInPalindromes(): List<PalindromePositions>? {
        if (size == 1)
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

/**
 * This string must be a palindrome or the behavior is undefined
 */
fun String.cutPalindromeInPalindromes(): LinkedList<String>? {
    if (length == 1)
        return null

    val list = LinkedList<String>()
    list.add(first().toString())

    if (length > 2) {
        list.add(substring(1, lastIndex - 1))
    }

    list.add(last().toString())

    return list
}

fun String.cutInNPalindromes(n: Int): List<PalindromePositions>? {
    val palindromes = findLongestSubPalindromes().filterOverlappingPositions()
    if (palindromes.size > n)
        return null
    if (palindromes.size == n)
        return palindromes

    whileLoop@ while (palindromes.size < n) {
        for ((index, palindrome) in palindromes.withIndex()) {
            val newPalindromes = palindrome.cutPalindromeInPalindromes()
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
        println(palindromes.joinToString(" "))

//    println("test1".containsPalindrome())
//    println("texet".containsPalindrome())
//    println("atestb".containsPalindrome(1, 4))
//    println("zethjdoiutxtdsfdsf".containsPalindrome(9, 11))
//    println("t".containsPalindrome())
//    println("abc".containsPalindrome(1, 1))
//    println("tt".containsPalindrome())
//    println("attc".containsPalindrome(1, 2))
}
