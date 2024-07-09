namespace ProblemSolving
{
    internal class Prob2
    {
        public static void Prob()
        {
            // How to count the occurrence of each character of string
            string input = "Hello World";

            Dictionary<string, int> chars = new Dictionary<string, int>();

            foreach(var item in input)
            {
                if (chars.ContainsKey(item.ToString()))
                {
                    chars[item.ToString()] += 1;
                }
                else
                {
                    chars.Add(item.ToString(), 1);
                }
            }

            Console.ReadKey();

        }
    }
}
