# Ce code résout l'épreuve Dodécagones empilés du contest https://www.isograd.com/FR/solutionconcours.php?contest_id=26.
import sys

N = int(input())
# Initialise le terrain
board = [['.' for i in range(N)] for j in range(N)]
center = N//2
current = "*"

#Emplie en partant du bas les briques de tailles décroissantes.
for size in range(N//2, 0, -1):
	limits = [center - size, center + size]
	local_print(size)
	for i in range(limits[0], limits[1]+1):
	    for j in range(limits[0], limits[1]+1):
	        if not (i in limits and j in limits):
	            board[i][j] = current
	current = "#" if current == "*" else "*"

for l in board:
    print("".join(l))
