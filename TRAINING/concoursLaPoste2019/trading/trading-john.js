
	const money = input.shift();
	input.shift();
	const result = input.map(action => {
			const [matin, soir] = action.split(' ').map(Number);
			return matin <= money ? soir - matin : 0;
	}).sort((a, b) => b - a);
	console.log(result[0])