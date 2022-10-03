const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const PROMPT_DELAY = 1000;
let intervalId = null;

startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, PROMPT_DELAY);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// need button disabled
