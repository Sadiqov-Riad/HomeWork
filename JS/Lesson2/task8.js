//Напишите функцию, которая принимает часы, минуты и секунды и возвращает это время в секунды.

function showSeconds(hh = 0, mm = 0, ss = 0) {
    if (hh < 0 || mm < 0 || ss < 0) {
        throw new Error("Hours, minutes, and seconds cannot be negative.");
    }
    if (mm >= 60 || ss >= 60) {
        throw new Error("Minutes and Seconds must be between 0 and 59.");
    }
    return hh * 3600 + mm * 60 + ss;
}


try {
    console.log(showSeconds(13,12,0)) //
    console.log(showSeconds(-1,61,12)) //Error
} catch (error) {
    console.error("Error:", error.message);
}
