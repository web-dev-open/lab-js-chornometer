class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback) {
      this.intervalId = setInterval(() => {
        callback();
      }, 1000);
    }
  }

  getMinutes() {
    const minutesPassed = Math.floor(this.currentTime / 60);
    return minutesPassed;
  }

  getSeconds() {
    const secondsPassed = this.currentTime % 60;
    return secondsPassed;
  }

  computeTwoDigitNumber(value) {
    const numberInStringFormat = `${value}`;
    if (numberInStringFormat.length === 1) {
      const paddeddNumber = `0${numberInStringFormat.slice()}`;
      return paddeddNumber;
    }
    return numberInStringFormat;
  }

  stop() {
    clearInterval(this.intervalId);
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

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
