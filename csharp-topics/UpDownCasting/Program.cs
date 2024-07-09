namespace UpDownCasting
{
    class Program
    {
        static void Main(string[] args)
        {
            Parent parent = new Child();        // Up Cating, Not Require Explicit Cast
            Child child =   (Child) parent;     // Down Casting, Require Explicit Casting

            // Calling the modified method using the parent type 
            parent.OverrideMethod();            // Output 'Child', Parent see the last modification by the cild dynamically

            parent.OverrideUsingNew();// Output 'parent', Parent can't see child override methods using new, because child hide the parent method

            //parent.OverloadingMethod("ahmed"); // parent can't see child overloads
        }
    }
}