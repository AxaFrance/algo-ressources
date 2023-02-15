/*******
 * Read input from System.in
 * Use System.out.println to ouput your result.
 * Use:
 *  IsoContestBase.localEcho( variable)
 * to display variable in a dedicated area.
 * ***/
package com.isograd.exercise;

import java.util.*;

/**
 *
 * Attention, les tests sont passés après plusieurs validations
 *
 */
public class IsoContest {
	public static void main(String[] argv) throws Exception {

		Scanner sc = new Scanner(System.in);
		sc.nextLine();
		
		String line = sc.nextLine();

		int cpt = 0;
		int maxCpt = 0;
	
		for (int i = 0; i < line.length(); i++) {

			char x = line.charAt(i);
			
			if ('-' == x) {
				cpt += 1;
				if (cpt > maxCpt) {
					maxCpt = cpt;
				}
				cpt = 0;
			} else if ('_' == x) {
				cpt++;
			}

		}
		
		if (maxCpt == 0) {
			maxCpt = 1;
		}
		
		System.out.println(maxCpt);

	}
}