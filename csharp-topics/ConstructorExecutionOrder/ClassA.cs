using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConstructorExecutionOrder
{
    internal class ClassA
    {
        // Constructor
        public ClassA()
        {
            Console.WriteLine("Constructor: ClassA");
        }

        // Destructor
        ~ClassA()
        {
            Console.WriteLine("Destructor: ClassA");
        }
    }
}
