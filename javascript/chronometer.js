class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback)
        callback();
    }, 1000)
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
    let formattedNumber = (value < 10) ? '0' + value.toString() : value.toString();
    return formattedNumber;
  }
  stop() {
    // ... your code goes here
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minute = this.computeTwoDigitNumber(this.getMinutes());
    const second = this.computeTwoDigitNumber(this.getSeconds());
    return `${minute}:${second}`;
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
