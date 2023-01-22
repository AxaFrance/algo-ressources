import sys

lines = []
for line in sys.stdin:
	lines.append(line.rstrip('\n'))

N = int(lines[0])
lines = lines[1:]

total = {}

for color in lines:
    a = total.get(color, 0)
    a += 1
    total[color] = a

v = (list(sorted(list(total.items()), key=lambda x: x[1])))
sys.stderr.write(str(v))
print(f"{v[-1][0]} {v[-2][0]}")
