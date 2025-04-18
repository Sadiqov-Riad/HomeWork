using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Async_await
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("Асинхронность");
            Console.WriteLine("--------------------------------");
            
            // 1. Инициализация списка из 20 случайных целых чисел от 1 до 100
            List<int> numbers = AsyncOperations.GenerateRandomNumbers(20, 1, 100);
            
            Console.WriteLine("Сгенерированный список чисел:");
            AsyncOperations.PrintList(numbers);
            Console.WriteLine();
            
            // Запуск асинхронных задач
            Console.WriteLine("Запуск асинхронных операций...");
            
            // Вариант 1: Запуск задач последовательно
            /*
            var evenNumbers = await AsyncOperations.FilterEvenAsync(numbers);
            var oddNumbers = await AsyncOperations.FilterOddAsync(numbers);
            var sum = await AsyncOperations.CalculateSumAsync(numbers);
            */
            
            // Вариант 2: Запуск задач параллельно с Task.WhenAll
            var filterEvenTask = AsyncOperations.FilterEvenAsync(numbers);
            var filterOddTask = AsyncOperations.FilterOddAsync(numbers);
            var calculateSumTask = AsyncOperations.CalculateSumAsync(numbers);
            
            await Task.WhenAll(filterEvenTask, filterOddTask, calculateSumTask);
            
            var evenNumbers = filterEvenTask.Result;
            var oddNumbers = filterOddTask.Result;
            var sum = calculateSumTask.Result;
            
            // Отображение результатов
            Console.WriteLine("\nРезультаты:");
            Console.WriteLine("Четные числа:");
            AsyncOperations.PrintList(evenNumbers);
            
            Console.WriteLine("\nНечетные числа:");
            AsyncOperations.PrintList(oddNumbers);
            
            Console.WriteLine($"\nСумма всех чисел: {sum}");
            
            Console.WriteLine("\nПрограмма завершена.");
        }
    }
}