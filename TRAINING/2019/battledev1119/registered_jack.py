import sys
import random

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

N, M = list(map(int, lines[0].split(" ")))
lines = lines[1:]

cables_used = {}
current_requests = []
out = []

debut_dict = {}
fin_dict = {}
requests = []
all_cables = set(range(1, N + 1))


def add_in_dict(dct: dict, hour: int, cable_number: int):
    if hour not in dct:
        dct[hour] = set()
    tab = dct[hour]
    tab.add(cable_number)


def get_free_cable(debut: int, fin: int) -> int:
    total = set()
    for deb, cables in debut_dict.items():
        if deb >= fin:
            total = total.union(cables)
    for end, cables in fin_dict.items():
        if end <= debut:
            total = total.union(cables)
    if len(total) >= len(all_cables):
        print("pas possible")
        exit(0)
    rest = all_cables.difference(total)
    return random.sample(rest, 1)[0]


for line in lines:
    debut, fin = list(map(int, line.split(" ")))
    cable = get_free_cable(debut, fin)
    out.append(cable)
    add_in_dict(debut_dict, debut, cable)
    add_in_dict(fin_dict, fin, cable)

print(" ".join(map(str, out)))
