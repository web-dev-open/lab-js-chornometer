class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  // Get seconds
  getSeconds() {
    return this.currentTime % 60;
  }

  // Format to two digits
  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  // Stop the chronometer
  stop() {
    clearInterval(this.intervalId);
  }

  // Reset the chronometer
  reset() {
    this.currentTime = 0;
  }

  // Get the split time
  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

module.exports = Chronometer;  