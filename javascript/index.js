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
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDec.innerHTML = milliseconds[0];
  milUni.innerHTML = milliseconds[1];
}

function printSplit() {
  // ... your code goes here
  const splitTime = chronometer.split();
  const li = document.createElement('li');
  li.innerHTML = splitTime;
  splits.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.classList.replace('start', 'stop');
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.classList.replace('reset', 'split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.classList.replace('stop', 'start');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  // ... your code goes here
  btnRight.classList.replace('split', 'reset');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.classList.contains('start')) {
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
  if (btnRight.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }


});
