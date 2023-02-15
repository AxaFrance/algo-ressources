M, costs, case, dice = int(input()),  list(map(int, input().split(' '))),  0, list(map(int, input().split(' ')))

for d in range(len(dice)//2):
	case = (case + dice[d*2] + dice[d*2+1]) % len(costs)
	case = 9 if case == 19 else case
	M -= costs[case]
	if M <= 0: 
	    break

print(str(max((case+1)%(len(costs)+1), 1)))