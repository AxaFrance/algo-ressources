using System;

namespace BattleDev
{
    public class Program
    {
        public static void Main()
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
