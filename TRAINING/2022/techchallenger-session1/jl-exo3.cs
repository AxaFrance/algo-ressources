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

        public static int GetTime(string st)
        {
            var split = st.Split(":");
            var h = Convert.ToInt32(split[0]) * 3600;
            var m = Convert.ToInt32(split[1]) * 60;
            var s = Convert.ToInt32(split[2]) * 1;

            return h + m + s;
        }

        class T
        {
            public int C { get; set; }
            public bool aller { get; set; }
            public int time { get; set; }
        }
        public static void Main(string[] args)
        {

            var l = Console.ReadLine();
            string line;
            var arr = new List<T>();
            while ((line = Console.ReadLine()) != null)
            {

                var split = line.Split(" ");
                arr.Add(new T
                {
                    time = GetTime(split[0]),
                    aller = split[1] == "Paris-Lyon",
                    C = Convert.ToInt32(split[2])
                });
                
            }
            arr = arr.OrderBy(x => x.time).ToList();
            //var aller = arr.Where(x => x.aller);
            //var retour = arr.Where(x => !x.aller);

            int min = int.MaxValue;
            for (int i = 0; i < arr.Count; i++)
            {
                var a = arr[i];
                if (a.C >= min || !a.aller)
                    continue;

                for (int j = i+1; j < arr.Count; j++)
                {
                    var b = arr[j];
                    if (!b.aller)
                    {
                        min = Math.Min(a.C + b.C, min);
                    }
                }
            }
            P(min);
        }
    }
}