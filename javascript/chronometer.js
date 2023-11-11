class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (callback) {
          callback();
        }
      }, 1000);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
const chronometer = new Chronometer();

chronometer.start();

// To stop the chronometer after some time:
// chronometer.stop();

// To get the current time in "mm:ss" format:
// const currentTime = chronometer.split();
document.getElementById('btnRight').addEventListener('click', () => {
  if (isRunning) {
    // Handle SPLIT functionality
    const splitsList = document.getElementById('splits');
    const splitTime = chronometer.split();

    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = splitTime;

    splitsList.appendChild(listItem);
  } else {
    // Handle CLEAR functionality
    chronometer.reset();
    updateScreen(0, 0);
    
    // Clear the list of split times
    const splitsList = document.getElementById('splits');
    splitsList.innerHTML = '';
  }
});



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
