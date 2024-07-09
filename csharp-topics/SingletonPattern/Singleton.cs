using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SingletonPattern
{
    public sealed class Singleton
    {
        private static Singleton instance;
        private static readonly object lockObject = new object();

        private Singleton(){}

        public static Singleton Instance
        {
            get
            {
                // double check 
                if (instance == null )
                {
                    // lock thread => only one thread can enter this section
                    lock (lockObject)
                    {
                        if (instance == null)
                        {
                            instance = new Singleton();
                        }
                    }
                }
                return instance;
            }
        }
    }
}
