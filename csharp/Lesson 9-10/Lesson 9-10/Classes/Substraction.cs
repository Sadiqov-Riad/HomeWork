namespace Lesson_9_10;

public class Subtraction : ICalculatorOperation
{
    public string Name { get; set; } = nameof(Subtraction);
    public double Execute(double a, double b) => a - b;
}