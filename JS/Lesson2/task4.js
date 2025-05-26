//Напишите функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
//Если в функцию передали 1 параметр, она вычисляет площадь квадрата.

function calculateArea(length,width = length) 
{
    return length*width
}

console.log(calculateArea(5));