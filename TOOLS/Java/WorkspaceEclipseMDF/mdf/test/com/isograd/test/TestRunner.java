package com.isograd.test;

import static org.junit.Assert.fail;

import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.junit.Assert;
import org.junit.Test;

import com.isograd.exercise.IsoContest;

public class TestRunner {

    private final static String testFileDir = "testCases";

    private PrintStream _out = System.out;
    private InputStream _in = System.in;

    @Test
    public void runTest() throws IOException {

        Files.list(Paths.get(testFileDir))
                .filter(p -> p.getFileName().toString().contains("input"))
                .forEach(this::testFile);

        System.out.println("Copy solution to clipboard.");

        byte[] encoded = Files.readAllBytes(Paths.get("src", IsoContest.class.getName().replace('.', '/') + ".java"));
        String theString = new String(encoded, "UTF-8");
        StringSelection selection = new StringSelection(theString);
        Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
        clipboard.setContents(selection, selection);

    }

    private void compareStreams(final InputStream input1, final InputStream input2) throws IOException {
        int line = 1;
        int ch = input1.read();
        while (-1 != ch) {
            int ch2 = input2.read();
            if (13 == ch2) {
                fail("Line " + line + " Expected [" + (char) ch + "] but found [return carriage]");
            }
            if (ch != ch2) {
                fail("Line " + line + " Expected [" + (char) ch + "] but found [" + (char) ch2 + "]");
            }
            ch = input1.read();
            line++;
        }
        int ch2 = input2.read();
        // gestion du saut de ligne en fin de fichier
        while (10 == ch2 || 13 == ch2) {
            ch2 = input2.read();
        }
        if (ch2 != -1) {
            fail("Expected End Of File but found [" + (char) ch2 + "]");
        }
    }

    private void testFile(Path infile) {

        _out.println("test file " + infile.getFileName());

        try {

            String endName = infile.getFileName().toString().substring(5);
            Path outfile = infile.resolveSibling("output" + endName);

            final InputStream expected = new FileInputStream(outfile.toFile());
            final InputStream in = new FileInputStream(infile.toFile());

            final OutputStream outputResult = new ByteArrayOutputStream();
            final PrintStream out = new PrintStream(outputResult);

            System.setIn(in);
            System.setOut(out);

            IsoContest.main(null);

            final InputStream result = new ByteArrayInputStream(
                    ((ByteArrayOutputStream) outputResult).toByteArray());
            System.out.println(result);

            compareStreams(expected, result);
        } catch (Exception e) {
            e.printStackTrace();
            Assert.fail(e.getMessage());
        }

        _out.println(" [OK]");
    }

}
