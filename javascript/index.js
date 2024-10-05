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
  let minute = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minute[0];
  minUniElement.innerHTML = minute[1];
}

function printSeconds() {
  // ... your code goes here
  let second = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = second[0];
  secUniElement.innerHTML = second[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let split = chronometer.split();
  let li = document.createElement('li');
  li.className = 'split-list';
  li.innerHTML = split;
  splitsElement.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = 'btn split';
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
  console.log(btnLeftElement.className);
  if (btnLeftElement.className === 'btn start') {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  }
  else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  console.log(btnRightElement.className);
  if (btnRightElement.className === 'btn reset') {
    chronometer.reset();
    printTime();
    clearSplits();
  }
  else {
    printSplit();
  }
});
