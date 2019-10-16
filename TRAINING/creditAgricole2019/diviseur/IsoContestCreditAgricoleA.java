/*******
 * Read input from System.in
 * Use: System.out.println to ouput your result to STDOUT.
 * Use: System.err.println to ouput debugging information to STDERR.
 * ***/
package com.isograd.exercise;
import java.util.*;

public class IsoContestCreditAgricoleA {
public static void main( String[] argv ) throws Exception {
		String  line;
		Scanner sc = new Scanner(System.in);
		int min = sc.nextInt();
		sc.nextLine();
		int max = sc.nextInt();
		sc.nextLine();
		int denominateur = sc.nextInt();
		sc.nextLine();
		int result = ((min + denominateur -1) / denominateur) * denominateur;
		System.out.println(result);
	}
}
