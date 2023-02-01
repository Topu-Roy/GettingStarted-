setInterval(DisplayTime, 1000);

function DisplayTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let cession = "AM";

    if (hour > 12) {cession = "PM";}
    if (hour > 12) {hour = hour - 12;}
    if (hour == 0) {hour = 12;}

    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec + " " + cession;
}
