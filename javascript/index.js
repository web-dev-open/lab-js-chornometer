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
}

function setStopBtn() {
  btnLeftElement.classList.add('stop');
  btnLeftElement.classList.remove('start');
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.add('split');
  btnRightElement.classList.remove('reset');
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.add('start');
  btnLeftElement.classList.remove('stop');
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  btnRightElement.classList.add('reset');
  btnRightElement.classList.remove('split');
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.start();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET') {
    setSplitBtn();
    chronometer.start();
  } else {
    setResetBtn();
    chronometer.stop();
  }
});
