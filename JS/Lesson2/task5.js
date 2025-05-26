//Напишите функцию, которая проверяет, является ли переданное ей число совершенным.
//Совершенное число — это число, равное сумме всех своих собственных делителей.

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

console.log(isPerfectNumber(6));   

