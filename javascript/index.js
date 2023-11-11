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
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
document.addEventListener('DOMContentLoaded', () => {
  const chronometer = new Chronometer();
  let isRunning = false;

  function updateButtons() {
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');
    
    if (isRunning) {
      btnLeft.innerHTML = 'START';
      btnLeft.className = 'btn start';
      btnRight.innerHTML = 'RESET';
      btnRight.className = 'btn reset';
    } else {
      btnLeft.innerHTML = 'STOP';
      btnLeft.className = 'btn stop';
      btnRight.innerHTML = 'SPLIT';
      btnRight.className = 'btn split';
    }
  }

  function updateScreen(minutes, seconds) {
    const minDigits = chronometer.computeTwoDigitNumber(minutes);
    const secDigits = chronometer.computeTwoDigitNumber(seconds);

    const timeDisplay = document.getElementById('time');
    timeDisplay.innerHTML = `${minDigits}:${secDigits}`;
  }

  chronometer.start(() => {
    if (isRunning) {
      const minutes = chronometer.getMinutes();
      const seconds = chronometer.getSeconds();
      updateScreen(minutes, seconds);
    }
  });

  document.getElementById('btnLeft').addEventListener('click', () => {
    isRunning = !isRunning;
    if (isRunning) {
      chronometer.start();
    } else {
      chronometer.stop();
    }
    updateButtons();
  });

  document.getElementById('btnRight').addEventListener('click', () => {
    if (isRunning) {
      // Handle SPLIT functionality
      // You can implement this logic here, e.g., display split times in a list
      const splitsList = document.getElementById('splits');
    const splitTime = chronometer.split();

    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = splitTime;

    splitsList.appendChild(listItem);
    } else {
      chronometer.reset();
      updateScreen(0, 0);
    }
  });
});
