"""
This solution works, but it shouldn't.
They have a bug in their checks characters can be 32 or they shouldn't be under 33.
["!!!!!!!!!!!!!!"] this input will work, but shouldn't.
ord("!") == 33
"""

import sys

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

boss_pseudo = lines[0]

first = ord(boss_pseudo[-1])
second = ord(boss_pseudo[-2])

print(boss_pseudo[:-2] + chr(second - 1) + chr(first + 31))
