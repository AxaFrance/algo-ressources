

function ContestResponse(){
    //implement your code here using input array
    const N = +input.shift();
    const comptes = [];
    let r = /(\d){5}$/;
    for (let i = 2; i <= N+1; i++) {
        let c = input.shift();
        if (r.test(c)) comptes.push(c);
    }
    
    console.log(comptes.length)
}
