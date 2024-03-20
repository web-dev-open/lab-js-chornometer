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
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const milliseconds = chronometer.getMilliseconds();
  const formattedMilliseconds = chronometer.computeTwoDigitNumber(milliseconds);
  milDecElement.textContent = formattedMilliseconds[0];
  milUniElement.textContent = formattedMilliseconds[1];
}

function printSplit() {
  // ... your code goes here
  const splitTime = chronometer.split();
  const splitItem = document.createElement('li');
  splitItem.textContent = splitTime;
  splitsElement.appendChild(splitItem);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
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
  // ... your code goes here
  if (btnRightElement.classList.contains('split')) {
    printSplit();
  } else {
    chronometer.reset();
    printTime();
    clearSplits();
  }
});
