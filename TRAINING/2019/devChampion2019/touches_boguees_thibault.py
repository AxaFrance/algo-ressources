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

dictionnaire = dict(zip(
    lines[0].split(" ") + lines[0].upper().split(" "),
    lines[1].split(" ") + lines[1].upper().split(" ")
))

print("".join(map(lambda letter: dictionnaire[letter] if letter in dictionnaire else letter, lines[2])))
