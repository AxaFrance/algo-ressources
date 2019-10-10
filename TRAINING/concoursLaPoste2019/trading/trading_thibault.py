#*******
#* Read input from STDIN
#* Use: echo or print to output your result to STDOUT, use the /n constant at the end of each result line.
#* Use: sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

somme = int(lines[0])
N = int(lines[1])
lines = lines[2:]

total = []
for line in lines:
    matin, soir = list(map(int, line.split(" ")))
    if matin <= somme:
        if matin <= soir:
            total.append(soir - matin)
if len(total) == 0:
    print(0)
else:
    print(max(total))
