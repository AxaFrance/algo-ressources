import sys
from typing import List

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

# lines = ['2', '3', '12 11 10']
# lines = ['6', '2', '9 8']
# lines = ['5', '2', '10 9']
# lines = ['5', '6', '12 11 10 9 8 7']

# fails: - de 2 colonnes ou au moins N colonnes vides

sys.stderr.write(str(lines) + "\n\n")

empty_places = int(lines[0])
N = int(lines[1])
cards = list(map(int, lines[2].split(" ")))
max_value = max(cards)

piles: List[List[int]] = [list(cards)]
for i in range(empty_places):
    piles.append(list())

if empty_places + 1 < len(cards) or empty_places < 1 or (len(cards) == 2 and empty_places < 2):
    print("fail")
    sys.exit(0)

if len(cards) == 1:
    print("%d 1" % cards[0])
    sys.exit(0)

move_list = []


def move_card(idx, to_idx):
    global move_list, piles
    pile: List[int] = piles[idx]
    if len(pile) < 1:
        raise Exception("Error move_card, stask empty")
    card = pile[-1]
    pile.pop()
    move_list.append("%d %d" % (card, to_idx))
    piles[to_idx].append(card)


if len(piles) == 3:
    # [[12, 11, 10], [], []]
    move_card(0, 2)
    # [[12, 11], [], [10]]
    move_card(0, 1)
    # [[12], [11], [10]]
    move_card(2, 1)
    # [[12], [11, 10], []]
    move_card(0, 2)
    # [[], [11, 10], [12]]
    move_card(1, 0)
    # [[10], [11], [12]]
    move_card(1, 2)
    move_card(0, 2)

    print(";".join(move_list))
    sys.exit(0)


for i in range(min(empty_places, N)):
    move_card(0, i + 1)

last_pile = i + 1  # len(piles) - 1

if len(piles[0]) > 0:
    # ici on est dans le cas [[12, 11, 10, 9, 8], [], [], [], []] => [[12], [8], [9], [10], [11]]
    move_card(1, 2)
    # [[12], [], [9, 8], [10], [11]]
    move_card(0, 1)
    # [[], [12], [9, 8], [10], [11]]
    move_card(last_pile, 0)
    # [[11], [12], [9, 8], [10], []]
    move_card(1, last_pile)
    # [[11], [], [9, 8], [10], [12]]
    move_card(2, 1)
    # [[11], [8], [9], [10], [12]]
    # Maintenant on peut tout rempiler


for card in cards[1:]:
    move_list.append("%d %d" % (card, last_pile))


print(";".join(move_list))
