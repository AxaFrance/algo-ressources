/*******
 * Read input from System.in
 * Use: System.out.println to ouput your result to STDOUT.
 * Use: System.err.println to ouput debugging information to STDERR.
 * ***/
package com.isograd.exercise;
import java.util.*;

public class IsoContestCreditAgricoleB {
public static void main( String[] argv ) throws Exception {
		String  line;
		Scanner sc = new Scanner(System.in);
		int nb = 0;
		while(sc.hasNextLine()) {
			line = sc.nextLine().trim();
			
			while(line.length()>2) {
				line = nextLine(line);
			}
			if("42".equals(line)){
				nb++;
			}
		}
		System.out.println(nb);
	/* Vous pouvez aussi effectuer votre traitement une fois que vous avez lu toutes les données.*/
	}

	private static String nextLine(String line) {
		return "" + line.chars().map(x-> x - '0').sum();
		
	}
}
