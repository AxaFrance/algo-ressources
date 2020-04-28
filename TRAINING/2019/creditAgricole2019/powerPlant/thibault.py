import sys, math

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))
sys.stderr.write(str(lines) + "\n\n")

N, M = list(map(int, lines[0].split(" ")))
lines = lines[1:]
grid = [list(line) for line in lines]


def is_usable(line):
    if line == "X" * len(line):
        return False
    return True


if not is_usable(lines[0]) or not is_usable(lines[-1]):
    print(-1)
    sys.exit(0)


def get(line: int, col: int):
    if line >= N:
        return 0
    if not 0 <= col < M:
        return math.inf
    g = grid[line][col]
    if g == 'X' or g == '.' or g == math.inf:
        return math.inf
    return int(g)


for line in range(N - 1, -1, -1):
    rrange = list(range(M))
    for col in rrange + rrange[::-1]:
        e = grid[line][col]
        if e == 'X':
            pass
        else:
            nexts = [
                get(line + 1, col),
                get(line, col + 1),
                get(line, col - 1),
            ]
            r = min(nexts)
            if r == math.inf:
                grid[line][col] = math.inf
            else:
                grid[line][col] = r + 1

filtered = filter(lambda e: e != 'X' and e != math.inf, grid[0])
if len(list(filtered)) < 1:
    print(-1)
    sys.exit(0)
r = min(filter(lambda e: e != 'X' and e != math.inf, grid[0]))
if r == math.inf:
    print(-1)
else:
    print(r - 1)
