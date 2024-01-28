// Import the Chronometer class
const Chronometer = require('./chronometer.js');

// Create a new instance of Chronometer
const chronometer = new Chronometer();

// ... (previous code remains unchanged)

// Function to update the UI with current time and milliseconds
function updateUI() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

// Print the milliseconds on the UI
function printMilliseconds() {
  const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.textContent = milliseconds[0];
  milUniElement.textContent = milliseconds[1];
}

// Print the split time with milliseconds on the UI
function printSplit() {
  const splitTime = chronometer.splitWithMilliseconds();
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.textContent = splitTime;
  splitsElement.appendChild(listItem);
}

// Reset the chronometer and clear milliseconds on button click
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    printSplit();
  } else {
    chronometer.reset();
    chronometer.resetMilliseconds(); // Clear milliseconds
    clearSplits();
    printTime();
  }
});

