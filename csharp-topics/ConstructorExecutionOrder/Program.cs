namespace ConstructorExecutionOrder
{
    class Program
    {
        static void Main(string[] args)
        {
            // Ctor A => Ctor B => DCtor A => DCtor B
            ShowOrder();


            // Explicitly call the garbage collector
            GC.Collect();
            GC.WaitForPendingFinalizers();
        }

        static void ShowOrder()
        {
            ClassB classB = new ClassB();
        }
    }
}