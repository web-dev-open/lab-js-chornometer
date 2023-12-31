class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (callback) {
          callback();
        }
      }, 1000);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
    // Reset values in your HTML file using .innerHTML
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
const chronometer = new Chronometer();

// Start the chronometer
chronometer.start(() => {
  // Optional callback function to be executed every second
  console.log(chronometer.split()); // Display formatted time
});

// Stop the chronometer after 5000 milliseconds (5 seconds)
setTimeout(() => {
  chronometer.stop();
}, 5000);

// Reset the chronometer after 10000 milliseconds (10 seconds)
setTimeout(() => {
  chronometer.reset();
}, 10000);

