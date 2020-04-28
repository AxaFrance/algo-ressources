#*******
#* Read input from STDIN
#* Use: echo or print to output your result to STDOUT, use the /n constant at the end of each result line.
#* Use: sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

A, B, D = list(map(int, lines))
for i in range(A, B + 1):
    if i % D == 0:
        print(i)
        sys.exit(0)
