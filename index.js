let timer;
let isRunning = false;
let minutes = 0;
let seconds = 0;

function updateTimerDisplay() {
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    timer = setInterval(function () {
        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            minutes--;
            seconds = 59;
        }

        updateTimerDisplay();

        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            isRunning = false;
        }
    }, 1000);

    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;

    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 5;
    seconds = 0;

    updateTimerDisplay();

    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
}

// For demonstration, let's start with a 5-minute timer.
minutes = 5;
updateTimerDisplay();
