#*******
#* Read input from STDIN
#* Use print to output your result to STDOUT.
#* Use sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys

lines = []
for line in sys.stdin:
	lines.append(line.rstrip('\n'))

sys.stderr.write(str(lines) + "\n\n")

N, M = map(int, lines[0].split(" "))
opened = list(map(int, lines[1].split(" ")))

ok = len(opened) == N

for day_open in opened:
    if day_open <= N:
        pass  # ok
    else:
        ok = False

print("OK" if ok else "ERREUR")
