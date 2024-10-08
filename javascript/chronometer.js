class Chronometer {
  constructor() {
    // Initialize properties
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // Start the interval and increment time every second
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback(); // Execute callback if provided
    }, 1000);
  }

  getMinutes() {
    // Calculate whole minutes passed
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // Get the remainder seconds after the last full minute
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // Ensure the value is two digits, padding with a leading 0 if needed
    return value.toString().padStart(2, '0');
  }

  stop() {
    // Stop the interval using the stored intervalId
    clearInterval(this.intervalId);
  }

  reset() {
    // Reset the current time to 0
    this.currentTime = 0;
  }

  split() {
    // Get the formatted time in mm:ss format
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
