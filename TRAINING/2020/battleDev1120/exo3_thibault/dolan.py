import sys
from collections import defaultdict

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))
sys.stderr.write(str(lines) + "\n")
# lines = ['6', '3 4', '1 0', '2 0', '4 0', '5 2']

lines = lines[1:]

sys.setrecursionlimit(1500)

objects = defaultdict(lambda: set())

for line in lines:
    a, b = line.split(" ")
    a = int(a)
    b = int(b)
    s = objects[b]
    s.add(a)
    objects[b] = s


levels = dict()
for i in range(10):
    levels[i] = set()
dolan = objects[0]
s = levels[0]
s.add(0)
levels[0] = s


def f(sup: set, current_level: int):
    for sub in sup:
        s = levels[current_level]
        s.add(sub)
        levels[current_level] = s
        next_sup = objects[sub]
        f(next_sup, current_level + 1)


f(dolan, 1)


items = sorted(levels.items())
print(" ".join(map(lambda x: str(len(x[1])), items)))

