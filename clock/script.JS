const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

const workMinutesDisplay = document.getElementById('w_minutes');
const workSecondsDisplay = document.getElementById('w_seconds');

const breakMinutesDisplay = document.getElementById('b_minutes');
const breakSecondsDisplay = document.getElementById('b_seconds');

const cycleCounterDisplay = document.getElementById('counter');

let workMinutes = 25;
let workSeconds = 0;

let breakMinutes = 5;
let breakSeconds = 0;

let cycleCount = 0;

let mode = "work"; 
let timerInterval = null; 

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (timerInterval !== null) {
        alert("Timer already running!");
        return;
    }

    timerInterval = setInterval(runTimer, 1000);
}

function runTimer() {

    if (mode === "work") {

        if (workSeconds > 0) {
            workSeconds--;
        } else if (workMinutes > 0) {
            workMinutes--;
            workSeconds = 59;
        } else {
            mode = "break";
        }

    } else if (mode === "break") {

        if (breakSeconds > 0) {
            breakSeconds--;
        } else if (breakMinutes > 0) {
            breakMinutes--;
            breakSeconds = 59;
        } else {
            cycleCount++;
            resetWorkTime();
            mode = "work";
        }

    }

    updateDisplay();
}


function updateDisplay() {
    workMinutesDisplay.innerText = formatTime(workMinutes);
    workSecondsDisplay.innerText = formatTime(workSeconds);

    breakMinutesDisplay.innerText = formatTime(breakMinutes);
    breakSecondsDisplay.innerText = formatTime(breakSeconds);

    cycleCounterDisplay.innerText = cycleCount;
}



function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}


function resetTimer() {
    stopTimer();

    workMinutes = 25;
    workSeconds = 0;

    breakMinutes = 5;
    breakSeconds = 0;

    cycleCount = 0;
    mode = "work";

    updateDisplay();
}


function resetWorkTime() {
    workMinutes = 25;
    workSeconds = 0;

    breakMinutes = 5;
    breakSeconds = 0;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

updateDisplay();
