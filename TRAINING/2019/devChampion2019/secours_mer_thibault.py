#*******
#* Read input from STDIN
#* Use: echo or print to output your result to STDOUT, use the /n constant at the end of each result line.
#* Use: sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys
import math

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

lines = lines[1:]
lines = list(map(int, lines))
allers = 0
for n in lines:
    allers += math.ceil(n / 10)
print(allers)
