using System;
using System.Linq;
using System.Collections.Generic;

namespace BattleDev
{
    public class Program
    {

        private int[] GetIntsLine() => Console.ReadLine().Split(" ").Select(v => Int32.Parse(v)).ToArray();
        private int GetIntLine() => Int32.Parse(Console.ReadLine());
        public static void Main(string[] args)
        {
            string line;
            while ((line = Console.ReadLine()) != null)
            {
                Console.WriteLine(Math.Pow(int.Parse(line), 2));
            }
            //résultat
            Console.WriteLine();
        }
    }
}
