namespace ProblemSolving
{
    internal static class Prob1
    {

        // How to find all possible substring of a given string 
        // Input: ABCD      Output: A AB ABC ABCD B BC BCD C CD 
        
        public static void prob()
        {
            string data = "ABCD";
            string temp = "";

            for (int i = 0; i < data.Length; i++)
            {

                temp = data[i].ToString();

                for (int j = i; j < data.Length; j++)
                {
                    if (j == i)
                    {
                        Console.Write(temp + " ");
                        continue;
                    }

                    temp += data[j];

                    Console.Write(temp + " ");
                }
            }
        }

    }
}
