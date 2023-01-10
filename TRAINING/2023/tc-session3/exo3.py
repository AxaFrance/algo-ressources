#*******
#* Read input from STDIN
#* Use print to output your result to STDOUT.
#* Use sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys
from collections import defaultdict
from functools import cache

lines = []
for line in sys.stdin:
    lines.append(line.rstrip('\n'))
    

graph = defaultdict(list)
for line in lines:
    a,b = map(int, line.split(" "))
    graph[a].append(b)
    
count = defaultdict(lambda: 0)

@cache
def count_modules(k):
    global graph
    if len(graph[k]) == 0:
        return 1
    return sum([count_modules(child) for child in graph[k]])
        

best = 0
best_node = 0
keys = list(graph.keys())
for k in keys:
    v = count_modules(k)
    if v > best:
        best = v
        best_node = k

print(best_node)
        