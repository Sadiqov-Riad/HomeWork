//Напишите функцию, которая вычисляет факториал переданного ей числа.

function ComputeFactorial(arg)
{
    if (arg < 0) return "Factorial cannot be negative";

    let result = 1;

    for (let i = 2; i <= arg; i++) {
        result *= i;
    }
    return result;
}

console.log(ComputeFactorial(5));