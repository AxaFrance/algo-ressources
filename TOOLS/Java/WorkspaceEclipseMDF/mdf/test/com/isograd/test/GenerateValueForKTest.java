package com.isograd.test;

import com.isograd.helper.GenerateValueForSize;
import org.junit.Assert;
import org.junit.Test;

import java.util.List;

public class GenerateValueForKTest {

    @Test
    public void printAllGenerate() {
        char[] set1 = {'a', 'b'};
        int k = 3;

        List<String> actual = GenerateValueForSize.printAllKLength(set1, k);

        System.out.println(actual);
        Assert.assertTrue(8==actual.size());
        Assert.assertTrue(actual.contains("aaa"));
        Assert.assertTrue(actual.contains("aab"));
        Assert.assertTrue(actual.contains("aba"));
        Assert.assertTrue(actual.contains("baa"));
        Assert.assertTrue(actual.contains("bbb"));
    }

    @Test
    public void printAllPermutation() {
        String set1 = "ab";

        List<String> actual = GenerateValueForSize.permutation(set1);

        Assert.assertTrue(2==actual.size());
        Assert.assertTrue(actual.contains("ab"));
        Assert.assertTrue(actual.contains("ba"));
    }
}