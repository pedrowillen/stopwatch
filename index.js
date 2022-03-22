let seconds = 0;
let minutes = 0;
let hour = 0;

let timer = document.getElementById('timer');

let interval;

function twoDigits(digit) {
    if(digit < 10) {
        return '0' + digit
    } else {
        return digit
    }
}

function start() {
    interval = setInterval(loopTime, 1000);
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    timer.innerText= '00:00:00';
}

function loopTime() {
    seconds++;
    timer.innerText = twoDigits(hour) + ':' + twoDigits(minutes) + ':' + twoDigits(seconds);
    if (seconds == 60) {
        minutes++;
        seconds = 0;
    } else if (minutes == 60) {
        minutes = 0;
        hour++;
    }
}