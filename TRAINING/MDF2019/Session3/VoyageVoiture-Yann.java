/*******
 * Read input from System.in
 * Use: System.out.println to ouput your result to STDOUT.
 * Use: System.err.println to ouput debugging information to STDERR.
 * ***/
package fr.yirrilo.contest.mdf.tk19.h1520.a;
import java.io.InputStream;
import java.util.Scanner;


public class IsoContest {

	public static void main( String[] argv ) throws Exception {
		InputStream inputStream = System.in;
		String response = doJob(inputStream);
		System.out.print(response);
	}

	public static String doJob(InputStream inputStream) {
		Scanner sc = new Scanner(inputStream);
		float capacite = sc.nextInt();
		sc.nextLine();
		float conso = Integer.valueOf(sc.nextLine());
		float km = 0;
		float reservoir = capacite;
		for (int i = 0; i < 3 ; i++ ){
		    int totalStation = Integer.valueOf(sc.nextLine());
		    if((totalStation-km)*conso/100.0>reservoir){
		        System.out.println("KO");
		        return "KO";
		    }
		    km=totalStation;
		    reservoir=capacite;
		} 
		float goal = Integer.valueOf(sc.nextLine());
		return ""+((goal-km)*conso/100.0<=reservoir?"OK":"KO");
	}
}