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

public class SeanceFractionner {
    public static void main(String[] argv) throws Exception {
        Scanner sc = new Scanner(System.in);

        Integer nbLine = getInt(sc.nextLine());
        Map<Double, ArrayList<String>> trier = new HashMap<>();
        int sprintRestant = 14*60;
        List<Integer> encours = new ArrayList<>();
        while (sc.hasNextLine()) {
            String line = sc.nextLine();
            String[] lineSplit = line.split(" ");
            String first = lineSplit[0];
            Integer time = Integer.valueOf(lineSplit[1]);

            if (first.equals("S")) {
                encours.add(time);
                sprintRestant -= Integer.valueOf(time);
            }
            /* Lisez les données et effectuez votre traitement */
        }

        IsoContestBase.localEcho("FBA " + encours.stream().reduce(Integer::sum));
        System.out.println(sprintRestant);
        /* Vous pouvez aussi effectuer votre traitement une fois que vous avez lu toutes les données.*/
    }

    private static Integer getInt(String value) {
        return Integer.valueOf(value);
    }

    private static String getString(Object value) {
        return String.valueOf(value);
    }
}