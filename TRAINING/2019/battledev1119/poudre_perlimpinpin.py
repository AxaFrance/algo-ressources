import sys

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))
sys.stderr.write(str(lines) + "\n\n")

nombre_pierres, nombre_poudres, capacite_lampe = list(map(int, lines[0].split(" ")))

lines = lines[1:]

pierres = lines[:nombre_pierres]
poudres = lines[nombre_pierres:]


# values = []
# weights = []

total = []

for line in pierres:
    value, weight = list(map(int, line.split(" ")))
    # values.append(value)
    # weights.append(weight)
    total.append((value, weight, value / weight))

for line in poudres:
    price, weight = list(map(int, line.split(" ")))
    total += [(price, 1, price)] * weight

total.sort(key=lambda x: x[2], reverse=True)


total_weight = 0
total_value = 0

for value, weight, score in total:
    if total_weight + weight <= capacite_lampe:
        total_weight += weight
        total_value += value

print(total_value)

