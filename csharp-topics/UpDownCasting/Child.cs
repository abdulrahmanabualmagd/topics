using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpDownCasting
{
    public class Child : Parent
    {
        public void OverloadingMethod(string name)
        {
            Console.WriteLine(name, "child");
        }

        public override void OverrideMethod()
        {
            Console.WriteLine("Child");
        }

        public new void OverrideUsingNew()
        {
            Console.WriteLine("Child");
        }
    }
}
