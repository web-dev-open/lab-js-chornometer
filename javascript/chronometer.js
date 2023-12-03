class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.millisecondsIntervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);

    // Bonus: Uncomment the line below to show milliseconds
    this.startMilliseconds(callback);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return (this.currentTime * 10) % 1000;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? '0' + value : value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
    // Bonus: Uncomment the line below to stop milliseconds
    this.stopMilliseconds();
  }

  reset() {
    this.currentTime = 0;
    // Bonus: Reset milliseconds if necessary
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  // Bonus: Milliseconds functionality

  startMilliseconds(callback) {
    this.millisecondsIntervalId = setInterval(() => {
      if (callback) {
        callback();
      }
    }, 10);
  }

  stopMilliseconds() {
    clearInterval(this.millisecondsIntervalId);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
