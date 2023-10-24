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
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  console.log(`Current time: ${hours}:${minutes}:${seconds}`);
  // ... your code goes here
}

function printMinutes() {
  const minutes = chronometer.getMinutes()
  const minutesVal = chronometer.computeTwoDigitNumber(minutes);

  minDecElement.innerHTML = minutesVal[0];
  minUniElement.innerHTML = minutesVal[1];
  // ... your code goes here
}

function printSeconds() {
  const seconds = chronometer.getSeconds()
  const secondsVal = chronometer.computeTwoDigitNumber(seconds);

  secDecElement.innerHTML = secondsVal[0];
  secUniElement.innerHTML = secondsVal[1];
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  const miliseconds = chronometer.getMilliseconds()
  const msVal = chronometer.computeTwoDigitNumber(miliseconds);

  milDecElement.innerHTML = msVal[0];
  milUniElement.innerHTML = msVal[1];
  // ... your code goes here
}

function printSplit() {
  const TimeofSplit = chronometer.split();
  const newSplit = document.createElement('li');
  newSplit.innerHTML = TimeofSplit;
  splitsElement.appendChild(newSplit);
  // ... your code goes here
}

function clearSplits() {
  splitsElement.innerHTML = '';
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
  // ... your code goes here
}

function setSplitBtn() {
  if (btnLeftElement.className.includes('stop')) {
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  } else {
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
  }
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
  // ... your code goes here
}

function setResetBtn() {
  if (btnLeftElement.className.includes('stop')) {
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  } else {
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
  }
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className.includes('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className.includes('reset')) {
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
  // ... your code goes here
});
