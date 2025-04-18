using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Async_await
{
    public static class AsyncOperations
    {
        public static List<int> GenerateRandomNumbers(int count, int min, int max)
        {
            Random random = new Random();
            
            List<int> nums = new List<int>();
            
            for (int i = 0; i < count; i++)
            {
                int number = random.Next(min, max + 1);
                
                nums.Add(number);
            }
            
            return nums;
        }
        
        public static void PrintList(List<int> list)
        {
            Console.WriteLine(string.Join(", ", list));
        }

        public static async Task<List<int>> FilterEvenAsync(List<int> numbers)
        {
            Console.WriteLine("Начало фильтрации четных чисел...");

            await Task.Delay(1500);
            
            List<int> evenNumbers = new List<int>();
            foreach (var number in numbers)
            {
                if (number % 2 == 0)
                {
                    evenNumbers.Add(number);
                }
            }
            
            Console.WriteLine("Завершена фильтрация четных чисел.");
            return evenNumbers;
        }

        public static async Task<List<int>> FilterOddAsync(List<int> numbers)
        {
            Console.WriteLine("Начало фильтрации нечетных чисел...");

            await Task.Delay(1500);
            
            List<int> oddNumbers = new List<int>();
            foreach (var number in numbers)
            {
                if (number % 2 != 0)
                {
                    oddNumbers.Add(number);
                }
            }
            
            Console.WriteLine("Завершена фильтрация нечетных чисел.");
            return oddNumbers;
        }

        public static async Task<int> CalculateSumAsync(List<int> numbers)
        {
            Console.WriteLine("Начало вычисления суммы...");

            await Task.Delay(1000);
            
            int sum = 0;
            foreach (var number in numbers)
            {
                sum += number;
            }
            
            Console.WriteLine("Завершено вычисление суммы.");
            return sum;
        }
    }
} 