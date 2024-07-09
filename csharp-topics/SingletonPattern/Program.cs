namespace SingletonPattern
{
    class Protram
    {
        static void Main(string[] args)
        {
            Singleton instance1 = Singleton.Instance;    // Create new instance 
            Singleton instance2 = Singleton.Instance;    // Return the same instance as in instance2
        }
    }
}