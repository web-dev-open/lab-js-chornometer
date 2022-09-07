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


    let timeArray = chronometer.split().split(":")
    let = minSplit = timeArray[0]
    let = secSplit = timeArray[1]
    minDecElement.innerHTML = minSplit[0]
    minUniElement.innerHTML = minSplit[1]
    secDecElement.innerHTML = secSplit[0]
    secUniElement.innerHTML = secSplit[1]

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

  btnLeftElement.innerHTML = "STOP"
  btnLeftElement.classList.remove("start")
  btnLeftElement.classList.add("stop");
  // ... your code goes here
}

function setSplitBtn() {
  btnRightElement.innerHTML = "RESET"
  btnRightElement.classList.remove("split")
  btnRightElement.classList.add("reset")
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.innerHTML = "START"
  btnLeftElement.classList.remove("stop")
  btnLeftElement.classList.add("start")
  // ... your code goes here
}

function setResetBtn() {
  btnRightElement.innerHTML = "SPLIT"
  btnRightElement.classList.remove("reset")
  btnRightElement.classList.add("split")
  
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // btnLeftElement.innerHTML = "STOP"
  if (btnLeftElement.innerHTML === "START"){
    setStopBtn()
    setResetBtn();
    chronometer.start(printTime())
  } else {
    setStartBtn()
    setSplitBtn()
    chronometer.stop()
  }
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
