function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "pm";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('darkmode-toggle');
    var main = document.getElementById('main');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            main.style.backgroundColor = 'white';
            main2.style.backgroundColor= 'black';
            MyClockDisplay.style.color= 'white';
            body.style.backgroundColor = 'black';
        } else {
            main.style.backgroundColor = 'black';
            main2.style.backgroundColor='white';
            MyClockDisplay.style.color='black';
            body.style.backgroundColor = 'white';
        }
    });
});
