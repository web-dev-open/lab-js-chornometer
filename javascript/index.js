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
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let minDigits = minutes.split('');
  // console.log(minDigits);
  minDecElement.innerHTML = minDigits[0];
  minUniElement.innerHTML = minDigits[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  let secDigits = seconds.split('');
  // console.log(secDigits);
  secDecElement.innerHTML = secDigits[0];
  secUniElement.innerHTML = secDigits[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function displayReset() {
  chronometer.reset();
  minDecElement.innerHTML = 0;
  minUniElement.innerHTML = 0;
  secDecElement.innerHTML = 0;
  secUniElement.innerHTML = 0;
}

function printSplit() {
  let timeStamp = chronometer.split();
  //create the list element
  let liElement = document.createElement('li');
  liElement.classList.add('list-item');
  liElement.innerHTML = timeStamp;
  splitsElement.append(liElement);
}

function clearSplits() {
  splitsElement.remove('.list-item');
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.classList.add('stop');
  btnLeftElement.classList.remove('start');
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.classList.add('split');
  btnRightElement.classList.remove('reset');
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.classList.add('start');
  btnLeftElement.classList.remove('stop');
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.classList.add('reset');
  btnRightElement.classList.remove('split');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  //SCENARIO #1: The device has started
  //change the left button
  if(btnLeftElement.innerHTML == 'START'){
    //start the chronometer
    chronometer.start(() => {
      printSeconds();
      printMinutes();
    });
    this.setStopBtn();
    this.setSplitBtn();
  }

  //SCENARIO #2: The device has stopped
  //change the left button
  else if(btnLeftElement.innerHTML == 'STOP'){
    //stop the chronometer
    chronometer.stop();
    this.setStartBtn();
    this.setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  //change the right button
  if(btnRightElement.innerHTML == 'RESET'){
    //reset the device
    this.displayReset();
    this.clearSplits();
  }
  
  else if(btnRightElement.innerHTML == 'SPLIT'){
    //split the display
    this.printSplit();
  }
});
