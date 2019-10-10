#*******
#* Read input from STDIN
#* Use: echo or print to output your result to STDOUT, use the /n constant at the end of each result line.
#* Use: sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

# lines = ["5"]

N = int("".join(lines))

size = 3 * N - 2

grid = []
for i in range(size):
    grid.append([None] * size)

debut = N - 1
fin = size - N

for i in range(size):
    for j in range(size):
        if ((i == 0 or i == size - 1) and debut <= j <= fin) or ((j == 0 or j == size - 1) and debut <= i <= fin) or ((i == debut or i == fin) and not (debut < j < fin)) or ((j == debut or j == fin) and not (debut < i < fin)):
            grid[i][j] = "X"
        else:
            grid[i][j] = "."

out = []
for g in grid:
    out.append("".join(g))
print("\n".join(out))
