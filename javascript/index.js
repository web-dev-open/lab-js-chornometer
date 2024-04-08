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

// Invoke the start method of the chronometer
function printTime() {
    // ... your code goes here
    printMinutes();
    printSeconds();
    printMilliseconds();
}

function printMinutes() {
    // ... your code goes here
    minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
    minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
    // ... your code goes here
    secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
    secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
    // ... your code goes here
    milDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[0];
    milUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[1];

}

function printSplit() {
    // ... your code goes here
    const newSplit = document.createElement('li');
    newSplit.className = 'list-item';
    newSplit.innerHTML = chronometer.split();
    splitsElement.appendChild(newSplit);
}

function clearSplits() {
    // ... your code goes here
    splitsElement.innerHTML = '';
}

function setStopBtn() {
    // ... your code goes here
    btnLeftElement.innerText = 'STOP';
    btnLeftElement.className = 'btn stop';
    btnRightElement.innerText = 'SPLIT';
    btnRightElement.className = 'btn split';
    chronometer.start(printTime);
}

function setSplitBtn() {
    // ... your code goes here
    chronometer.split();
}

function setStartBtn() {
    // ... your code goes here
    btnLeftElement.innerText = 'START';
    btnLeftElement.className = 'btn start';
    btnRightElement.innerText = 'RESET';
    btnRightElement.className = 'btn reset';
    chronometer.stop();

}

function setResetBtn() {
    // ... your code goes here
    minDecElement.innerText = '0';
    minUniElement.innerText = '0';
    secDecElement.innerText = '0';
    secUniElement.innerText = '0';
    milDecElement.innerText = '0';
    milUniElement.innerText = '0';
    chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
    // ... your code goes here
    if (btnLeftElement.classList.contains('start')) {
        setStopBtn();
    } else {
        setStartBtn();
    }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
    // ... your code goes here
    if (btnRightElement.classList.contains('split')) {
        printSplit();
        setSplitBtn();
    } else {
        clearSplits();
        setResetBtn();
    }
});