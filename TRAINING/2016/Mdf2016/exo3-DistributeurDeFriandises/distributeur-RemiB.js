// Distributeur de friandises

function ContestResponse(){
    //implement your code here using input array
    let montant = input.shift()/1;
    let nbTypesPieces = input.shift()/1;
    let pieces = input.flatMap(v => {
        let [nbPieces, valeur] = v.split` `.map(Number);
        return new Array(nbPieces).fill(0).map(v => valeur);
    });
    
    // console.error(pieces);
    
    let valeursAtteintes = {0:0};
    console.error("Debut");
    console.error("pieces", pieces);
    
    pieces.forEach(piece => {
        let entries = Object.entries(valeursAtteintes);
        entries.forEach(([value, nbPieces]) => {
            let valueNb = Number(value);
            if(!valeursAtteintes[valueNb+piece])
            {
                valeursAtteintes[valueNb+piece] = nbPieces+1;
            }
            let nbPieceJusqueLa = valeursAtteintes[valueNb+piece];
            valeursAtteintes[valueNb+piece] = Math.min(nbPieceJusqueLa, nbPieces+1);
        });
    });
    console.error("valeursAtteintes", valeursAtteintes);
    
    if(!valeursAtteintes[montant])
    {
        console.log("IMPOSSIBLE");
    } else {
        console.log(valeursAtteintes[montant]);   
    }
}