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

  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds() * 100); 
  milDecElement.textContent = milliseconds[0];
  milUniElement.textContent = milliseconds[1];
}

function printSplit() {
  const splitTime = chronometer.split(); // Get the formatted split time from the Chronometer class
  
  // Create a new list item element
  const splitItem = document.createElement('li');
  splitItem.textContent = splitTime; // Set the content of the list item to the split time
  
  // Append the list item to the splits ordered list
  splitsElement.appendChild(splitItem);
}

function clearSplits() {
  // Clear all the list items within the splits ordered list
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  if (btnLeftElement.classList.contains('stop')) {
    // If the chronometer is running, the button should display "SPLIT"
    btnRightElement.textContent = 'SPLIT';
    btnRightElement.className = 'btn split';
  } else {
    // If the chronometer is stopped, the button should display "RESET"
    btnRightElement.textContent = 'RESET';
    btnRightElement.className = 'btn reset';
  }
}

function setStartBtn() {
  if (btnLeftElement.classList.contains('stop')) {
    // If the chronometer is running, the button should display "STOP"
    btnLeftElement.textContent = 'STOP';
    btnLeftElement.className = 'btn stop';
  } else {
    // If the chronometer is stopped, the button should display "START"
    btnLeftElement.textContent = 'START';
    btnLeftElement.className = 'btn start';
  }
}

function setResetBtn() {
  if (btnLeftElement.classList.contains('stop')) {
    // If the chronometer is running, the button should display "SPLIT"
    btnRightElement.textContent = 'SPLIT';
    btnRightElement.className = 'btn split';
  } else {
    // If the chronometer is stopped, the button should display "RESET"
    btnRightElement.textContent = 'RESET';
    btnRightElement.className = 'btn reset';
}
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    // If the button currently has the class 'start', it means we want to start the chronometer.
    chronometer.start(printTime); // Start the chronometer and pass the printTime function as a callback
    setStartBtn(); // Update the Start/Stop button
    setResetBtn(); // Update the Reset/Split button
  } else {
    // If the button has the class 'stop', it means we want to stop the chronometer.
    chronometer.stop(); // Stop the chronometer
    setStartBtn(); // Update the Start/Stop button
    setResetBtn(); // Update the Reset/Split button
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    // If the button currently has the class 'reset', it means we want to reset the chronometer.
    chronometer.reset(); // Reset the chronometer
    setResetBtn(); // Update the Reset/Split button
    printTime(); // Clear the displayed time
    clearSplits(); // Clear the displayed split times
  } else {
    // If the button has the class 'split', it means we want to record a split time.
    printSplit(); // Print the current split time
  }
});
