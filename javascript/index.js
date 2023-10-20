// chronometer.js
const chronometer = new Chronometer();

// Get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// Get the DOM elements to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // Update the display of minutes, seconds, and milliseconds
  printMinutes();
  printSeconds();
  printMilliseconds(); // Only for the bonus part
}

function printMinutes() {
  // Update the minutes display
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  // Update the seconds display
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS: Display milliseconds
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(
    chronometer.computeMilliseconds()
  );
  milDecElement.textContent = milliseconds[0];
  milUniElement.textContent = milliseconds[1];
}

function printSplit() {
  // Create a new split item and append it to the list of splits
  const splitTime = chronometer.split();
  const splitItem = document.createElement('li');
  splitItem.textContent = splitTime;
  splitsElement.appendChild(splitItem);
}

function clearSplits() {
  // Clear the list of splits
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // Change the button text and class for stopping the chronometer
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  // Change the button text and class for taking splits
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  // Change the button text and class for starting the chronometer
  btnLeftElement.textContent = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  // Change the button text and class for resetting the chronometer
  btnRightElement.textContent = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    // Start the chronometer
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    // Stop the chronometer
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    // Reset the chronometer
    chronometer.reset();
    clearSplits();
    printTime();
  } else {
    // Take a split
    printSplit();
  }
});
