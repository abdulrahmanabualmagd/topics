using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConstructorExecutionOrder
{
    internal class ClassB : ClassA
    {
        // Constructor
        public ClassB() 
        {
            Console.WriteLine("Constructor: ClassB");
        }

        // Destructor
        ~ClassB()
        {
            Console.WriteLine("Destructor:ClassB");
        }
    }
}
