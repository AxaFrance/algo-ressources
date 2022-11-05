#*******
#* Read input from STDIN
#* Use: echo or print to output your result to STDOUT, use the /n constant at the end of each result line.
#* Use: sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))
sys.stderr.write(str(lines) + "\n\n")
# lines = ['20', '10', '200', '400', '600', '800']

capacite = int(lines[0])
consommation = int(lines[1])
distance = int(lines[5])
lines = lines[2:5]

ok = True
previous = 0
for i in lines + [distance]:
    i = int(i)
    if (i - previous) * (consommation/100) > capacite:
        ok = False
        break
    previous = i

print("OK" if ok else "KO")
