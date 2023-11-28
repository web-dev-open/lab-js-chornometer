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
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerHTML = milliseconds[0];
  milUniElement.innerHTML = milliseconds[1];
}

function printSplit() {
  // ... your code goes here
  const listItem = document.createElement('li');
  
  listItem.innerHTML = chronometer.split() + ":" + chronometer.splitmilli(); //Bonus

  splitsElement.appendChild(listItem); 
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.className = 'btn start';  
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.className = 'btn reset';  
  btnRightElement.innerHTML = 'RESET';
  }


// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')) {
    // If the "Start" button is clicked while chronometer is stopped
    //Start the chronometer
    chronometer.start(printTime);
    
    setStopBtn();
    setSplitBtn();
  } else {
    // If the "Stop" button is clicked while the chronometer is running
    // Stop the chronometer
    chronometer.stop();
    
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
   if(btnRightElement.classList.contains('reset')) {
    // When the "Reset" button is clicked, clear the clock and splits
    chronometer.reset();
    clearSplits();
    printTime();
  } else {
    // When the "Split" button is clicked, print split time
    printSplit();
  }
});
