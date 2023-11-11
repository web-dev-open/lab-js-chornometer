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
  const [minDec, minUni] = [...minutes];
  minDecElement.textContent = minDec;
  minUniElement.textContent = minUni;
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  const [secDec, secUni] = [...seconds];
  secDecElement.textContent = secDec;
  secUniElement.textContent = secUni;
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(
    chronometer.getMilliseconds()
  );
  const [milDec, milUni] = [...milliseconds];
  milDecElement.textContent = milDec;
  milUniElement.textContent = milUni;
}

function printSplit() {
  const newSplit = document.createElement('li');
  newSplit.classList.add('list-item');
  newSplit.textContent = chronometer.split();
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.className = 'btn start';
  btnLeftElement.textContent = 'START';
  btnRightElement.className = 'btn reset';
  btnRightElement.textContent = 'RESET';
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.start(() => {
    chronometer.currentTime += 10;
    printTime();
  });
  btnLeftElement.className = 'btn stop';
  btnLeftElement.textContent = 'STOP';
  btnRightElement.className = 'btn split';
  btnRightElement.textContent = 'SPLIT';
}

function setResetBtn() {
  chronometer.reset();
  printTime();
  clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStartBtn();
  } else if (btnLeftElement.classList.contains('stop')) {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    setSplitBtn();
  }
  if (btnRightElement.classList.contains('reset')) {
    setResetBtn();
  }
});
