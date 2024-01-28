class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0; // Add milliseconds property
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.milliseconds++;
      if (this.milliseconds === 1000) {
        this.milliseconds = 0;
      }
      if (callback) {
        callback();
      }
    }, 1); 
  }



  getMilliseconds() {
    return this.milliseconds;
  }

  resetMilliseconds() {
    this.milliseconds = 0;
  }

  splitWithMilliseconds() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());

    return `${minutes}:${seconds}:${milliseconds}`;
  }
}

module.exports = Chronometer;
