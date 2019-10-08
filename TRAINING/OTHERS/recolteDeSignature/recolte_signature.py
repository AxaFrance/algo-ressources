# Ceci est une solution python au problème "Récolte de signatures" du concours Orange de Septembre 2018
# La fonction compute_max_time va parcourir récursivement l'intégralité des chemins possible et récupérer celui
# avec le temps maximal à chaque fois.

compute_max_time = lambda R, J, C: C[J][0] if len(R) == 0 else max(C[J][r] + C[r][r] + compute_max_time(R^{r}, r, C) for r in R)

print(compute_max_time({i for i in range(1, int(input()))}, 0, [[int(i) for i in line.rstrip('\n').split(" ")] for line in __import__('sys').stdin]))