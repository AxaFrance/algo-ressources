#*******
#* Read input from STDIN
#* Use print to output your result to STDOUT.
#* Use sys.stderr.write() to display debugging information to STDERR
#* ***/
from typing import Tuple
import sys

lines = []
for line in sys.stdin:
	lines.append(line.rstrip('\n'))
sys.stderr.write(str(lines) + "\n\n")
# lines = ['7 3', '2 5 7']

modulo = 1_000_000_007
N, M = map(int, lines[0].split(" "))
groups = set(map(int, lines[1].split(" ")))

cache = {}


def compute(nm: Tuple[int, int]) -> int:
    cached_value = cache.get(nm)
    if cached_value is not None:
        return cached_value
    me, neighbour = nm
    min_group = min(groups)
    if me < min_group:
        return 0
    if neighbour < min_group:
        return len(list(filter(lambda g: g <= me, groups)))
    
    result = 0
    for g in groups:
        if me - g >= 0:
            result += compute((me - g, neighbour))
        if neighbour - g >= 0:
            result += compute((me, neighbour - g))
    
    cache[nm] = result % modulo
    return result % modulo


print(compute((N, M)))

