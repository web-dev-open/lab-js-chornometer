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
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const splitTime = chronometer.split();
  const li = document.createElement('li');
  li.innerText = splitTime;
  splits.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerText = 'START';
  btnLeft.className = 'btn start';
  btnRight.innerText = 'RESET';
  btnRight.className = 'btn reset';
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerText = 'SPLIT';
  btnRight.className = 'btn split';
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerText = 'STOP';
  btnLeft.className = 'btn stop';
  btnRight.innerText = 'SPLIT';
  btnRight.className = 'btn split';
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = 'RESET';
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.classList.contains('start')) {
    setStartBtn();
    chronometer.start(printTime);
  } else {
    setStopBtn();
    chronometer.stop();
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
