let display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", () => {
  start();
});
stopBtn.addEventListener("click", () => {
  stop();
});
resetBtn.addEventListener("click", () => {
  reset();
});

const start = () => {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
};

const stop = () => {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
};

const reset = () => {
  clearInterval(timer);
  elapsedTime = Date.now() - startTime;
  isRunning = false;
  display.textContent = "00:00:00:00";
};

const update = () => {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  hours = hours.toString().padStart(2, "0");

  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  minutes = minutes.toString().padStart(2, "0");

  let seconds = Math.floor((elapsedTime / 1000) % 60);
  seconds = seconds.toString().padStart(2, "0");

  let milliseconds = Math.floor((elapsedTime % 1000) / 10);
  milliseconds = milliseconds.toString().padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
};
