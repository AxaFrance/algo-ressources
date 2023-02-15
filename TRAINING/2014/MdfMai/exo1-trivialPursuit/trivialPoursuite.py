# This is the solution of the Trivial Poursuite for the contest https://www.isograd.com/FR/solutionconcours.php?contest_id=4
print(['violet', 'orange', 'jaune', 'vert', 'rose', 'bleu'][sum(int(line.rstrip('\n')) for line in __import__('sys').stdin)%6])
