import sys
from collections import Counter
lines = []
# for line in sys.stdin:
#     lines.append(line.rstrip('\n'))

lines = """ -1 -1542388410999820
RRLRRDDULLRRRDULRLRDRDLLLULLRDDURLLDDDULDLUURRLDDR""".splitlines()

targetx, targety = map(int, lines[0].split())
dir = {"U": (0, 1), 'D': (0, -1), 'R': (1, 0), 'L': (-1, 0)}

pattern = [dir[c] for c in lines[1]]
dx, dy = (sum(c[i] for c in pattern) for i in (0, 1))

any = -1


# retourne l'itération a laquelle on va arriver sur la coordonnées targetx
# None si aucune n'y arrivera, any si on passe dessus a n'importe quelle itération
def solve(x: int, dx: int, targetx: int):
    if dx == 0:  # différentiel nul, on regarde si on est sur la bonne case
        return any if x == targetx else None
    if targetx % dx == x % dx:
        return targetx // dx - (x // dx)
    return None


l = len(pattern)
x, y = (0, 0)
res = float('inf')
for i, (vx, vy) in enumerate(pattern):
    x += vx
    y += vy
    resx = solve(x, dx, targetx)
    resy = solve(y, dy, targety)
    if resx is not None:
        if resy is not None:
            if resx == any:
                if resy == any:
                    res = min(res, i+1)  # cas dx,dy == 0 et on est sur la case
                else:
                    # cas dx == 0, on est bon en x, on regarde l'itération y
                    res = min(res, resy * l + i+1)
            elif resy == any:
                # cas dy == 0, on est bon en y, on regarde l'itération x
                res = min(res, resx * l + i+1)
            elif resx == resy and resx >= 0:  # si les 2 dimensions on la meme itération, on est good
                res = min(res, (resx)
                          * l + i + 1)

print(res) if res != float('inf') else print('not possible')
