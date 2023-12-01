const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');


function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerText = milliseconds[0];
  milUniElement.innerText = milliseconds[1];
}

function printSplit() {
  const split = chronometer.split();
  const liElement = document.createElement('li');
  liElement.innerText = split;
  splitsElement.appendChild(liElement);
}

function clearSplits() {
   splitsElement.innerHTML = '';
}


function setResetBtn() {
  chronometer.reset();
  minDecElement.innerText = '0';
  minUniElement.innerText = '0';
  secDecElement.innerText = '0';
  secUniElement.innerText = '0';
  milDecElement.innerText = '0';
  milUniElement.innerText = '0';
  clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');

  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');

  if (btnLeftElement.innerText === 'START') {
    btnLeftElement.innerText = 'STOP';
    btnRightElement.innerText = 'SPLIT';
    chronometer.start(printTime);
  } else {
    btnLeftElement.innerText = 'START';
    btnRightElement.innerText = 'RESET';
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET') {
    setResetBtn();
  } else {
    printSplit();
  }
});
