#*******
#* Read input from STDIN
#* Use: echo or print to output your result to STDOUT, use the /n constant at the end of each result line.
#* Use: sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))

N = int(lines[0])
lines = list(map(int, lines[1].split(" ")))

# lines = [2, 3, 8, 1, 5]

commands = []


def push_max_to_end(tab=[]):
    if len(tab) == 0:
        return []
    m = max(tab)
    index = tab.index(m)
    commands.append(index + 1)
    tab = tab[:index+1][::-1] + tab[index+1:]
    commands.append(len(tab))
    tab = tab[::-1]
    return push_max_to_end(tab[:-1]) + [tab[-1]]


out = push_max_to_end(lines)

print(" ".join(map(str, commands)))
