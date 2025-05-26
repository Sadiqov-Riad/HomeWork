//Напишите функцию, которая принимает минимальное и максимальное значение для диапазона и выводит те числа из диапазона, которые являются совер­шен­ными. 
//Используйте написанную ранее функцию, чтобы проверить число на совершенство.

function isPerfectNumber(num) 
{
    if (num <= 1) return false;

    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

function setRange(min,max)
{
    let result = [];
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            result.push(i);
        }
    }
    return result;
}

console.log(setRange(1,30));