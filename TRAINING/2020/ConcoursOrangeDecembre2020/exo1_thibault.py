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


sapin = max(filter(lambda sapin: int(sapin) <= 250,
    map(lambda sapin: int(sapin), lines)
))

print(sapin)
