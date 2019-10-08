package com.isograd.exercise;

import java.io.*;

public class IsoContestBase {

    public static void localEcho(final Object obj) {
        try {
            BufferedWriter out = new BufferedWriter(new OutputStreamWriter(new
                    FileOutputStream(FileDescriptor.out), "ASCII"), 512);
            out.write("DEBUG:" + obj.toString());
            out.write('\n');
            out.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
