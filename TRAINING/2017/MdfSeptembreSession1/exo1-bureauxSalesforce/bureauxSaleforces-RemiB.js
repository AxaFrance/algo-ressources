var input = [];

readline_object.on("line", (value) => {
	input.push(value);
})

readline_object.on("close", contestResponse);

function contestResponse(){
    LocalPrint( "Places" ); 
	var places = input.shift(); /* Shift renvoie le premier élément et modifie le tableau cible. */
    LocalPrint( places );
	input.shift(); /* Retire le premier élément à nouveau (ici correspond au nombre d'équipes) */
	var sortedList = input.map(e=>+e); /* Transforme les entrées en nombres (cast de String vers Number) */
	
	LocalPrintArray( sortedList ); 
	var paires = ""; /* Pour le débug */
	var ans = 0; /* Réponse finale */
	
	for(var u = 0; u < sortedList.length; u++) 
	/*  Gros trick dégueu : sortedList.length est ré-évalué à chaque tour de boucle
		= on boucle toujours sur le 1er élément jusqu'à ce que le tableau soit vide
	*/
	{
	    var element = sortedList[u]; /* Element en cours */
	    var index = sortedList.indexOf(places - element, u+1); /* On cherche l'index dans le tableau d'un élément qui correspond au nombre de places - la valeur en cours */
	    if( index > -1 ) /* Si un élément 'couple' existe */
	    {
	        var trouve = sortedList[index];
	        paires += element + ":" + trouve + ";";
	        sortedList.splice(index, 1); /* On vire l'élément 'couple' du tableau */
	        ans ++;
	    }
	    if( places == element ) /* Il se peut que le nombre que l'on inspecte suffise à remplir l'étage */
	    {
	        ans ++;
	    }
	    sortedList.splice(0, 1); /* On retire le 1er élément du tableau */
	    u--; /* A ne pas oublier, pour boucler tj sur le 1er élément */
	}
	LocalPrint(paires);
	console.log(ans);
	LocalPrint( "" ); 
}