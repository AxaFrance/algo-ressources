/*******
 * Read input from System.in
 * Use: println to ouput your result to STDOUT.
 * Use: System.err.println to ouput debugging information to STDERR.
 * ***/
import java.util.*
import kotlin.text.*

const val dayStart = 8 * 60 + 0 - 1
const val dayEnd = 17 * 60 + 59 + 1

data class Slot(val day: Int, val start: Int, val end: Int)

fun hourToMinutes(hour: String): Int {
    val (hours, minutes) = hour.split(":").map(String::toInt)
    return hours * 60 + minutes
}

fun minutesToHour(minutes: Int): String {
    val hour = (minutes / 60).toString().padStart(2, '0')
    val minutesRemaining = (minutes % 60).toString().padStart(2, '0')
    return "${hour}:${minutesRemaining}"
}

fun parseLine(input: String): Slot {
    val split = input.split(" ")
    val day = split.first().toInt()
    val (start, end) = split[1].split("-").map(::hourToMinutes)
    return Slot(day, start, end)
}

/**
 * @return true if it has merged 2 slots and false otherwise
 */
fun mergeNext(slotsKeyStart: TreeMap<Int, Slot>, slotsKeyEnd: TreeMap<Int, Slot>): Boolean {
    var previous: Slot? = null
    for (currentEntry in slotsKeyStart.entries) {
        val current = currentEntry.value
        if (previous == null) {
            previous = current
            continue
        }
        if (current.start - previous.end < 60) {
            slotsKeyStart.remove(previous.start)
            slotsKeyStart.remove(current.start)
            slotsKeyEnd.remove(previous.end) // Ca ne prend pas en compte les potentielles collisions, plusieurs réunions peuvent commencer en même temps
            slotsKeyEnd.remove(current.end)

            val start = if (previous.start < current.start) previous.start else current.start
            val end = if (current.end > previous.end) current.end else previous.end
            val newSlot = Slot(previous.day, start, end)
            slotsKeyStart[newSlot.start] = newSlot
            slotsKeyEnd[newSlot.end] = newSlot
            return true
        }
        previous = current
    }
    previous = null
    for (currentEntry in slotsKeyEnd.entries) {
        val current = currentEntry.value
        if (previous == null) {
            previous = current
            continue
        }
        if (current.start - previous.end < 60) {
            slotsKeyStart.remove(previous.start)
            slotsKeyStart.remove(current.start)
            slotsKeyEnd.remove(previous.end) // Ca ne prend pas en compte les potentielles collisions, plusieurs réunions peuvent commencer en même temps
            slotsKeyEnd.remove(current.end)

            val start = if (previous.start < current.start) previous.start else current.start
            val end = if (current.end > previous.end) current.end else previous.end
            val newSlot = Slot(previous.day, start, end)
            slotsKeyStart[newSlot.start] = newSlot
            slotsKeyEnd[newSlot.end] = newSlot
            return true
        }
        previous = current
    }
    return false
}

fun mergeSlotsForDay(slots: List<Slot>): List<Slot> {
    val slotsKeyStart = TreeMap(slots.map { it.start to it }.toMap())
    val slotsKeyEnd = TreeMap(slots.map { it.end to it }.toMap())
    val day = slots.first().day
    slotsKeyStart[dayStart - 1] = Slot(day, dayStart - 1, dayStart)
    slotsKeyStart[dayEnd] = Slot(day, dayEnd, dayEnd + 1)

    var hasMerged = true
    while (hasMerged) {
        hasMerged = mergeNext(slotsKeyStart, slotsKeyEnd)
    }

    return slotsKeyStart.values.toList()
}

fun main(args: Array<String>) {
    val input = generateSequence(::readLine).toList()
    System.err.println("=============================")
    if (input.size > 200)
        System.err.println(input)
    System.err.println("\n\n")

    val sorted = input.drop(1).map(::parseLine).filter { it.day == 4 }.sortedBy { it.start }

    val timeTable = input
            .drop(1)
            .map(::parseLine)
            .groupBy { it.day }
            .mapValues { mergeSlotsForDay(it.value) }

    val (day, slots) = timeTable.entries.find { it.value.size != 1 }!!

    val start = slots.first().end + 1
    val end = start + 59

    val date = "$day ${minutesToHour(start)}-${minutesToHour(end)}"
    println(date)
}
