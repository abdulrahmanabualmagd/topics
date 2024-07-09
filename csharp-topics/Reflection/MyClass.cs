using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reflection
{
    public class MyClass
    {
        public int MyProperty1 { get; set; }
        public int MyProperty2 { get; set; }
        public int MyProperty3 { get; set; }
        public void MyMethod1(string message)
        {
            Console.WriteLine(message);
        }
        public void MyMethod2(string message)
        {
            Console.WriteLine(message);
        }
        public void MyMethod3(string message)
        {
            Console.WriteLine(message);
        }
    }
}
