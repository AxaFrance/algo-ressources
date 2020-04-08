using System;
using System.Collections.Generic;
using System.Linq;

namespace BattleDev
{
    public class Program
    {
        public static void Main()
        {
            string line;
            int total = int.Parse(line = Console.ReadLine());
            int conso = int.Parse(line = Console.ReadLine());
            int station1 = int.Parse(line = Console.ReadLine());
            int station2 = int.Parse(line = Console.ReadLine());
            int station3 = int.Parse(line = Console.ReadLine());
            int dist = int.Parse(line = Console.ReadLine());
            var a = total * 100 / conso;

            if (total * 100 / conso >= dist)
            {
                Console.WriteLine("OK");
                return;
            }
            else if (total * 100 / conso >= station1 && a >= (station2 - station1)
            && a >= (station3 - station2) && a >= (dist - station3))
            {
                Console.WriteLine("OK");
                return;
            }
            Console.WriteLine("KO");
        }
    }
}
