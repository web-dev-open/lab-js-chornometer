

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
  // ... Display the current time
  printMinutes();
  printSeconds();
  printMilliseconds();


}

function printMinutes() {
  // ... Display Minutes
  const minutes = chronometer.getMinutes()
  const minutesVal = chronometer.computeTwoDigitNumber(minutes);

  minDecElement.innerHTML = minutesVal[0];
  minUniElement.innerHTML = minutesVal[1];

}

function printSeconds() {
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

