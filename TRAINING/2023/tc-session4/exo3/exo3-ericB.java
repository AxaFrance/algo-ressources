import java.io.FileNotFoundException;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;
import java.util.Scanner;

public class IsoContest {

    static boolean isLocal = false;
    static String LOCAL_LOG_PREFIX = ":::::";
    static String[] arrayLine;
    static List<String> listLine;
    static String line1;
    static String line2;
    static String line3;


    public static void main(String[] argv) throws Exception {
        readInput(argv);
        answer();
    }

    public static void answer() {
        localLog("Line 1: \"" + line1 + "\"");

        String[] arrayMot = line1.split(" ");

        Deque<Integer> memoire = new ArrayDeque<>();

        for (int i = 0; i < arrayMot.length; i++) {
            String mot = arrayMot[i];

            if (mot.equals("+")) {
                memoire.addFirst(memoire.removeLast() + memoire.removeLast());
            } else if (mot.equals("*")) {
                memoire.addFirst(memoire.removeLast() * memoire.removeLast());
            } else if (mot.equals("<>")) {
                int a = memoire.removeLast();
                int b = memoire.removeLast();
                memoire.addFirst(b);
                memoire.addFirst(a);
            } else if (mot.equals("-")) {
                memoire.addFirst(-memoire.removeLast());
            } else {
                memoire.addFirst(Integer.parseInt(mot));
            }
            localLog(mot + " " + memoire);
        }

        // Answer
        System.out.println(memoire.getFirst());
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
        listLine = new ArrayList<>();
        while (scanner.hasNextLine()) {
            listLine.add(scanner.nextLine());
        }
        scanner.close();
        arrayLine = listLine.toArray(new String[listLine.size()]);
        line1 = arrayLine[0];
        if (arrayLine.length >= 2) line2 = arrayLine[1];
        if (arrayLine.length >= 3) line3 = arrayLine[2];
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
