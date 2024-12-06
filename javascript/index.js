const chronometer = new Chronometer();

// Target DOM elements
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const splits = document.getElementById('splits');

// Update display
function printTime() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// Handle left button click (Start/Stop)
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    // Start the chronometer
    chronometer.start(printTime);
    btnLeft.innerHTML = 'STOP';
    btnLeft.className = 'btn stop';
    btnRight.innerHTML = 'SPLIT';
    btnRight.className = 'btn split';
  } else {
    // Stop the chronometer
    chronometer.stop();
    btnLeft.innerHTML = 'START';
    btnLeft.className = 'btn start';
    btnRight.innerHTML = 'RESET';
    btnRight.className = 'btn reset';
  }
});

// Handle right button click (Split/Reset)
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('split')) {
    // Create and append a split time
    const splitTime = document.createElement('li');
    splitTime.className = 'list-item';
    splitTime.innerHTML = chronometer.split();
    splits.appendChild(splitTime);
  } else {
    // Reset the chronometer
    chronometer.reset();
    printTime();
    splits.innerHTML = ''; // Clear all split times
  }
});

// Initialize the display
printTime();
