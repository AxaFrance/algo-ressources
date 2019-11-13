#*******
#* Read input from STDIN
#* Use: echo or print to output your result to STDOUT, use the /n constant at the end of each result line.
#* Use: sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

s = set()
lines = lines[1:]
lines = list(map(int, lines))

numbers = 2, 3, 5, 7, 11

for color in lines:
    for n in numbers:
        if color % n == 0:
            s.add(n)

lst = list(map(str, sorted(list(s))))
print(" ".join(lst))
