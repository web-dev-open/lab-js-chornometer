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
  
  const formattedMinutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const formattedSeconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  minDecElement.textContent = formattedMinutes[0];
  minUniElement.textContent = formattedMinutes[1];
  secDecElement.textContent = formattedSeconds[0];
  secUniElement.textContent = formattedSeconds[1];
  return `${formattedMinutes}:${formattedSeconds}`;

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
  if (btnLeftElement.className == 'btn start' && btnLeftElement.innerHTML == "START"){
    btnLeftElement.className = 'btn stop';
    btnLeftElement.innerHTML = "STOP";
    btnRightElement.className = 'btn split';
    btnRightElement.innerHTML = "SPLIT";
    chronometer.start(printTime);
  }else{
    btnLeftElement.className = 'btn start';
    btnLeftElement.innerHTML = "START";
    btnRightElement.className = 'btn reset';
    btnRightElement.innerHTML = "RESET";
    chronometer.stop();
  }
  
});


// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className == 'btn reset' && btnRightElement.innerHTML == "RESET") {
    chronometer.reset();
    printTime();
    splitsElement.innerHTML = '';
  }else{
    chronometer.split();
  }});

  
  document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('btn') && event.target.classList.contains('split'))
  {
    const splitlist = printTime(); 
    const newSplitItem = document.createElement('li');
    newSplitItem.innerHTML = `<span>${splitlist}</span>`;
    splitsElement.appendChild(newSplitItem);
  }
});