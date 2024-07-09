using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpDownCasting
{
    public class Parent
    {
        public void OverloadingMethod()
        {
            Console.WriteLine("Parent");
        }

        public virtual void OverrideMethod()
        {
            Console.WriteLine("Parent");
        }

        public virtual void OverrideUsingNew()
        {
            Console.WriteLine("Parent");
        }
    }
}
