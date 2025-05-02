class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0; // in seconds
    this.intervalId = null; // to store the interval ID 
    this.isRunning = false; // to track if the chronometer is running
    
  }

  start(callback) {
    // ... your code goes here
    this.isRunning = true; // set the running state to true
    this.intervalId = setInterval(() => {
      this.currentTime++; // increment the current time by 1 second
      if (callback) {
        callback(); // call the callback function if provided
      }
    }, 1000); // set the interval to 1000 milliseconds (1 second)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60); // calculate minutes by dividing current time by 60 and rounding down

  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60; // calculate seconds by taking the remainder of current time divided by 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`; // if value is less than 10, prepend a '0'
    } else {
      return `${value}`; // otherwise, return the value as a string
    }
  }

  stop() {
    // ... your code goes here
    this.isRunning = false; // set the running state to false
    clearInterval(this.intervalId); // clear the interval to stop the chronometer
    this.intervalId = null; // reset the interval ID to null

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0; // reset the current time to 0
    this.isRunning = false; // set the running state to false

  }

  split() {
    // ... your code goes here
    const minutes = this.getMinutes(); // get the current minutes
    const seconds = this.getSeconds(); // get the current seconds
    const twoDigitMinutes = this.computeTwoDigitNumber(minutes); // format minutes to two digits
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
