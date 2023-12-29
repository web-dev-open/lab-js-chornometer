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
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  document.getElementById(minDec).innerHTML = minutes.charAt(0);
  document.getElementById(minUni).innerHTML = minutes.charAt(1);
  document.getElementById(secDec).innerHTML = seconds.charAt(0);
  document.getElementById(secUni).innerHTML = seconds.charAt(1);
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes.charAt(0);
  minUniElement.innerHTML = minutes.charAt(1);
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds.charAt(0);
  secUniElement.innerHTML = seconds.charAt(1);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerHTML = milliseconds.charAt(0);
  milUniElement.innerHTML = milliseconds.charAt(1);
}

function printSplit() {
  // ... your code goes here
  const splitTime = chronometer.split();
  const splitList = document.getElementById('splits');
  const newSplit = document.createElement('li');
  newSplit.innerHTML = splitTime;
  splitList.appendChild(newSplit);
}

function clearSplits() {
  // ... your code goes here
  const splitList = document.getElementById('splits');
  while (splitList.firstChild) {
    splitList.removeChild(splitList.firstChild);
  }
}


function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.className = 'btn reset';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = 'btn split';

}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.className = 'btn reset';

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')){
    chronometer.start(printTime);
    btnLeftElement.innerHTML = 'STOP';
    btnLeftElement.className = 'btn stop';
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  }else{
    chronometer.stop();
    btnLeftElement.innerHTML = 'START';
    btnLeftElement.className = 'btn start';
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset')){
    chronometer.reset();
    printTime();
  }else{
    const splitTime = chronometer.split();
    const splitList = document.getElementById('splits');
    const newSplit = document.createElement('li');
    newSplit.innerHTML = splitTime;
    splitList.appendChild(newSplit);
  }
});