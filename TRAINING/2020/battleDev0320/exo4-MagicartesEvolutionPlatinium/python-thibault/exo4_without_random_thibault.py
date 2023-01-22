import sys
from typing import List, Optional

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

sys.stderr.write(str(lines) + "\n\n")

N = int(lines[0])
lines = lines[1:]

sacha = lines[0].lower().split(" ")
mines = lines[1].lower().split(" ")

wins = {
    "feu": {
        "eau": "eau",
        "plante": "feu",
        "glace": "feu",
    },
    "eau": {
        "plante": "plante",
        "sol": "sol",
    },
    "plante": {
        "poison": "plante",
        "sol": "sol",
        "vol": "plante",
    },
}


def does_i_win_against_sacha(my_card: str, sacha_card: str):
    if my_card == sacha_card:
        return None
    test = wins.get(my_card, {}).get(sacha_card)
    if test is None:
        test = wins.get(sacha_card, {}).get(my_card)

    if test == my_card:
        return True
    elif test == sacha_card:
        return False
    return None


def generate_deck(previous_sacha_card: Optional[str], previous_mine_card: Optional[str], index_sacha_deck: int,
                  potential_deck: List[str], remaining_cards: List[str]) -> Optional[List[str]]:
    if previous_mine_card is None and previous_sacha_card is None and index_sacha_deck >= len(sacha) and len(remaining_cards) == 0:
        return None

    if previous_sacha_card is None:
        if index_sacha_deck >= len(sacha):
            return potential_deck + remaining_cards
        scard = sacha[index_sacha_deck]
        index_sacha_deck += 1
    else:
        scard = previous_sacha_card

    if previous_mine_card is not None:
        win = does_i_win_against_sacha(previous_mine_card, scard)
        if win or win is None:
            if win is None:
                previous_mine_card = None
            return generate_deck(None, previous_mine_card, index_sacha_deck, potential_deck, remaining_cards)
        return generate_deck(scard, None, index_sacha_deck, potential_deck, remaining_cards)

    if len(remaining_cards) < 1:
        return None

    done = set()
    for card in remaining_cards:
        if card in done:
            continue
        done.add(card)
        my_remaining_cards = list(remaining_cards)
        my_remaining_cards.remove(card)
        result = generate_deck(scard, card, index_sacha_deck, potential_deck + [card], my_remaining_cards)
        if result:
            return result

    return None


deck_generated = generate_deck(None, None, 0, [], mines)

if deck_generated is None:
    print("-1")
else:
    print(" ".join(deck_generated))
