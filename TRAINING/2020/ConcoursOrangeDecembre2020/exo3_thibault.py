#*******
#* Read input from STDIN
#* Use print to output your result to STDOUT.
#* Use sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys

lines = []
for line in sys.stdin:
	lines.append(line.rstrip('\n'))

lines = lines[1:]
bandes = map(
    lambda line: tuple(map(int, line.split(" "))),
    lines
)

bandes = sorted(bandes)


continous_bands = 1
current_bande_start, current_bande_end = bandes[0]

for bande in bandes[1:]:
    start, end = bande
    if start <= current_bande_end + 1:
        current_bande_start = min(current_bande_start, start)
        current_bande_end = max(current_bande_end, end)
    else:
        current_bande_start = start
        current_bande_end = end
        continous_bands += 1

print(continous_bands)

