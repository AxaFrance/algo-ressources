function ContestResponse(){
    //implement your code here using input array
    
    /* 
        Disclaimer: ce code ne marche pas à tous les coups
    */
    
    let [Xdest, Ydest] = input.shift().split` `.map(BigInt);
    let instructions = input.shift().split``;
    
    let pointsPattern = [[0n,0n]];
    
    let xCourant = 0n;
    let yCourant = 0n;
    instructions.forEach(instruction =>  {
        switch(instruction)
        {
            case "U":
                yCourant++;
                break;
            case "R":
                xCourant++;
                break;
            case "D":
                yCourant--;
                break;
            case "L":
                xCourant--;
                break;
            default:
                console.error(instruction);
            break;
        }
        pointsPattern.push([xCourant, yCourant]); // On fait le parcours de notre pattern
    });
    
    let dernier = pointsPattern[pointsPattern.length - 1];
    let [dx, dy] = dernier; 
    /* 
        dX et dY représentent le total de décalage que notre pattern a à la fin.
        Le pattern va se répéter et chacun de ses points va décaler de dX, dY
    */
    
    let answer = Infinity;
    
    for(let i = 0; i < pointsPattern.length; i++)
    {
        let point = pointsPattern[i];
        let [x, y] = point;
        
        /*
            Pour chaque point:
            Si notre point actuel peut atteindre XDest avec un nombre de dX
            et YDest avec un nombre de dY
        */
        if( (Xdest - x) % (dx||1n) == 0n && (Ydest - y) % (dy||1n) == 0n )
        {
            let rapportDx = (Xdest - x) / (dx||1n);
            let rapportDy = (Ydest - y) / (dy||1n);
            
            // Est-ce que l'on a les mêmes rapports dx et dy ?
            if(rapportDx == rapportDy && rapportDx > 0)
            {
                let notreReponse = (rapportDx * BigInt(instructions.length) + BigInt(i))
                answer = notreReponse < answer ? notreReponse : answer;
            }
        }
    }
    
    console.log(answer == Infinity ? "not possible" : answer.toString());
}