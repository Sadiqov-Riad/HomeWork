//Напишите функцию, которая подсчитывает разницу между датами.
// Функция принимает 6 параметров, описывающих 2 даты, и возвращает результат в виде строки «час:минуты:секунды».
// При выполнении задания используйте функции из предыдущих 2 заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах,
// а затем разницу переведите обратно в «час:минуты:секунды».

function showSeconds(hh = 0, mm = 0, ss = 0) {
    if (hh < 0 || mm < 0 || ss < 0) {
        throw new Error("Hours, minutes, and seconds cannot be negative.");
    }
    if (mm >= 60 || ss >= 60) {
        throw new Error("Minutes and Seconds must be between 0 and 59.");
    }
    return hh * 3600 + mm * 60 + ss;
}

function formatTime(seconds) {
    const hh = Math.floor(seconds / 3600);
    const mm = Math.floor((seconds % 3600) / 60);
    const ss = seconds % 60;

    return `${hh}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
}

function getTimeDifference(h1, m1, s1, h2, m2, s2) {
    const seconds1 = showSeconds(h1, m1, s1);
    const seconds2 = showSeconds(h2, m2, s2);
    const diff = Math.abs(seconds1 - seconds2);
    return formatTime(diff);
}


try {
    console.log(getTimeDifference(48, 34, 10, 0, 15, 5)); // 48:19:05
    console.log(getTimeDifference(1, 61, 0, 0, 0, 0));   // Error
} catch (error) {
    console.error("Error:", error.message);
}

