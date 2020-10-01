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
    val result = input
            .drop(1)
            .groupBy { it.toLowerCase() }
            .map { it.key to it.value.size }
            .toList()
            .sortedByDescending { it.second }
            .take(2)
            .joinToString(" ") { it.first }
    println(result)

}
