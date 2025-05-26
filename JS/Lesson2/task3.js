//Напишите функцию, которая принимает три отдельные цифры и 
//превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

function connectNums(arg1, arg2, arg3) {
    if (arg1 === 0) return "first number cannot be 0";
    if (arg1 > 0 && arg1 < 10 && arg2 >= 0 && arg2 < 10 && arg3 >= 0 && arg3 < 10) {
        return (arg1 * 100) + (arg2 * 10) + arg3;
    }
    return "Invalid input"; 
}

console.log(connectNums(1,4,9));