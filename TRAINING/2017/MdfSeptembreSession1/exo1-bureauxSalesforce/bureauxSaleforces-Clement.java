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
		int l = sc.nextInt();
		int n = sc.nextInt();
		
		final Map<Integer,Integer> equipes = new HashMap<>();
		
		int idx = 0;
		while(sc.hasNextLine()) {
		    equipes.put(idx, sc.nextInt());
		    sc.nextLine();
		    idx++;
		}

		int nbEtages = 0;

		final List<Integer> toRemove = new ArrayList<>();
		
		for (final Map.Entry<Integer, Integer> eq1 : equipes.entrySet()) {
		    final Integer idxEq1 = eq1.getKey();
		    final Integer nbEq1 = eq1.getValue();
		    
		    if (toRemove.contains(idxEq1)) {
		        continue;
		    } else if (nbEq1 > l) {
		        continue;
		    } else if (nbEq1 == l) {
		        nbEtages++;
		    } else {
		        int start = idxEq1 + 1;
		        for (int i = start; i < n; i++) {
		            if (toRemove.contains(i)) {
		                continue;
		            }
		            final Integer nbEq2 = equipes.get(i);
    		        if (nbEq1 + nbEq2 == l) {
    		            nbEtages++;
		                toRemove.add(i);
		                break;
    		        }
		        }
		    }

		}

		IsoContestBase.localEcho("l="+l);
		IsoContestBase.localEcho("n="+n);
		
		System.out.println(nbEtages);
		
	}
}