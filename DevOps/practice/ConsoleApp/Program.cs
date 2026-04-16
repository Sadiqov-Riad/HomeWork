using System;
using System.Threading;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.WriteLine("Tick");
                Thread.Sleep(1000); 

                Console.WriteLine("Tack");
                Thread.Sleep(1000); 
            }
        }
    }
}