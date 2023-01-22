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
            var alpha = "abcdefghijklmnopqrstuvwxyzz ".ToArray();
            var map = new List<string>() {  "1", "11", "111", "2", "22", "222", "3", "33", "333", "4", "44", "444", "5", "55", "555", "6", "66", "666", "7", "77", "777", "7777", "8", "88", "888", "8888", "9", "0" };

            var p = Console.ReadLine().Split(" ").Select(d =>
            {
                var i = map.IndexOf(d);
                return alpha[i];
            });
            
            P(string.Join("", p));
        }
    }
}