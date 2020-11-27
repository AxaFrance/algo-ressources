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

huit_h = 20 * 60
sept_h = 7 * 60 + 59

def f(x: str):
    h, m = x.split(":")
    hh = int(h) * 60 + int(m)

    if huit_h <= hh <= 24*60 or 0 <= hh <= sept_h:
        return True
    return False


x = (list(filter(f, lines)))

if len(lines) / 2 < len(x):
    print("SUSPICIOUS")
else:
    print("OK")

