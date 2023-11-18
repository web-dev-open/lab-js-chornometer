// Creating the instance of the cronometer
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
  printMilliseconds(); // <-- Bonus
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const milliseconds = chronometer.twoDigitsNumber(chronometer.getmilliseconds());
  milDecElement.textContent = milliseconds[0];
  milUniElement.textContent = milliseconds[1];
}

// Iteraration No. 3 Split Time
function printSplit() {
  // ... your code goes here

  // Split the time
  // Getting the current time
  const splitTime = chronometer.split();
  
  // Creating a new "li" Element
  const splitItem = document.createElement("li");
  
  // Adding a class name
  splitItem.className = "list-item";

  // Updating the HTML of the li element with the current time
  splitItem.textContent = splitTime;

  // Appending the li element to the container
  splitsElement.appendChild(splitItem);
}

function clearSplits() {
  // ... your code goes here

  // Clear the list by removing all child with While loop
  while(splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  }
}

// Iteration No. 4 Reset.
function clearAll() {

  // Clears the clock
  chronometer.reset();
  printTime();

  // Cleaning up the list
  clearSplits();

}

function setStopBtn() {
  // ... your code goes here

  // set the button text and class for stop state
  btnLeftElement.textContent = "Start";
  btnLeftElement.classList.replace("stop", "start");
}

function setSplitBtn() {
  // ... your code goes here

  // set the button text to split
  btnRightElement.textContent = "Reset";
  btnRightElement.classList.replace("split", "reset");
}

function setStartBtn() {
  // ... your code goes here

  // set the button text for start
  btnLeftElement.textContent = "Stop";
  btnLeftElement.classList.replace("start", "stop");
}

function setResetBtn() {
  // ... your code goes here

  // set the button text for reset
  btnRightElement.textContent = "Split";
  btnRightElement.classList.replace("reset", "split");
}

// Start/Stop Button - Event Listener
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here

  if(btnLeftElement.classList.contains("start")) {
    chronometer.start(printTIme);
    setStartBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStopBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here

  if(btnRightElement.classList.contains("split")) {
    printSplit();

  // Iteratio No. 4
  } else if (!btnRightElement.classList.contains("split")) {
    clearAll();
  
  } else {
    chronometer.reset();
    clearSplits();
    printTime();

  }
});
