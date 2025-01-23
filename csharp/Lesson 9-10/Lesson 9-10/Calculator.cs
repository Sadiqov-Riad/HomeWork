using Lesson_9_10;

Addition add = new();
Subtraction subs = new();
Multiplication mul = new();
Division div = new();

double a;
while (true)
{
    Console.WriteLine("Enter first number: ");
    if (double.TryParse(Console.ReadLine(), out a))
    {
        break;
    }
    Console.WriteLine("Invalid Input! Try again");
}

double b;
while (true)
{
    Console.WriteLine("Enter second number: ");
    if (double.TryParse(Console.ReadLine(), out b))
    {
        break;
    }
    Console.WriteLine("Invalid Input! Try again");
}

Console.WriteLine("Choose operation: \n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division");

try
{
    int choise = int.Parse(Console.ReadLine());

    ICalculatorOperation operation;

    switch (choise)
    {
        case 1:
            operation = add;
            break;
        case 2:
            operation = subs;
            break;
        case 3:
            operation = mul;
            break;
        case 4:
            operation = div;
            break;
        default:
            throw new ArgumentException("Error!!");
    }

    Console.WriteLine($"Result: {operation.Execute(a, b)}");
}
catch (Exception e)
{
    Console.WriteLine(e.Message);
}