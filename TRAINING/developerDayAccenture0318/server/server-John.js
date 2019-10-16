let demands = input.shift();
    input.shift();
    input.sort((a, b) => a.split(' ')[1] - b.split(' ')[1]);
    try{
        input.reduce((acc, curr) => {
            demands -= curr.split(' ')[0];
            if(demands > 0){
                return acc += 1;
            } else {
                throw acc;
            }
        }, 1)
    } catch(e) {
        return e;
    }