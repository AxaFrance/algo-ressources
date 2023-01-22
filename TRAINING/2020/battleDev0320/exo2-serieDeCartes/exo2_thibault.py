import sys

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

lines = lines[1:]
previous = None
counter = 1
maximum = 0

for line in lines:
    i = int(line)
    if i == previous:
        counter += 1
    else:
        previous = i
        maximum = max(maximum, counter)
        counter = 1

maximum = max(maximum, counter)

print(maximum)
