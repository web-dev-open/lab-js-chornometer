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
  let mm = chronometer.computeTwoDigitNumber(chronometer.getMinutes);
  minDecElement.innerHTML = mm[0];
  minUniElement.innerHTML = mm[1];
}

function printSeconds() {
  // ... your code goes here
  let ss = chronometer.computeTwoDigitNumber(chronometer.getSeconds);
  secDecElement.innerHTML = ss[0];
  secUniElement.innerHTML = ss[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  // let ms = chronometer.computeTwoDigitNumber(chronometer.getMillieconds);
}

function printSplit() {
  // ... your code goes here
  let split = chronometer.split();
  let liTag = document.createElement('li');
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'SPLIT';
  btnLeftElement.className = 'btn split';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.className === 'btn start') {
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
  if (btnRightElement.className === 'btn reset') {
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});
