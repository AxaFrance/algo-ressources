/*******
 * Read input from System.in
 * Use: System.out.println to ouput your result to STDOUT.
 * Use: System.err.println to ouput debugging information to STDERR.
 * ***/
package com.isograd.exercise;
import java.util.*;

 

public class IsoContest {
public static void main( String[] argv ) throws Exception {
        String  line;
        int nb = 0;
        Exo exo = null;
        Scanner sc = new Scanner(System.in);
        while(sc.hasNextLine()) {
            line = sc.nextLine();
            /* Lisez les données et effectuez votre traitement */
            switch (nb++) {
                case 0:
                    IsoContestBase.localEcho("Init Exo: " + line);
                    exo = new Exo(Integer.parseInt(line));
                    break;
                default:
                    IsoContestBase.localEcho("Init ligne: " + nb + "> " + line);
                    exo.initLigne(nb, line);
                    break;
            }
        }
        /* Vous pouvez aussi effectuer votre traitement une fois que vous avez lu toutes les données.*/
        System.out.println(exo.nbEnfants);
    }
}

 

class Exo {
    int nbEnfants = 0; 
    
    public Exo(int nbEnfants) {
    }

 

    public void initLigne(int nb, String line) {
        String[] tab = line.split(" ");
        for (String s: tab) {
            int n = Integer.parseInt(s);
            if ((n >= 5)&&(n <= 9)) {
                nbEnfants++;
            }
        }
    }

 

    public void display() {
        IsoContestBase.localEcho("Bilan:");
        // IsoContestBase.localEcho(sb.toString());
    }
}
