
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class IsoContest {

    static boolean isLocal = false;
    static String LOCAL_LOG_PREFIX = ":::::";
    static String[] lines;
    static ArrayList<String> linesArrayList;

    static String line1;
    static String line2;
    static String line3;


    public static void main(String[] argv) throws Exception {
        readInput(argv);
        answer();
    }

    public static void answer() {
        localLog("Dummy local log");

        // Line 1
        String line1 = lines[0];

        String[] line1split = line1.split(":");
        int heure = Integer.parseInt(line1split[0]);
        int minute = Integer.parseInt(line1split[1]);

        localLog(heure);
        localLog(minute);
        if ((heure >= 0 && heure <= 23) && (minute >= 0 && minute <= 59)) {
            log("YES");
        } else log("NO");
    }


    public static void readInput(String[] argv) throws FileNotFoundException {
        // Récupération du scanner
        Scanner scanner;
        if (argv.length > 0) {
            isLocal = true;
            String inputFile = argv[0];
            localLog("Input file: " + inputFile);
            scanner = new Scanner(new java.io.File(inputFile));
        } else {
            scanner = new Scanner(System.in);
        }

        // Récupération des lignes
        linesArrayList = new ArrayList<>();
        while (scanner.hasNextLine()) {
            linesArrayList.add(scanner.nextLine());
        }
        scanner.close();
        lines = linesArrayList.toArray(new String[linesArrayList.size()]);
    }

    public static void log(Object object) {
        System.out.println(object);
    }

    public static void log() {
        System.out.println();
    }

    public static void localLog(Object object) {
        if (isLocal) System.out.println(LOCAL_LOG_PREFIX + object);
    }

    public static void localLog() {
        if (isLocal) System.out.println(LOCAL_LOG_PREFIX);
    }
}
