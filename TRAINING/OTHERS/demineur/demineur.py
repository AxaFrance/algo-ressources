# Solution pour le demineur de l'épreuve https://www.isograd.com/FR/solutionconcours.php?contest_id=26.
import sys

# Récupères les différentes informations permettant le traitement.
h, l = int(input()), int(input())
lines = []
for line in sys.stdin:
	lines.append(line.rstrip('\n'))

x_pos = set()

# Retrouve la position du clique initial.
for i in range(h):
    for j in range(l):
        if lines[i][j] == "x":
            x_pos |= {(i, j)}
            break
    if len(x_pos) != 0:
        break

discovered = set()

# Retourne l'ensemble des positions autour d'une case centrale si aucune n'est occupée par une bombe.
def area(lines, pos):
    a = set()
    for i in range(max(0, pos[0]-1), min(len(lines), pos[0]+2)):
        for j in range(max(0, pos[1]-1), min(len(lines[0]), pos[1]+2)):
            if lines[i][j] == '*':
                return set()
            a |= {(i,j)}
    return a


while x_pos:
    # Prend une des position dans la pile.
    tmp = x_pos.pop()
    # Si elle a déjà été explorée, arrêter et continuer avec une autre position.
    if tmp in discovered:
        continue
    # Ajouter à la liste des positions découvertes.
    discovered |= {tmp}
    # Ajouter toutes les nouvelles positions si la case à pu s'étendre.
    x_pos |= area(lines, tmp)

# Affiche la taille des positions découvertes.
print(len(discovered))