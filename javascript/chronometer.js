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
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let noofminutes = Math.floor(this.currentTime / 60);
    return noofminutes;
  }

  getSeconds() {
    // ... your code goes here
     let noofseconds = this.currentTime % 60;
    return noofseconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  split() {
    // ... your code goes here
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let min1 = this.computeTwoDigitNumber(min);
    let sec1 = this.computeTwoDigitNumber(sec);
    return `${min1}:${sec1}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
