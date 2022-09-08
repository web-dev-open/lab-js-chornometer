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
  // console.log(chronometer.computeTwoDigitNumber(chronometer.getSeconds()));
  // chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let mins = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = mins[0];
  minUniElement.innerHTML = mins[1];
}

function printSeconds() {
  let secs = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = secs[0];
  secUniElement.innerHTML = secs[1];
}

// ==> BONUS
function printMilliseconds() {
  let mil = chronometer.computeTwoDigitNumber(chronometer.currentMilTime);
  milDecElement.innerHTML = mil[0];
  milUniElement.innerHTML = mil[1];
}

function printSplit() {
  let li = document.createElement('li');
  li.innerText = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = '';
  chronometer.reset();
  printMinutes();
  printSeconds();
  printMilliseconds();
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
    chronometer.start(printTime, printMilliseconds);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'SPLIT') {
    printSplit();
  } else {
    clearSplits();
  }
});
