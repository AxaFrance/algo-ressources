import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.Parameterized
import java.io.*
import java.nio.file.Paths
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull

@RunWith(Parameterized::class)
class StringContainsPalindromeTest(private val input: String, private val start: Int, private val end: Int, private val expected: Boolean) {
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
class SetPalindromePositionsFilterOverlappingPositionsTest(private val input: String, private val expected: List<PalindromePositions>) {
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

@RunWith(Parameterized::class)
class CutInPalindromesTest(private val testNumber: Int) {
    companion object {
        @JvmStatic
        @Parameterized.Parameters
        fun data() = 1..4
    }

    private val filePaths = "data"

    private fun readInputAndExpected(testNumber: Int): Triple<String, Int, String?> {
        val (inputLine1, inputLine2) = Paths.get(filePaths, "input$testNumber.txt").toFile().readLines()
        val output = Paths.get(filePaths, "output$testNumber.txt").toFile().readText()

        val (_, K) = inputLine1.split(" ").map { it.toInt() }

        return Triple(inputLine2, K, output)
    }

    @Test(timeout = 1000)
    fun shouldReturnExpected() {
        val (input, K, expected) = readInputAndExpected(testNumber)
        val palindromes = input.cutInNPalindromes(K)
        if (expected == "IMPOSSIBLE") {
            assertNull(palindromes)
            return
        }
        assertNotNull(palindromes)
        val result = input.toPalindromeStrings(palindromes)
        assertEquals(expected, result)
    }

    @Test(timeout = 1000)
    fun shouldReadStdinAndPrintExpected() {
        val sysInBackup = System.`in`
        val sysOutBackup = System.out

        val inputStream = Paths.get(filePaths, "input$testNumber.txt").toFile().inputStream()
        val expected = Paths.get(filePaths, "output$testNumber.txt").toFile().readText().trim()
        val outputStream = ByteArrayOutputStream()

        System.setIn(inputStream)
        System.setOut(PrintStream(outputStream))

        main()

        assertEquals(expected, outputStream.toString().trim())

        System.setIn(sysInBackup)
        System.setOut(sysOutBackup)
    }
}
