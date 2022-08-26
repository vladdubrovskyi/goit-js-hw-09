const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let intervalId = null;
btnStop.setAttribute('disabled', 'true');

btnStart.addEventListener('click', () => {
  intervalId = setInterval(onBtnStart, 1000);
});

function onBtnStart() {
  body.style.backgroundColor = getRandomHexColor();

  btnStart.setAttribute('disabled', 'true');
  btnStop.removeAttribute('disabled');
}

btnStop.addEventListener('click', onBtnStop);

function onBtnStop() {
  clearInterval(intervalId);
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', 'true');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
