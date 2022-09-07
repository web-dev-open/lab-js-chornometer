class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    let num = value;

    if (this.currentTime.length > 1) {
      return num.toString();
    } else {
      let formattedNumber = ('0' + num).slice(-2);

      return formattedNumber;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let getMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let getSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${getMinutes}:${getSeconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
