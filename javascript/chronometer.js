class Chronometer {
  constructor() {
     let currentTime = 0;
    let intervalId = null;
    this.currentTime = currentTime;
    this.intervalId = intervalId;
    // ... your code goes here
  }

  start(callback) {
      // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
    // ... your code goes here
  }

  getMinutes() {
     return Math.floor(this.currentTime / 60);// ... your code goes here
  }

  getSeconds() {
        return this.currentTime % 60;// ... your code goes here
  }

  computeTwoDigitNumber(value) {
    let strValue = value.toString();
    if (strValue.length < 2) {
      strValue = "0" + strValue;
    }
    return strValue; // ... your code goes here
  }

  stop() {
     clearInterval(this.intervalId); // ... your code goes here
  }

  reset() {
   this.currentTime = 0;  // ... your code goes here
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;// ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
