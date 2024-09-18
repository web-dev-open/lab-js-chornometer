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
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerText = milliseconds[0];
  milUniElement.innerText = milliseconds[1];
}

function printSplit() {
  // ... your code goes here
  const li = document.createElement('li');
  li.innerText = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerText = "STOP";
  btnLeftElement.className = "btn stop";
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerText = "SPLIT";
  btnRightElement.className = "btn split";
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerText = "START";
  btnLeftElement.className = "btn start";
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerText = "RESET";
  btnRightElement.className = "btn reset";
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
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});
