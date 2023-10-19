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
  secUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
  secDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];

  minUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
  minDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
}

function printMinutes() {
  // ... your code goes here
  chronometer.getMinutes()
}

function printSeconds() {
  // ... your code goes here
  chronometer.getSeconds();
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  chronometer.split();
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
  
  if(btnLeftElement.classList.contains('start')){
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop')
    chronometer.start(printTime);
    btnLeftElement.textContent = 'STOP';
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
    btnRightElement.textContent = 'SPLIT';
  }else{
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    chronometer.stop(); 
    btnLeftElement.textContent = 'START'; 
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    btnRightElement.textContent = 'RESET';
  }

});





// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
 if(btnRightElement.classList.contains('split')){
  let li = document.createElement('li');
  li.textContent = chronometer.split();
  li.classList.add('list-item');
  document.getElementById("splits").append(li);
  
 }else if(btnRightElement.classList.contains('reset')){
  secUniElement.textContent = 0;
  secDecElement.textContent = 0;
  minUniElement.textContent = 0;
  minDecElement.textContent = 0;
  let listItems = document.querySelectorAll('#splits li');
  for(let eachLi of listItems){
    document.getElementById('splits').removeChild(eachLi)
  } 
 }  
});
