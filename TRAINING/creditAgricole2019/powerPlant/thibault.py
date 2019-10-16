import sys, math

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))
sys.stderr.write(str(lines) + "\n\n")

# lines = ['5 5', 'X..X.', 'X...X', '..XXX', 'X...X', '.X.X.']


# lines = """
# 20 12
# ..X.X..X....
# ...XX.....X.
# ..X....XX..X
# X......X....
# .....X....X.
# .X.....X....
# X..X......XX
# .....XX.....
# ...XXXX.X...
# .X.X.XX.X...
# X..X....X..X
# .X....XX..X.
# X.X.........
# ..X...X.X..X
# X......X...X
# .......XXXXX
# X...XX.X...X
# .XX..X....XX
# ..X.X..XX...
# XX....XX..XX
# """.strip().split("\n")

N, M = list(map(int, lines[0].split(" ")))
lines = lines[1:]
grid = [list(line) for line in lines]


def is_usable(line):
    if line == "X" * len(line):
        return False
    return True


# def compute_moves(line: int, col: int):
#     if line >= N:
#         return 0
#     if not 0 <= col < M:
#         return -1
#     if lines[line][col] == 'X':
#         return -1
#     a = compute_moves(line + 1, col)
#     if a != -1:
#         return a
#     r = [
#         compute_moves(line, col + 1),
#         compute_moves(line, col - 1),
#     ]
#
#     m = min(r)
#     if m == -1:
#         return -1
#     return m + 1


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


# has_changed = True
# while has_changed:
has_changed = False
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
                if grid[line][col] != r + 1:
                    has_changed = True
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
