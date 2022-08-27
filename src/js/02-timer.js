import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('[data-start]');
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
  },
});

btnStart.addEventListener('click', onTimerStart);

function onTimerStart() {
  console.log('hello');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
