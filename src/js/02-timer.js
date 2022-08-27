import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');
const btnStart = document.querySelector('[data-start]');
let chosenDate = null;
let time = {};
let intervalId = null;

btnStart.setAttribute('disabled', 'true');

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Number(selectedDates[0]) < Date.now()) {
      window.alert('Please choose a date in the future');
    }
    btnStart.removeAttribute('disabled');

    chosenDate = Number(selectedDates[0]);
  },
});

btnStart.addEventListener('click', onTimerStart);

function onTimerStart() {
  intervalId = setInterval(() => {
    time = convertMs(chosenDate - Date.now());

    daysValue.textContent = time.days;
    hoursValue.textContent = time.hours;
    minutesValue.textContent = time.minutes;
    secondsValue.textContent = time.seconds;
  }, 1000);
  btnStart.setAttribute('disabled', 'true');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = padWrapper(Math.floor(ms / day));
  // Remaining hours
  const hours = padWrapper(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = padWrapper(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = padWrapper(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function padWrapper(value) {
  return String(value).padStart(2, '0');
}
