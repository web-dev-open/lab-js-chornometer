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
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  document.getElementById(`minDec`).innerHTML = minutes.charAt(0);
  document.getElementById(`minUni`).innerHTML = minutes.charAt(1);
  document.getElementById(`secDec`).innerHTML = seconds.charAt(0);
  document.getElementById(`secUni`).innerHTML = seconds.charAt(1);// ... your code goes here
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes.charAt(0);
  minUniElement.innerHTML = minutes.charAt(1);// ... your code goes here
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds.charAt(0);
  secUniElement.innerHTML = seconds.charAt(1); // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
    let milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerHTML = milliseconds.charAt(0);
  milUniElement.innerHTML = milliseconds.charAt(1);
// ... your code goes here
}

function printSplit() {
const splitTime = chronometer.split();
  const splitList = document.getElementById('splits');
  const newSplit = document.createElement('li');
  newSplit.innerHTML = splitTime;
  splitList.appendChild(newSplit);
  // ... your code goes here
}

function clearSplits() {
   const splitList = document.getElementById('splits');
  while (splitList.firstChild) {
    splitList.removeChild(splitList.firstChild);
  }// ... your code goes here
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.className = 'btn reset';
 // ... your code goes here
}

function setSplitBtn() {
   btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = 'btn split';// ... your code goes here
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = 'btn split';
// ... your code goes here
}

function setResetBtn() {
 btnRightElement.innerHTML = 'RESET';
  btnRightElement.className = 'btn reset';
 // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
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
  } // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
   if (btnRightElement.classList.contains('reset')){
    chronometer.reset();
    printTime();
  }else{
    const splitTime = chronometer.split();
    const splitList = document.getElementById('splits');
    const newSplit = document.createElement('li');
    newSplit.innerHTML = splitTime;
    splitList.appendChild(newSplit);
  }// ... your code goes here
});
