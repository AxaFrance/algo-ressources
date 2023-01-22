#* Use print to output your result to STDOUT.
#* Use sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys

n = int(input())

for i in range(4):
    if n % 3 == 0:
        n = n//3
    elif n % 2 == 0:
        n = n //2
    else:
        n -= 1
        
print(n)