class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilTime = 0;
    this.intervaMillId = null;
  }

  start(callback, milCallback) {
    this.intervalId = setInterval(() => {
      console.log(this.currentTime);
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
    this.intervaMillId = setInterval(() => {
      console.log(this.currentMilTime);
      this.currentMilTime++;
      if (milCallback) {
        milCallback();
      }
    }, 100);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.intervaMillId);
  }

  reset() {
    this.currentTime = 0;
    this.currentMilTime = 0;
  }

  split() {
    let getMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let getSeconds = this.computeTwoDigitNumber(this.getSeconds());
    let getMilSecs = this.computeTwoDigitNumber(this.currentMilTime);
    return `${getMinutes}:${getSeconds}:${getMilSecs}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
