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

mp = ""
ms = 1000000

for line in lines:
	p, s = line.split(" ")
	s = int(s)
	if s < ms:
		mp = p
		ms = s

print(mp)
