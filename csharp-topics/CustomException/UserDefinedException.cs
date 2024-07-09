using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomException
{
    internal class UserDefinedException : Exception
    {
        #region Ctor
        internal UserDefinedException() : base() { }
        internal UserDefinedException(string message) : base(message) { }
        internal UserDefinedException(string message, Exception innerException) : base(message, innerException) { } 
        #endregion

        // Additional Exception Information
        public string AdditinoalExceptionInformation { get; set; }
    }
}
