import sys

recettes = []

A, B, C= map(int, input().split())
N = int(input())

for i in range(N):
    recettes.append(tuple(map(int, input().split())))
    

energie = [[[0 for _ in range(C+1)] for _ in range(B+1)] for _ in range(A+1)]
recette_utilisee = [[[-1 for _ in range(C+1)] for _ in range(B+1)] for _ in range(A+1)]

best_total_combinaison = (0,0,0)
best_total_energie = 0

for a in range(A+1):
    for b in range(B+1):
        for c in range(C+1):
            
            best_energie = 0
            best_recette = -1
            
            for n in range(N):
                ra, rb, rc, renergie = recettes[n]
                if ra > a or rb > b or rc > c:
                    continue
                
                
                new_energie = energie[a-ra][b-rb][c-rc] + renergie
                
                if new_energie > best_energie:
                    best_energie = new_energie
                    best_recette = n
                    
                
            energie[a][b][c] = best_energie
            recette_utilisee[a][b][c] = best_recette
            
            
            if best_total_energie < best_energie:
                best_total_energie = best_energie
                best_total_combinaison = (a,b,c)


a,b,c = best_total_combinaison
print(best_total_energie)

recs = [0 for i in range(N)]

while(recette_utilisee[a][b][c] != -1):
    n = recette_utilisee[a][b][c]
    recs[n] += 1
    ra, rb, rc, renergie = recettes[n]
    a,b,c = (a-ra, b-rb, c-rc)
    
for i in range(N):
    print(recs[i])
