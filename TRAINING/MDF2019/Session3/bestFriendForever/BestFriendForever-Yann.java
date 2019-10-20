/*******
 * Read input from System.in
 * Use: System.out.println to ouput your result to STDOUT.
 * Use: System.err.println to ouput debugging information to STDERR.
 * ***/
package fr.yirrilo.contest.mdf.tk19.h1520.b;
import java.io.InputStream;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class IsoContest {

	public static void main( String[] argv ) throws Exception {
		InputStream inputStream = System.in;
		String response = doJob(inputStream);
		System.out.print(response);
	}

	public static String doJob(InputStream inputStream) {
		String  line;
		Scanner sc = new Scanner(inputStream);
		int nbPeople = sc.nextInt();
		sc.nextLine();
		@SuppressWarnings("unchecked")
		HashSet<Integer>[] relations = new HashSet[nbPeople];
		while(sc.hasNextLine()) {
			line = sc.nextLine();
			String[] relation=line.split(" ");
			addRelation(relations,relation[0],relation[1]);
			addRelation(relations,relation[1],relation[0]);
		}
		HashSet<Integer> curList = new HashSet<Integer>();
		int result = -1;
		for (int i = 1; i < relations.length; i++) {
			HashSet<Integer> commonFriend = relations[i];
			commonFriend.retainAll(relations[1]);
			if(commonFriend.size() >= curList.size()) {
				curList = commonFriend;
				result = i+1;
			}
		}
		return ""+result;
	}

	private static void addRelation(Set<Integer>[] relations, String string, String string2) {
		int master = Integer.valueOf(string)-1;
		int slave = Integer.valueOf(string2)-1;

		if(relations[master] == null) {
			relations[master] = new HashSet<Integer>();
		}
		relations[master].add(slave);
	}
}