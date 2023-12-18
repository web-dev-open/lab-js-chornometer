class Chronometer {
  constructor() {
    // ... your code goes here
    let currentTime = 0;
    let intervalId = null;
    this.currentTime = currentTime;
    this.intervalId = intervalId;
  }
  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }
  computeTwoDigitNumber(value) {
    // ... your code goes here
    let strValue = value.toString();
    if (strValue.length < 2) {
      strValue = "0" + strValue;
    }
    return strValue;
  }
  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }
  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
