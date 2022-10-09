import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateRef = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  mins: document.querySelector('[data-minutes]'),
  secs: document.querySelector('[data-seconds]'),
};
const buttonStart = document.querySelector('button[data-start]');
buttonStart.disabled = true;
let countdownDuration = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
    } else {
      buttonStart.disabled = false;
      countdownDuration = Date.parse(selectedDates[0]) - Date.parse(new Date());
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

flatpickr('#datetime-picker', options);
buttonStart.addEventListener('click', startCountdown);

function startCountdown() {
  const showTimer = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(
      (countdownDuration = countdownDuration - 1000)
    );
    dateRef.days.textContent = addLeadingZero(`${days}`);
    dateRef.hours.textContent = addLeadingZero(`${hours}`);
    dateRef.mins.textContent = addLeadingZero(`${minutes}`);
    dateRef.secs.textContent = addLeadingZero(`${seconds}`);
  }, 1000);
  activateAnimation();
  buttonStart.disabled = true;
}

function activateAnimation() {
  dateRef.secs.classList.toggle('value__seconds--active');
  const hurry = setInterval(() => {
    Notify.info('Hurry up! Discount is still available');
  }, 30000);
}
