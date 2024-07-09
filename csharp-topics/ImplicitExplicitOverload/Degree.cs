using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImplicitExplicitOverload
{
    public class Degree
    {
        public double Value1 { get; set; }
        public double Value2 { get; set; }

        public Degree(double v1, double v2) 
        {
            Value1 = v1;
            Value2 = v2;
        }

        public static implicit operator double(Degree degree)
        {
            return degree.Value1;
        }
        public static explicit operator int(Degree degree)
        {
            return (int)degree.Value2;  // Here it require a cast because we are converting from double (bigger) to int (smaller)
        }
    }
}
