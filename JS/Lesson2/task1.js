//Напишите функцию, которая принимает 2 числа и возвращает -1,
//если первое меньше, чем второе; 1 — если первое больше, чем второе; 0 — если числа равны.

function compareNums(arg1, arg2)
{
    if (arg1 < arg2) return -1;
    else if (arg1 > arg2) return 1;
    else return 0;
};

console.log(compareNums(1,2));