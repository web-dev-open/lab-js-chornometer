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

// Start the timer

// Update the timer display
function displayTime(minutes, seconds) {
  // ... your code goes here
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}
function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerHTML = 'STOP';
  // bthRight
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.innerHTML = 'SPLIT';

  // start the timer
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  displayTime(minutes, seconds);
  chronometer.start(displayTime);
}

function setSplitBtn() {
  // ... your code goes here
  const newItem = document.createElement('li');
  newItem.innerHTML = chronometer.split();
  splitsElement.appendChild(newItem);
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerHTML = 'START';
  // bthRight
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.innerHTML = 'RESET';

  // stop the timer
  chronometer.stop();
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
  clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
  } else if (btnLeftElement.classList.contains('stop')) {
    setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here

  if (btnRightElement.classList.contains('split')) {
    setSplitBtn();
  } else if (btnRightElement.classList.contains('reset')) {
    setResetBtn();
  }
});
