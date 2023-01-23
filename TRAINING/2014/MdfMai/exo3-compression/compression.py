# This code solve the compression challenge of the contest https://www.isograd.com/FR/solutionconcours.php?contest_id=4
s = input()

f, c, tmp = "", "", 0

for i in range(len(s)):
    if c != s[i]:
        f += c*tmp if tmp <= 2 else str(tmp)+c
        tmp = 0
        c = s[i]
        local_print(c)
    tmp += 1
print(f + (c*tmp if tmp <= 2 else str(tmp)+c))