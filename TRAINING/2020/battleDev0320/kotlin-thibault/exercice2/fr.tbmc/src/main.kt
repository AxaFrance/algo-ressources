/*******
 * Read input from System.in
 * Use: println to ouput your result to STDOUT.
 * Use: System.err.println to ouput debugging information to STDERR.
 * ***/
import java.util.*
import java.math.*
import kotlin.text.*

fun main(args : Array<String>) {
    val input = generateSequence(::readLine)
    val lines = input.drop(0)

    var greatestNumberOfRepeat = 0
    var repeats = 0
    var currentValue: String? = null
    for (value in lines) {
        System.err.println(value)
        if (currentValue == value)
            repeats++
        else {
            greatestNumberOfRepeat = greatestNumberOfRepeat.coerceAtLeast(repeats)
            currentValue = value
            repeats = 1
        }
    }
    println(greatestNumberOfRepeat.coerceAtLeast(repeats))
}
