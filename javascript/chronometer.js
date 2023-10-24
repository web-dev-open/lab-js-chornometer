class Chronometer {
  constructor() { this.currentTime = 0;
    this.intervalId = null;
    this.splits = [];
    // ... your code goes here
  }

  start(callback) {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
    // ... your code goes here
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime/60);
    return minutes;
    // ... your code goes here
  }

  getSeconds() {
    const seconds = (this.currentTime % 60 )
    return seconds;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    var formattedNumber = ("0" + value).slice(-2);
    const val = formattedNumber.toString();
    return val;
    // ... your code goes here
  }

  stop() {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    this.splits = [];
  }
    // ... your code goes here
  }

  split() {
    const minute = this.getMinutes()
    const minVal  = this.computeTwoDigitNumber(minute)

    const second = this.getSeconds()
    const secVal = this.computeTwoDigitNumber(second)

    const formattedTime = `${minVal}:${secVal}`

    return formattedTime;
  
    // ... your code goes here
  }


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
