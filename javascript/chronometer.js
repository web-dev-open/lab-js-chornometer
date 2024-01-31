class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.currentMilliseconds = 0
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentMilliseconds++; 
        if (this.currentMilliseconds === 1000) {
          this.currentMilliseconds = 0;
          this.currentTime++;
        }
        if (callback) {
          callback();
        }
      }, 1);
    }
  }
  getMilliseconds() {
    return this.currentMilliseconds;
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
    return value < 10 ? `0${value}` : `${value}`;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
