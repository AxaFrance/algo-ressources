/*******
 * Read input from System.in
 * Use System.out.println to ouput your result.
 * Use:
 *  IsoContestBase.localEcho( variable)
 * to display variable in a dedicated area.
 * ***/
package com.isograd.sample;

import com.isograd.exercise.IsoContestBase;

import java.util.*;
import java.util.stream.Collectors;

public class SalonAgriculture {
    public static void main(String[] argv) throws Exception {
        String line;
        Scanner sc = new Scanner(System.in);

        Integer nbLine = getInt(sc.nextLine());
        Map<Double, ArrayList<String>> trier = new HashMap<>();
        while (sc.hasNextLine()) {
            line = sc.nextLine();
            String[] lineSplit = line.split(" ");
            String split1 = lineSplit[0];
            Integer split2 = getInt(lineSplit[1]);
            Integer split3 = getInt(lineSplit[2]);
            Integer split4 = getInt(lineSplit[3]);
            Integer split5 = getInt(lineSplit[4]);
            if (split2 < 2 || split2 > 5) {
                continue;
            }

            if (split3 < 1250 || split3 > 1500) {
                continue;
            }

            Double moyenne = Double.valueOf((split4 + split5)/ 2.00);

            if (trier.get(moyenne) == null) {
                trier.put(moyenne, new ArrayList<String>());
            }

            trier.get(moyenne).add(split1);

            /* Lisez les données et effectuez votre traitement */
            IsoContestBase.localEcho(moyenne);
        }

        Double max = trier.keySet().stream().max(Comparator.comparingDouble(Double::valueOf)).get();
        System.out.println(trier.get(max).stream().collect(Collectors.joining(" ")));
        /* Vous pouvez aussi effectuer votre traitement une fois que vous avez lu toutes les données.*/
    }

    private static Integer getInt(String value) {
        return Integer.valueOf(value);
    }

    private static String getString(Object value) {
        return String.valueOf(value);
    }
}