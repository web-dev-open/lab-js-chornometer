const chronometer = new Chronometer();

// Get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// Get the DOM elements to display time:
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
  // Optional if you're doing milliseconds
  // printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  const twoDigitMinutes = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.innerText = twoDigitMinutes[0];
  minUniElement.innerText = twoDigitMinutes[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  const twoDigitSeconds = chronometer.computeTwoDigitNumber(seconds);
  secDecElement.innerText = twoDigitSeconds[0];
  secUniElement.innerText = twoDigitSeconds[1];
}

// BONUS: Milliseconds (only if you're doing it)
function printMilliseconds() {
  const milliseconds = chronometer.getMilliseconds(); // Make sure this method exists
  const twoDigitMilliseconds = chronometer.computeTwoDigitNumber(milliseconds);
  milDecElement.innerText = twoDigitMilliseconds[0];
  milUniElement.innerText = twoDigitMilliseconds[1];
}

function printSplit() {
  const splitTime = chronometer.split();
  const splitElement = document.createElement('li');
  splitElement.innerText = splitTime;
  splitsElement.appendChild(splitElement);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
    printTime(); // Resets the display too
  } else {
    printSplit();
  }
});
