function ContestResponse(){
    //implement your code here using input array
    console.error("debut");
    let [H, L] = input.shift().split` `.map(Number);
    let tableau = input.map(v => v.replace(/\./g, 0).split``);
    let change = true;
    let i = 0;
    while(change)
    {
        change = false;
        for(let y = 0; y < H; y++)
        {
            for(let x = 0; x < L; x++)
            {
                if(tableau[y][x] == "#")
                {
                    let voisins = getCoordsVoisins(x, y, false);
                    let proches = voisins.map(v => {
                        let valide = isValidPos(tableau, v[1], v[0]);
                        if(valide)
                        {
                            return tableau[v[1]][v[0]];
                        } else {
                            return 0;
                        }
                    }).filter(v => v != "#");
                    if(proches.length)
                    {
                        let profondeur = (Math.min(...proches));
                        if(profondeur <= i)
                        {
                            tableau[y][x] = (Math.min(...proches) + 1);
                            change = true;
                        }
                    }
                }
            }
        }
        i++;
    }
    console.error(JSON.stringify(tableau.flatMap(v => v)));
    console.log(Math.max(...tableau.flatMap(v => v)));
}

function isValidPos(tableau2D, x, y)
{
    let tailleYMax = tableau2D.length;
    let tailleXMax = tableau2D[0].length;
    if(x >= 0 && x < tailleXMax && y >= 0 && y < tailleYMax)
    {
        return true;
    }
    return false;
}

function getCoordsVoisins(x, y, diagonales=true)
{
    let coords = [];
    coords.push([x+1, y]);
    coords.push([x, y+1]);
    coords.push([x, y-1]);
    coords.push([x-1, y]);
    if(diagonales)
    {
        coords.push([x-1, y-1]);
        coords.push([x+1, y+1]);
        coords.push([x-1, y+1]);
        coords.push([x+1, y-1]);
    }
    return coords;
}