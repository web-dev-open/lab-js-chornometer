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
  secDecElement.innerHTML  = printSeconds() 
  minDecElement.innerHTML = printMinutes()
}

function printMinutes() {
  // ... your code goes here
  minUniElement.innerHTML = '';
  let printTime = chronometer.minutes.toString()
  //secDecElement.innerHTML = printTime.padStart(2,'0');
  return printTime.padStart(2,'0');
}

function printSeconds() {
  // ... your code goes here
  secUniElement.innerHTML = '';
  let printTime = chronometer.currentTime.toString()
  //secDecElement.innerHTML = printTime.padStart(2,'0');
  return printTime.padStart(2,'0');
}


// Start/Stop Button
btnLeftElement.addEventListener('click', (btn) => {
  // ... your code goes here
  chronometer.start(printTime)
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  chronometer.stop()
});
