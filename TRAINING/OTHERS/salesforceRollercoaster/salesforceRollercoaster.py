import sys

lines = []
for line in sys.stdin:
	lines.append(int(line.rstrip('\n')))

# Crée deux listes triées de manière croissantes et décroissantes.
asc, desc = sorted(lines[1:]), sorted(lines[1:])[::-1]

# Ajoute l'élément centrale en début de liste si elle est composée d'un nombre impair d'élément.
r = [] if len(asc)%2 == 0 else [asc[len(asc)//2]]

# Ajoute les éléments des deux listes triées de sorte à faire les bosses.
for i in range(len(asc)//2):
    r+=[asc[i], desc[i]]

# Affiche le résultat.
print(" ".join(map(str, r)))