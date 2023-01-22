using System;
using System.Collections.Generic;
using System.Linq;

namespace BattleDev
{
    public class Program
    {
        private static int[] GetIntsLine() => Console.ReadLine().Split(" ").Select(v => int.Parse(v)).ToArray();
        private static int GetIntLine() => int.Parse(Console.ReadLine());
        private static void P(string str) => Console.WriteLine(str);
        private static void P(int str) => Console.WriteLine(str);

        public static (int, int) RI2()
        {
            var s = Console.ReadLine().Split(":");
            return (Convert.ToInt32(s[0]), Convert.ToInt32(s[1]));
        }

        public static (int, int) RI2(string input)
        {
            var s = input.Split(" ");
            return (Convert.ToInt32(s[0]), Convert.ToInt32(s[1]));
        }


        public static int[] RIL()
        {
            return Console.ReadLine().Split(" ").Select(e => Convert.ToInt32(e)).ToArray();
        }

        public static int GetTime(string s)
        {
            var split = s.Split(":");
            var h = Convert.ToInt32(split[0]) * 60;
            var m = Convert.ToInt32(split[1]);

            return h + m;
        }
        public static void Main(string[] args)
        {
            //var l = Console.ReadLine();
            //string line;
            //var arr = new List<string>();
            //while ((line = Console.ReadLine()) != null)
            //{
            //    arr.Add(line);
            //}
            var (h, m) = RI2();
            P(h >= 0 && h <= 24  && m >=0 && m <= 59 ? "YES" : "NO");
        }
    }
}