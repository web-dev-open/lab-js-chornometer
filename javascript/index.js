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
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.getMinutes()
  const minutesVal = chronometer.computeTwoDigitNumber(minutes);

  minDecElement.innerHTML = minutesVal[0];
  minUniElement.innerHTML = minutesVal[1];
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.getSeconds()
  const secondsVal = chronometer.computeTwoDigitNumber(seconds);

  secDecElement.innerHTML = secondsVal[0];
  secUniElement.innerHTML = secondsVal[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const TimeofSplit = chronometer.split();

  const newSplit = document.createElement('li');

  newSplit.innerHTML = TimeofSplit;
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = ""
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  // ... your code goes here
  if(btnLeftElement.className.includes('stop')){

    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  }
  else{
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
  }
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  // ... your code goes here
  if(btnLeftElement.className.includes('stop')){

    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  }
  else{

    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
  }
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeftElement.className.includes('start')){


    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  }
  else{

    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.className.includes('reset')){

    chronometer.reset();
    printTime();
    clearSplits();

  }
  else{
    printSplit();
  }
});