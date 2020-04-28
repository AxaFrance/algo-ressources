using System;

namespace BattleDev
{
    public class Program
    {
        public static void Main(string[] args = null)
        {
            var a = int.Parse(Console.ReadLine());
            string line;
            int count = 0;
            while ((line = Console.ReadLine()) != null)
            {
                if (Sum(line) == 42)
                {
                    count++;
                }
            }
            Console.WriteLine(count);
        }

        private static int Sum(string str)
        {
            if (str.Length <= 2)
            {
                return int.Parse(str);
            }
            int sum = 0;
            foreach (var ch in str)
            {
                sum += int.Parse(ch.ToString());
            }

            if (sum > 99)
                return Sum(sum.ToString());

            return sum;
        }
    }
}
