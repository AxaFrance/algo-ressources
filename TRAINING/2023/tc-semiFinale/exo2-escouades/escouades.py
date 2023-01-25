# *******
# * Read input from STDIN
# * Use print to output your result to STDOUT.
# * Use sys.stderr.write() to display debugging information to STDERR
# * ***/
import sys

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

n = int(lines.pop(0))
m = lines.pop(0)
merc = list(map(int, lines))
total = sum(merc)

# si can_reach[i] == True => on est capable de recruter i mercenaires

can_reach = [False] * (total + 1)
can_reach[0] = True
# calcul des sous-sommes
for m in merc:
    for i in range(total, 0, -1):
        if i-m >= 0 and can_reach[i-m]:
            can_reach[i] = True

# on regarde qu'a partir de seuil car avant on respecte pas la condition
seuil = max((total - n) // 2 + 1, 0)
for i in range(seuil, total + 1):
    if can_reach[i]:
        print(i)
        break
