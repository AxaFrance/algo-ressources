using System;
using System.Collections.Generic;
using System.Linq;

namespace BattleDev
{
    public class Program
    {
        public static void Main()
        {
            string line = Console.ReadLine();
            var split = line.Split(' ');
            int nbPers = int.Parse(split[0]);

            List<int>[] rels = new List<int>[nbPers + 1];

            for (int i = 0; i < nbPers + 1; i++)
            {
                rels[i] = new List<int>();
            }

            while ((line = Console.ReadLine()) != null)
            {
                split = line.Split(' ');
                rels[int.Parse(split[0])].Add(int.Parse(split[1]));
                rels[int.Parse(split[1])].Add(int.Parse(split[0]));
            }

            int bffId = -1;
            int bffCount = 1;
            foreach (var myrels in rels[1])
            {
                var intersect = rels[myrels].Intersect(rels[1]);
                if (bffCount < intersect.Count())
                {
                    bffId = myrels;
                    bffCount = intersect.Count();
                }
                else if (bffCount == intersect.Count())
                {
                    bffId = Math.Max(bffId, myrels);
                }
            }

            Console.WriteLine(bffId);
        }
     }
}
