
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
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

        String input = lines[0];
        localLog(input);

        Map<String, String> lettres = new HashMap<String, String>();
        lettres.put("1","a");
        lettres.put("11","b");
        lettres.put("111","c");

        lettres.put("2","d");
        lettres.put("22","e");
        lettres.put("222","f");

        lettres.put("3","g");
        lettres.put("33","h");
        lettres.put("333","i");

        lettres.put("4","j");
        lettres.put("44","k");
        lettres.put("444","l");

        lettres.put("5","m");
        lettres.put("55","n");
        lettres.put("555","o");

        lettres.put("6","p");
        lettres.put("66","q");
        lettres.put("666","r");

        lettres.put("7","s");
        lettres.put("77","t");
        lettres.put("777","u");
        lettres.put("7777","v");

        lettres.put("8","w");
        lettres.put("88","x");
        lettres.put("888","y");

        lettres.put("9","z");

        lettres.put("0"," ");


        String[] codedletters = input.split(" ");
        String message = "";
        for (int i=0;i<codedletters.length;i++) {
            message=message + lettres.get(codedletters[i]);
        }

        // Answer
        log(message);
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
