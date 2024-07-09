namespace ImplicitExplicitOverload
{
    class Program
    {
        static void Main(string[] args)
        {
            Degree degree = new Degree(1, 2);

            double  d1 = degree;            // Output the first value because we're using implicit casting for double datatype
            int     d2 = (int)degree;       // Output the second value because we're using explicit casting (int)
            Console.WriteLine(d1);
            Console.WriteLine(d2);
        }
    }
}