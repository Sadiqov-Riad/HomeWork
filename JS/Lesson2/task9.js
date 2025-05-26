//Напишите функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в виде строки «час:минуты:секунды».

function formatTime(seconds) {
    const hh = Math.floor(seconds / 3600);
    const mm = Math.floor((seconds % 3600) / 60);
    const ss = seconds % 60;

    return `${hh}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
}


console.log(formatTime(8998)); 