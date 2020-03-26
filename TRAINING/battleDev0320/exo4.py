import sys
import random


lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

sys.stderr.write(str(lines) + "\n\n")

N = int(lines[0])
lines = lines[1:]

sacha = lines[0].lower().split(" ")
mines = lines[1].lower().split(" ")
original = mines

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


def i_win(my_card: str, his_card: str):
    if my_card == his_card:
        return None

    test = wins.get(my_card, {}).get(his_card)
    if test is None:
        test = wins.get(his_card, {}).get(my_card)

    if test == my_card:
        return True
    elif test == his_card:
        return False
    return None


def get_winner(scard: str):
    for mcard in mines:
        win = i_win(mcard, scard)
        if win:
            return mcard
    for mcard in mines:
        win = i_win(mcard, scard)
        if win is None:
            return mcard
    return None


def generate():
    deck = []
    current_card = None
    for scard in sacha:
        if current_card is None:
            current_card = get_winner(scard)
            if current_card is None:
                return None
            deck.append(current_card)
            mines.remove(current_card)

        if not i_win(current_card, scard):
            current_card = None

    deck.extend(mines)
    return deck


def get_working_deck():
    global mines, original
    for i in range(100):
        deck = generate()
        if deck is not None:
            return deck
        random.shuffle(original)
        mines = original
    return None


d = get_working_deck()
if d is None:
    print("-1")
else:
    print(" ".join(d))
