import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.Parameterized
import kotlin.test.assertEquals

@RunWith(Parameterized::class)
class StringContainsPalindrome(private val input: String, private val start: Int, private val end: Int, private val expected: Boolean) {
    companion object {
        @JvmStatic
        @Parameterized.Parameters
        fun data() = listOf(
                arrayOf("abba", 0, 3, true),
                arrayOf("abba", 0, 1, true),
                arrayOf("abba", 1, 2, true),
                arrayOf("abba", 2, 3, true),
                arrayOf("aba", 0, 2, true),
                arrayOf("1aba", 1, 3, true),
                arrayOf("1aba2", 1, 3, true),
                arrayOf("1abba", 1, 4, true),
                arrayOf("1abba2", 1, 4, true),

                arrayOf("abba", 0, 2, false),
                arrayOf("abba", 1, 3, false),
                arrayOf("abaaab", 0, 5, false),
        )
    }

    @Test
    fun shouldReturnExpected() {
        assertEquals(expected, input.containsPalindrome(start, end))
    }
}

@RunWith(Parameterized::class)
class StringExpandPalindromeTest(private val input: String, private val start: Int, private val end: Int, private val expected: PalindromePositions?) {

    companion object {
        @JvmStatic
        @Parameterized.Parameters
        fun data() = listOf(
                arrayOf("1aba2", 2, 2, PalindromePositions(1, 3)),
                arrayOf("1abcd", 1, 1, PalindromePositions(1, 1)),
                arrayOf("1aba1", 2, 2, PalindromePositions(0, 4)),
                arrayOf("1aba1", 3, 3, PalindromePositions(3, 3)),
                arrayOf("1aba1", 1, 3, PalindromePositions(0, 4)),
                arrayOf("1aba1", -2, 1, null),
                arrayOf("1aba1", 1, 5, null),
                arrayOf("1aba1", 2, 4, null),
        )
    }

    @Test
    fun shouldReturnExpected() {
        assertEquals(expected, input.expandPalindrome(start, end))
    }
}

@RunWith(Parameterized::class)
class StringFindLongestSubPalindromesTest(private val input: String, private val expected: Set<PalindromePositions>) {
    companion object {
        @JvmStatic
        @Parameterized.Parameters
        fun data() = listOf(
                arrayOf("aa", setOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(1, 1),
                        PalindromePositions(0, 1),
                )),
                arrayOf("abc", setOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(1, 1),
                        PalindromePositions(2, 2),
                        PalindromePositions(0, 1),
                        PalindromePositions(1, 2),
                )),
                arrayOf("1aba2", setOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(1, 1),
                        PalindromePositions(3, 3),
                        PalindromePositions(4, 4),

                        PalindromePositions(0, 1),
                        PalindromePositions(1, 2),
                        PalindromePositions(2, 3),
                        PalindromePositions(3, 4),

                        PalindromePositions(1, 3),
                )),
                arrayOf("aba", setOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(2, 2),

                        PalindromePositions(0, 1),
                        PalindromePositions(1, 2),

                        PalindromePositions(0, 2),
                )),
                arrayOf("abba", setOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(1, 1),
                        PalindromePositions(2, 2),
                        PalindromePositions(3, 3),

                        PalindromePositions(0, 1),
                        PalindromePositions(2, 3),

                        PalindromePositions(0, 3),
                )),
                arrayOf("abaaab", setOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(2, 2),
                        PalindromePositions(4, 4),
                        PalindromePositions(5, 5),

                        PalindromePositions(0, 1),
                        PalindromePositions(2, 3),
                        PalindromePositions(3, 4),
                        PalindromePositions(4, 5),

                        PalindromePositions(0, 2),
                        PalindromePositions(0, 3),

                        PalindromePositions(1, 5),
                ))
        )
    }

    @Test
    fun shouldReturnExpected() {
        assertEquals(expected, input.findLongestSubPalindromes())
    }
}

@RunWith(Parameterized::class)
class SetPalindromePositionsFilterOverlappingPositions(private val input: String, private val expected: List<PalindromePositions>) {
    companion object {
        @JvmStatic
        @Parameterized.Parameters
        fun data() = listOf(
                arrayOf("1aba2", listOf(
                        PalindromePositions(0, 0),
                        PalindromePositions(1, 3),
                        PalindromePositions(4, 4)
                )),
                arrayOf("abaaaba2baababab", listOf(
                        PalindromePositions(0, 2),
                        PalindromePositions(3, 10),
                        PalindromePositions(11, 15),
                )),
                arrayOf("abaaaaaa", listOf(
                        PalindromePositions(0, 1),
                        PalindromePositions(2, 7),
                )),
                arrayOf("", listOf<PalindromePositions>())
        )
    }

    @Test
    fun shouldReturnExpected() {
        assertEquals(expected, input.findLongestSubPalindromes().filterOverlappingPositions())
    }
}
