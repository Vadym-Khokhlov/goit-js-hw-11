const START_DELAY = 1000;
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let intervalId = null;

function startClicker() {
  intervalId = setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, START_DELAY);
  switchButtons(startButton, stopButton);
}

function stopClicker() {
  clearInterval(intervalId);
  switchButtons(stopButton, startButton);
}

startButton.addEventListener('click', startClicker);
stopButton.addEventListener('click', stopClicker);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function switchButtons(disabledButton, enabledButton) {
  disabledButton.disabled = true;
  enabledButton.disabled = false;
}
