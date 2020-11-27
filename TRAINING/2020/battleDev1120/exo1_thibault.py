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


def f(x: str):
    a = x[-5:]
    return a.isnumeric()

print(len(list(filter(f, lines))))
