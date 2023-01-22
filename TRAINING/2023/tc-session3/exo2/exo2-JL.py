#*******
#* Read input from STDIN
#* Use print to output your result to STDOUT.
#* Use sys.stderr.write() to display debugging information to STDERR
#* ***/
import sys

a = input()
b = input()

last_index = -1
common = ""
for c in a:
    if c in b:
        i = b.index(c)
        if i > last_index:
            last_index = i
            common += c
        else:
            common = ""
            break

if common == "":
    print("NORMAL")
else:
    print("TEMPETE")
    print(common)

#51