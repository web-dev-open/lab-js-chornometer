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
  printMilliseconds(); // Bonus: Uncomment this line for milliseconds
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// Bonus: Function to print milliseconds
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(
    chronometer.getMilliseconds()
  );
  milDecElement.textContent = milliseconds[0];
  milUniElement.textContent = milliseconds[1];
}

function printSplit() {
  const splitTime = chronometer.split();
  const splitItem = document.createElement('li');
  splitItem.textContent = splitTime;
  splitsElement.appendChild(splitItem);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.className = 'btn stop';
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setSplitBtn() {
  btnLeftElement.textContent = 'START';
  btnLeftElement.className = 'btn start';
  btnRightElement.textContent = 'RESET';
  btnRightElement.className = 'btn reset';
}

function setStartBtn() {
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.className = 'btn stop';
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setResetBtn() {
  btnLeftElement.textContent = 'START';
  btnLeftElement.className = 'btn start';
  btnRightElement.textContent = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
  } else {
    chronometer.stop();
    setSplitBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    printSplit();
  } else {
    chronometer.reset();
    clearSplits();
    printTime(); // Reset time display
    setStartBtn();
  }
});
