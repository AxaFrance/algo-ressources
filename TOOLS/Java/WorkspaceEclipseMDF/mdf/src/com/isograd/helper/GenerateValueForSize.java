package com.isograd.helper;
// Java program to print all
// possible strings of length k 

import java.util.ArrayList;
import java.util.List;

public class GenerateValueForSize {

    // The method that prints all
// possible strings of length k. 
// It is mainly a wrapper over
// recursive function printAllKLengthRec()
    public static List<String> printAllKLength(char[] set, int k) {
        int n = set.length;
        List<String> result = new ArrayList<>();
        printAllKLengthRec(set, "", n, k, result);
        //result.stream().forEach(System.out::println);
        return result;
    }

    // The main recursive method
// to print all possible  
// strings of length k 
    static void printAllKLengthRec(char[] set,
                                   String prefix,
                                   int n, int k, List<String> list) {

        // Base case: k is 0,
        // print prefix
        if (k == 0) {
            list.add(prefix);
            return;
        }

        // One by one add all characters
        // from set and recursively
        // call for k equals to k-1
        for (int i = 0; i < n; ++i) {

            // Next character of input added
            String newPrefix = prefix + set[i];

            // k is decreased, because
            // we have added a new character
            printAllKLengthRec(set, newPrefix,
                    n, k - 1, list);
        }
    }

    public static List<String> permutation(String str) {
        List<String> result = new ArrayList<>();
        permutation("", str, result);
        return result;
    }

    private static void permutation(String prefix, String str, List<String> list) {
        int n = str.length();
        if (n == 0) list.add(prefix);
        else {
            for (int i = 0; i < n; i++)
                permutation(prefix + str.charAt(i), str.substring(0, i) + str.substring(i+1, n), list);
        }
    }
}