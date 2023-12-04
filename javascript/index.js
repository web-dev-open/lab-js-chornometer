const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');



// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  // ... Display the current time
  printMinutes();
  printSeconds();
  printMilliseconds();


}

function printMinutes() {
  // ... your code goes here
  // ... Display Minutes
  const minutes = chronometer.getMinutes()
  const minutesVal = chronometer.computeTwoDigitNumber(minutes);

  minDecElement.innerHTML = minutesVal[0];
  minUniElement.innerHTML = minutesVal[1];

}

function printSeconds() {
  // ... your code goes here
  // ... Display seconds
  const seconds = chronometer.getSeconds()
  const secondsVal = chronometer.computeTwoDigitNumber(seconds);

  secDecElement.innerHTML = secondsVal[0];
  secUniElement.innerHTML = secondsVal[1];

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const miliseconds = chronometer.getMilliseconds()
  const msVal = chronometer.computeTwoDigitNumber(miliseconds);

  milDecElement.innerHTML = msVal[0];
  milUniElement.innerHTML = msVal[1];

}

function printSplit() {
  // ... your code goes here
  // ... display splits and append it to split list after creating a new split element. 
  const TimeofSplit = chronometer.split();

  const newSplit = document.createElement('li');

  newSplit.innerHTML = TimeofSplit;
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  // ... your code goes here
  // ... clear splits 
  splitsElement.innerHTML = ""

}

function setStopBtn() {
  // ... your code goes here
  // ... Stop button

    btnLeftElement.innerHTML = 'STOP';
    btnLeftElement.className = 'btn stop';

}

function setSplitBtn() {
  // ... your code goes here
  // ... Split button
  if(btnLeftElement.className.includes('stop')){

    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  }
  else{
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
  }

}

function setStartBtn() {
  // ... your code goes here
  // ... Start button

    btnLeftElement.innerHTML = 'START';
    btnLeftElement.className = 'btn start';

}

function setResetBtn() {
  // ... your code goes here
  // ... Reset Button 
  if(btnLeftElement.className.includes('stop')){

    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.className = 'btn split';
  }
  else{

    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
  }
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  // ... checking if timer is started or not.
  if(btnLeftElement.className.includes('start')){


    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  }
  else{

    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  // ... To reset or split the current time 
  if(btnRightElement.className.includes('reset')){

    chronometer.reset();
    printTime();
    clearSplits();

  }
  else{
    printSplit();
  }
});