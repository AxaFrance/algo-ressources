    public class Program
    {
        public void Exo1()
        {
            if (Regex.IsMatch(Console.ReadLine(), "^(?:0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"))
            {
                Console.WriteLine("YES");
                return;
            }
            Console.WriteLine("NO");
        }

        public void Exo2()
        {
            string[] data =
            {
                "1", "11", "111", "2", "22", "222", "3", "33", "333", "4", "44", "444", "5", "55", "555", "6", "66",
                "666", "7", "77", "777", "7777", "8", "88", "888", "9", "0"
            };
            string alphabet = "abcdefghijklmnopqrstuvwxyz ";
            string res = "";
            string[] entry = Console.ReadLine().Split(" ");
            for (int i = 0; i < entry.Length; i++)
            {
                res += alphabet[Array.IndexOf(data, entry[i])];
            }
            Console.WriteLine(res);
        }

        public void Exo3()
        {
            int N = int.Parse(Console.ReadLine());
            Tuple<DateTime, bool, int>[] trajet = new Tuple<DateTime, bool, int>[N];
            for (int i = 0; i < N; i++)
            {
                var tmp = Console.ReadLine().Split(" ");
                trajet[i] = Tuple.Create(DateTime.Parse(tmp[0]), tmp[1] == "Paris-Lyon", int.Parse(tmp[2]));
            }

            trajet = trajet.OrderBy(t => t.Item1).ToArray();
            double minAller = Math.Pow(10, 10);
            double best = Math.Pow(10, 10);
            for (int i = 0; i < N; i++)
            {
                if (trajet[i].Item2)
                    minAller = Math.Min(trajet[i].Item3, minAller);
                else
                {
                    best = Math.Min(best, minAller + trajet[i].Item3);
                }
            }
            Console.WriteLine(best);
        }
    }
