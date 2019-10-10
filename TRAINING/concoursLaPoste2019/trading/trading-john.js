
	const money = input.shift();
	input.shift();
	const result = input.map(action => {
	    const [matin, soir] = action.split(' ').map(Number);
	    if(matin <= money){
	        return soir - matin;
	    }
	    return 0
	}).sort((a, b) => a - b);
	console.log(result[result.length - 1])