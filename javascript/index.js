// import Chronometer from "./chronometer";

const chronometer = new Chronometer();

console.log('hello world')
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
  // ... Display the current time
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... Display Minutes
  const mins = chronometer.getMinutes()
  const mVal = chronometer.computeTwoDigitNumber(mins);
  minDecElement.innerHTML = mVal[0];
  minUniElement.innerHTML = mVal[1];

}

function printSeconds() {
  // ... Display seconds
  const sec = chronometer.getSeconds()
  const sVal = chronometer.computeTwoDigitNumber(sec);
  secDecElement.innerHTML = sVal[0];
  secUniElement.innerHTML = sVal[1];

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  const msec = chronometer.getMilliseconds()
  const msVal = chronometer.computeTwoDigitNumber(msec);

  milDecElement.innerHTML = msVal[0];
  milUniElement.innerHTML = msVal[1];

}

function printSplit() {
  // ... display splits and append it to split list after creating a new split element. 
  const TimeofSplit = chronometer.split();

  const newSplit = document.createElement('li');

  newSplit.innerHTML = TimeofSplit;
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  // ... clear splits 
  splitsElement.innerHTML = ""

}

function setStopBtn() {
  // ... Stop button
  
    btnLeftElement.innerHTML = 'STOP';
    btnLeftElement.className = 'btn stop';
  
}

function setSplitBtn() {
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
  // ... Start button
  
    btnLeftElement.innerHTML = 'START';
    btnLeftElement.className = 'btn start';
    printMilliseconds()
}

function setResetBtn() {
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
  // ... checking if timer is started or not.
  console.log(btnLeftElement.innerHTML)
  if(btnLeftElement.innerHTML=='START'){    
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
  // ... To reset or split the current time 
  console.log(btnRightElement.innerHTML)
  if(btnRightElement.innerHTML=='RESET'){
    
    chronometer.reset();
    printTime();
    clearSplits();
    
  }
  else{
    printSplit();
  }



});