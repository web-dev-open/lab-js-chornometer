const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const splitsElement = document.getElementById('splits');

// Function to print the full time (minutes and seconds)
function printTime() {
  printMinutes();
  printSeconds();
}

// Function to print minutes
function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

// Function to print seconds
function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitTime = chronometer.split();
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerHTML = splitTime;
  splitsElement.appendChild(li);
}

// Function to clear split times
function clearSplits() {
  splitsElement.innerHTML = ''; // Remove all splits
}

// Function to toggle the Start button to Stop
function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerHTML = 'STOP';
}

// Function to toggle the Stop button to Start
function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START';
}

// Function to toggle the Reset button to Split
function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT';
}

// Function to toggle the Split button to Reset
function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
}

// Event listener for Start/Stop button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime); // Start the chronometer and update the time
    setStopBtn(); // Change Start to Stop
    setSplitBtn(); // Change Reset to Split
  } else {
    chronometer.stop(); // Stop the chronometer
    setStartBtn(); // Change Stop to Start
    setResetBtn(); // Change Split to Reset
  }
});

// Event listener for Reset/Split button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset(); // Reset the chronometer
    printTime(); // Update time display to 00:00
    clearSplits(); // Clear all splits
  } else {
    printSplit(); // Record and display the split time
  }
});