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
  const minutes = chronometer.getMinutes()
  const minutesVal = chronometer.computeTwoDigitNumber(minutes);

  minDecElement.innerHTML = minutesVal[0];
  minUniElement.innerHTML = minutesVal[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds()
  const secondsVal = chronometer.computeTwoDigitNumber(seconds);

  secDecElement.innerHTML = secondsVal[0];
  secUniElement.innerHTML = secondsVal[1];
}

// ==> BONUS
function printMilliseconds() {
  const miliseconds = chronometer.getMilliseconds()
  const msVal = chronometer.computeTwoDigitNumber(miliseconds);

  milDecElement.innerHTML = msVal[0];
  milUniElement.innerHTML = msVal[1];
}

function printSplit() {
  const TimeofSplit = chronometer.split();

  const newSplit = document.createElement('li');

  newSplit.innerHTML = TimeofSplit;
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  splitsElement.innerHTML = ""
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
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
  btnLeftElement.innerHTML = 'START';
    btnLeftElement.className = 'btn start';
}

function setResetBtn() {
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
  if(btnRightElement.className.includes('reset')){
    
    chronometer.reset();
    printTime();
    clearSplits();
    
  }
  else{
    printSplit();
  }

});
