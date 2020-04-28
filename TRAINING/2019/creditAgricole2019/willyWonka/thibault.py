#*******
#* Read input from STDIN
#* Use: echo or print to output your result to STDOUT, use the /n constant at the end of each result line.
#* Use: sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

lines = lines[1:]


def somme_iteree(str_n):
    n = int(str_n)
    if n <= 99:
        return n
    n = 0
    for s in str_n:
        s = int(s)
        n += s
    return somme_iteree(str(n))


count = 0
for line in lines:
    n = somme_iteree(line)
    if n == 42:
        count += 1
print(count)
