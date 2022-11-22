#*******
#* Read input from STDIN
#* Use: echo or print to output your result to STDOUT, use the /n constant at the end of each result line.
#* Use: sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys
from collections import defaultdict

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))
sys.stderr.write(str(lines) + "\n\n")
# lines = ['10 10', '1 8', '1 9', '1 5', '6 10', '6 3', '7 6', '2 2', '4 10', '4 9', '2 8', '3 8', '6 4', '5 4', '3 5']

N, M = list(map(int, lines[0].split(" ")))
lines = lines[1:]
friends = {}


def add(a, b):
    if a not in friends:
        friends[a] = set()
    spa = friends[a]
    spa.add(b)
    friends[a] = spa


for line in lines:
    p1, p2 = list(map(int, line.split(" ")))
    add(p1, p2)
    add(p2, p1)

if 1 not in friends:
    print(-1)
    sys.exit(0)

me = friends[1]
del friends[1]
best_list = []
best = 0
for friend, friend_list in friends.items():
    if friend not in me:
        continue
    n = len(me.intersection(friend_list))
    if n > best:
        best = n
        best_list = [friend]
    elif n == best:
        best_list.append(friend)

if best == 0:
    print(-1)
else:
    print(list(reversed(sorted(best_list)))[0])
