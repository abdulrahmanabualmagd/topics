using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Constructors

{
    internal class Person
    {
        #region Private
        private int _id;
        private string _name;
        #endregion

        #region Properties
        public int Id
        {
            get
            {
                return this._id;
            }
            set
            {
                this._id = value;
            }
        }

        public string Name
        {
            get
            {
                return this._name;
            }
            set
            {
                this._name = value;
            }
        }
        #endregion

        #region Constructor

        // Default Constructor 
        public Person() : this(0, "N/A") { }



        // Parameterized Constructor
        public Person(int id, string name)
        {
            this._id = id;
            this._name = name;
        }

        public Person(int id) : this(id, "N/A") { }
        
        public Person(string name) : this (0, name) { }




        // Deep Copy Constructor
        public Person(Person person) : this(person._id, person._name) { }


        // Shallow Copy Method
        public object Clone()
        {
            return this.MemberwiseClone();      // MemberwiseClone => returns a new object that is the same copy of an existing object by copying the values of its individual fields or properties
        }

        #endregion
    }
}
