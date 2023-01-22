import sys
from typing import Tuple

# lines = ['5', '1 08:00-17:59', '3 08:00-17:59', '4 08:00-17:59', '5 09:00-17:59', '2 08:00-17:59']

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))
sys.stderr.write(str(lines) + "\n\n")

input_lines = lines

lines = lines[1:]
lines = sorted(lines)


def parse(x: str):
    """day hh:mm-hh:mm"""
    day, x = x.split(" ")
    day = int(day)
    start, end = x.split("-")
    start_hour, start_minute = list(map(int, start.split(":")))
    end_hour, end_minute = list(map(int, end.split(":")))
    return day, (start_hour, start_minute), (end_hour, end_minute), start_hour * 60 + start_minute, end_hour * 60 +  end_minute


lines = list(map(parse, lines))


def is_possible(day: int, hour: int, minute: int, line: Tuple):
    global next_lines
    d, (sh, sm), (eh, em), start, end = line
    if day != d:
        if d < day:
            next_lines = next_lines[1:]
        return True, (None, None)
    cs = hour * 60 + minute
    ce = (hour + 1) * 60 + minute
    if ce >= 18 * 60:
        return False, (None, None)
    result = not (cs <= start < ce or cs <= end < ce)
    return result, (eh, em)


def next_hour(hour: int, minute: int):
    minute += 59
    if minute >= 60:
        hour += 1
        minute -= 60
    return hour, minute


for day in range(1, 6):
    hour = 8
    while hour < 18:
        minute = 0
        while minute < 60:
            next_lines = list(lines)
            possible = True
            for line in lines:
                result, (eh, em) = is_possible(day, hour, minute, line)
                if not result:
                    possible = False
                    if eh is not None and em is not None:
                        hour = eh
                        minute = em
                    break
            if possible:
                eh, em = next_hour(hour, minute)
                print(f"{day} {hour}:{minute}-{eh}:{em}")
                exit(0)
            lines = next_lines
            minute += 1
        hour += 1

sys.stderr.write(str(input_lines) + "\n\n")

