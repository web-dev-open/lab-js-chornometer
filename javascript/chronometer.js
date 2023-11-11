class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback) {
      this.intervalId = setInterval(() => {
        callback();
      }, 10);
    }
  }

  getMinutes() {
    const minutesPassed = Math.floor(this.currentTime / 60000);
    return minutesPassed;
  }

  getSeconds() {
    const secondsPassed = Math.floor(this.currentTime / 1000) % 60;
    return secondsPassed;
  }

  getMilliseconds() {
    const millisecondsPassed = Math.floor(this.currentTime % 1000);
    return millisecondsPassed;
  }

  computeTwoDigitNumber(value) {
    const numberInStringFormat = `${value}`;
    if (numberInStringFormat.length === 1) {
      const paddeddNumber = `0${numberInStringFormat}`;
      return paddeddNumber;
    } else if (numberInStringFormat.length > 2) {
      const [firstDigit, secondDigit] = numberInStringFormat;
      return `${firstDigit}${secondDigit}`;
    }
    return numberInStringFormat;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
