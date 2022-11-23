import java.io.FileNotFoundException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
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

    public static void answer() throws ParseException {
        localLog("Dummy local log");

        List<Trajet> trajetsA = new ArrayList<>();
        List<Trajet> trajetsR = new ArrayList<>();

        for (int i = 1; i < lines.length; i++) {
            String[] trajetSplit = lines[i].split(" ");
            String dateInString = "2022-11-22 " + trajetSplit[0];
            SimpleDateFormat formatter = new SimpleDateFormat("YYYY-MM-DD HH:mm:ss", Locale.ENGLISH);
            Date date = formatter.parse(dateInString);

            Trajet trajet = new Trajet();
            trajet.date = date;
            trajet.empreinte = Integer.parseInt(trajetSplit[2]);

            if (lines[i].contains("Paris-Lyon")) {
                trajetsA.add(trajet);
            } else {
                trajetsR.add(trajet);
            }
        }

        long empreinteMin = 9999999999999L;
        for (Trajet trajetA : trajetsA) {
            if (trajetA.empreinte < empreinteMin) {
                for (Trajet trajetR : trajetsR) {
                    if (trajetA.date.before(trajetR.date)) {
                        long empreinte = trajetA.empreinte + trajetR.empreinte;
                        if (empreinte < empreinteMin) {
                            empreinteMin = empreinte;
                        }
                    }
                }
            }
        }

        // Answer
        log(empreinteMin);
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
    

    public static class Trajet {
        public Date date;
        public int empreinte;
    }


}
