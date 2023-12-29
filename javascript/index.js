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
  
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds() {
const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
secDecElement.innerHTML = seconds[0];
secUniElement.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
}

function printSplit() {
const splitTime = chronometer.split();
const splitItem = document.createElement('li');
splitItem.innerHTML = splitTime;
splitsElement.appendChild(splitItem);
}
function clearSplits() {
splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');

}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
  } else {
    printSplit();
  }
});
