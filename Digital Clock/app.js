function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amPm = "AM";

    if (hours > 12) {
        hours = hours - 12;
        amPm = "PM";
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("amPm").innerHTML = amPm;
}

setInterval(digitalClock, 1000);
