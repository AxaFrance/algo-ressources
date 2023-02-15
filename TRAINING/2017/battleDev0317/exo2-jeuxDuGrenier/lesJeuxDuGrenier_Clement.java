/*******
 * Read input from System.in
 * Use System.out.println to ouput your result.
 * Use:
 *  IsoContestBase.localEcho( variable)
 * to display variable in a dedicated area.
 * ***/
package com.isograd.exercise;
import java.util.*;

public class IsoContest {
public static void main( String[] argv ) throws Exception {
		
		Scanner sc = new Scanner(System.in);
		
		int nombreJeux = Integer.valueOf(sc.nextLine());
		
		Set<Integer> liste = new TreeSet<>();

		while(sc.hasNextLine()) {
			int annee = Integer.valueOf(sc.nextLine());
			liste.add(annee);
		}
		
		int max = 0;
		int anneePrecedente = -1;
		for (int annee : liste) {
			
			if (anneePrecedente == -1) {
				anneePrecedente = annee;
				continue;
			}
			
			int diff = annee - anneePrecedente;
			if (diff > max) {
				max = diff;
			}
		}
		
		System.out.println(max);
	}
}