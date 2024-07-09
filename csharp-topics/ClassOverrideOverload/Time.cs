using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassOverrideOverload
{
    internal class Time
    {
        #region Properites 
        public int Hours { get; set; }
        public int Minutes { get; set; }
        public int Seconds { get; set; }
        #endregion

        #region Ctor
        public Time(int hours, int minutes, int seconds)
        {
            Hours = hours;
            Minutes = minutes;
            Seconds = seconds;
        }
        public Time(int seconds)
        {

            Hours = seconds / 3600;

            Minutes = (seconds - (Hours * 3600)) / 60;

            Seconds = seconds - (Hours * 3600) - (Minutes * 60);

        }
        // Default
        public Time() : this(0, 0, 0) { }

        // Deep Copy
        public Time(Time time) : this(time.Hours, time.Minutes, time.Seconds) { }

        // Shallow Copy
        public object Clone()
        {
            return this.MemberwiseClone();
        }
        #endregion

        #region Override Methods
        public override bool Equals(object? obj)
             => this.Equals(obj);

        public override int GetHashCode()
            => this.GetHashCode();

        public override string ToString()
            =>  $"Hours: {Hours}, Minutes: {Minutes}, Seconds: {Seconds}";
        #endregion

        #region Overload Methods

        #region Add
        public static Time operator +(Time a, Time b)
            => new Time(a.Hours + b.Hours, a.Minutes + b.Minutes, a.Seconds + b.Seconds);

        public static Time operator +(Time a, int seconds)
            => a + new Time(seconds);

        public static Time operator +(int seconds, Time a)
        => a + new Time(seconds);
        #endregion

        #region Subtract
        public static Time operator -(Time a, Time b)
            => new Time(a.Hours - b.Hours, a.Minutes - b.Minutes, a.Seconds - b.Seconds);

        public static Time operator -(Time a, int seconds)
            => a - new Time(seconds);

        public static Time operator -(int seconds, Time a)
        => new Time(seconds) - a;
        #endregion

        #region Postfix & Prefix
        public static Time operator ++(Time a)
            => a + new Time(60);

        public static Time operator --(Time a)
            => a - new Time(60);
        #endregion

        #region Greater & Lower than
        public static bool operator <(Time a, Time b)
        {
            int seconds1 = a.Hours * 3600 + a.Minutes * 60 + a.Seconds;
            int seconds2 = a.Hours * 3600 + a.Minutes * 60 + a.Seconds;
            return seconds1 < seconds2;
        }

        public static bool operator >(Time a, Time b)
        {
            int seconds1 = a.Hours * 3600 + a.Minutes * 60 + a.Seconds;
            int seconds2 = a.Hours * 3600 + a.Minutes * 60 + a.Seconds;
            return seconds1 > seconds2;
        }
        #endregion

        #region Greater or Equal & Lower or Equal than
        public static bool operator <=(Time a, Time b)
        {
            int seconds1 = a.Hours * 3600 + a.Minutes * 60 + a.Seconds;
            int seconds2 = a.Hours * 3600 + a.Minutes * 60 + a.Seconds;
            return seconds1 <= seconds2;
        }

        public static bool operator >=(Time a, Time b)
        {
            int seconds1 = a.Hours * 3600 + a.Minutes * 60 + a.Seconds;
            int seconds2 = a.Hours * 3600 + a.Minutes * 60 + a.Seconds;
            return seconds1 >= seconds2;
        }
        #endregion

        #region Equality
        public static implicit operator bool(Time a)
            => a.Hours == 0 && a.Minutes == 0 && a.Seconds == 0;
        #endregion

        #region DateTime
        public static explicit operator DateTime(Time a)
            => new DateTime(1, 1, 1, a.Hours, a.Minutes, a.Seconds);
        #endregion

        #endregion
    }
}
