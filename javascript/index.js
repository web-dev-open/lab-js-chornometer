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
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milDecElement = document.getElementById('milDec');
    const milUniElement = document.getElementById('milUni');
    const { currentMilliseconds } = this;

    milDecElement.textContent = this.computeTwoDigitNumber(Math.floor(currentMilliseconds / 10));
    milUniElement.textContent = this.computeTwoDigitNumber(currentMilliseconds % 10);
}

function printSplit() {
  const splitTime = chronometer.split(); 
  
  
  const splitItem = document.createElement('li');
  splitItem.textContent = splitTime; 
  
  
  splitsElement.appendChild(splitItem);
}

function clearSplits() {
 
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  const btnLeftElement = document.getElementById('btnLeft');

  
  btnLeftElement.textContent = 'STOP';

  
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
}

function setSplitBtn() {
  if (btnLeftElement.classList.contains('stop')) {
   
    btnRightElement.textContent = 'SPLIT';
    btnRightElement.className = 'btn split';
  } else {
    
    btnRightElement.textContent = 'RESET';
    btnRightElement.className = 'btn reset';
  }
}

function setStartBtn() {
  if (btnLeftElement.classList.contains('stop')) {
   
    btnLeftElement.textContent = 'STOP';
    btnLeftElement.className = 'btn stop';
  } else {
    
    btnLeftElement.textContent = 'START';
    btnLeftElement.className = 'btn start';
  }
}

function setResetBtn() {
  if (btnLeftElement.classList.contains('stop')) {
   
    btnRightElement.textContent = 'SPLIT';
    btnRightElement.className = 'btn split';
  } else {
    
    btnRightElement.textContent = 'RESET';
    btnRightElement.className = 'btn reset';
}
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    
    chronometer.start(printTime); 
    setStartBtn(); 
    setResetBtn(); 
  } else {
   
    chronometer.stop(); 
    setStartBtn(); 
    setResetBtn(); 
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    
    chronometer.reset(); 
    setResetBtn(); 
    printTime(); 
    clearSplits(); 
  } else {
    
    printSplit(); 
  }
});
