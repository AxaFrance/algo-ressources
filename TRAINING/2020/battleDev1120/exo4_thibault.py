import sys

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))
sys.stderr.write(str(lines) + "\n")

# lines = ["5 4", "11 22 33 44 55", "1 3", "0 1", "2 2", "2 4"]

N, M = list(map(int, lines[0].split(" ")))
octets = list(map(int, lines[1].split(" ")))

lines = lines[2:]

l_r_list = list(map(lambda x: list(map(int, x.split(" "))), lines))
results = [0] * 256
elements = []

progressif = []
progressif.append(octets[0])

for i in range(1, len(octets)):
    progressif.append(progressif[i - 1] ^ octets[i])


for li, ri in l_r_list:
    if li == 0:
        element = progressif[ri] ^ 0
    else:
        element = progressif[ri] ^ progressif[li - 1]
    results[element] += 1


sys.stderr.write("out: " + str(elements) + "\n")
print(" ".join(map(str, results)))
