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
   printMilliseconds();
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

 function printMilliseconds() {
 const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerHTML = milliseconds[0];
  milUniElement.innerHTML = milliseconds[1];
 }

function printSplit() {
  const splitTime = chronometer.split();
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.innerHTML = splitTime;
  splitsElement.appendChild(listItem);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerHTML = 'STOP';

  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.innerHTML = 'SPLIT';
}

function setSplitBtn() {
  btnLeftElement.classList.add('start');
  btnLeftElement.classList.remove('stop');
  btnLeftElement.innerHTML = 'START';

  btnRightElement.classList.add('reset');
  btnRightElement.classList.remove('split');
  btnRightElement.innerHTML = 'RESET';
}

function setStartBtn() {
  btnLeftElement.classList.add('start');
  btnLeftElement.classList.remove('stop');
  btnLeftElement.innerHTML = 'START';

  btnRightElement.classList.add('reset');
  btnRightElement.classList.remove('split');
  btnRightElement.innerHTML = 'RESET';
}

function setResetBtn() {
  btnLeftElement.classList.remove('start', 'stop');
  btnLeftElement.innerHTML = 'START';

  btnRightElement.classList.remove('reset', 'split');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
  } else {
    chronometer.stop();
    setStartBtn();
  }
});

// Reset/Split Button
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    const splitTime = chronometer.split();
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = splitTime;
    document.getElementById('splits').appendChild(listItem);
  } else {
    chronometer.reset();
  }
});

