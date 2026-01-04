let totalSeconds = 0;
let timer = null;
let lapCount = 0;
let lastLapTime = 0;

function formatTime(sec) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;

    return (
        String(h).padStart(2, '0') + ":" +
        String(m).padStart(2, '0') + ":" +
        String(s).padStart(2, '0')
    );
}

function updateDisplay() {
    document.getElementById("display").innerText = formatTime(totalSeconds);
}

function start() {
    if (timer !== null) return;

    timer = setInterval(() => {
        totalSeconds++;
        updateDisplay();
    }, 1000);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stop();
    totalSeconds = 0;
    lapCount = 0;
    lastLapTime = 0;
    document.getElementById("laps").innerHTML = "";
    updateDisplay();
}

function lap() {
    if (timer === null) return;

    lapCount++;

    const lapTime = totalSeconds - lastLapTime;
    lastLapTime = totalSeconds;

    const li = document.createElement("li");
    li.textContent = `Lap ${lapCount} | Split: ${formatTime(lapTime)} | Total: ${formatTime(totalSeconds)}`;
    document.getElementById("laps").appendChild(li);
}