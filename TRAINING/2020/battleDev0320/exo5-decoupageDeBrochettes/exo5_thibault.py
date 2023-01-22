import sys
from collections import Counter

"""
Objectif

Pour votre prochain barbecue géant, vous avez prévu de cuisiner une brochette géante à partager entre tous vos invités.

De nombreux ingrédients sont présents sur la brochette, et pour des raisons d'esthétique vous souhaitez découper la brochette en plusieurs sous-parties dont les ingrédients seront symétriques.

La taille des parts vous importe peu, mais vous avez horreur du gaspillage alimentaire : votre découpage devra donc produire exactement une part pour chaque invité, et l'intégralité de votre brochette devra être utilisée.

Données

Entrée

Ligne 1 : deux entiers séparés par un espace, N la taille de la brochette géante comprise entre 1 et 10 000, et K le nombre d'invités compris entre 1 et 500.
Ligne 2 : une chaîne de N lettres minuscules représentant les ingrédients de la brochette.

Sortie

- S'il est possible de découper la chaîne en une série de K palindromes, renvoyez une découpe possible sur une ligne, en séparant les parts par des espaces. Pour en savoir plus sur les palindromes : https://fr.wikipedia.org/wiki/Palindrome
- Sinon, renvoyez IMPOSSIBLE

Commentaires

- Il est garanti qu'il y aura au maximum 100 000 parts valides dans une brochette donnée.
- Une part contenant un seul ingrédient est un palindrome valide.

Exemple 1

Pour l'entrée suivante:

24 10
uvxuuxvvhikinwnjponopjfd

Une sortie possible est :

u v xuux vv h iki nwn jponopj f d

Exemple 2

Pour l'entrée suivante :

6 3
abacdc

La sortie attendue est :

IMPOSSIBLE

En effet, il existe des solutions de 2, 4 ou 6 parts, mais aucune pour 3 invités.
"""

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

N, K = map(int, lines[0].split(" "))

line = list(lines[1])
c = Counter(line)
commons = c.most_common()

total = []
for i in range(K):
    for idx in range(len(commons)):
        value, n = commons[idx]
        # if n >= 2:



