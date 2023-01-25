import sys
from collections import Counter

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

ints = sorted(list(map(int, lines[0].split())))

c = Counter(ints)
best = (0, 0)
worst = (len(ints), 100)
u = c.most_common()

best = u[0]
worst = u[-1]

for v, c in u:
    if c == best[1] and v > best[0]:
        best = (v, c)
    if c == worst[1] and v < worst[0]:
        worst = (v, c)

print(best[0] - worst[0])
