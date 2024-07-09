namespace CustomException
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                ThrowException();
            }
            catch (UserDefinedException ex)
            {
                Console.WriteLine(ex.Message.ToString());
                Console.WriteLine(ex.AdditinoalExceptionInformation);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
        }

        static void ThrowException()
        {
            throw new UserDefinedException("User Defined Exception!")
            {
                AdditinoalExceptionInformation = "This is Additional Information for the user Defined Exception"
            };
        }
    }
}