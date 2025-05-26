//Напишите функцию, которая принимает время (часы, минуты, секунды)
// и выводит его на экран в формате «час:минуты:секунды».
// Если при вызове функции минуты и/или секунды не были переданы, выводить их как 00.


function showTime(hours, minutes = 0, seconds = 0) {
    const isValid = (value, min, max) =>
        Number.isInteger(value) && value >= min && value <= max;

    if (!isValid(hours, 0, 23)) {
        console.log("Error: Hours must be between 0 and 23.");
        return;
    }
    if (!isValid(minutes, 0, 59)) {
        console.log("Error: Minutes must be between 0 and 59.");
        return;
    }
    if (!isValid(seconds, 0, 59)) {
        console.log("Error: Seconds must be between 0 and 59.");
        return;
    }

    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');

    console.log(`${hours}:${mm}:${ss}`);
}


showTime(10);            // 10:00:00
showTime(23, 59, 59);    // 23:59:59
showTime(24, 0, 0);      // Error
showTime(-1, 30, 30);    // Error
showTime(12, 60);        // Error