class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    // Check if callback is provided and it's a function
    if (callback && typeof callback === 'function') {
      // Start the interval and assign the intervalId to this.intervalId
      this.intervalId = setInterval(() => {
        // Increment the currentTime by 1 every second
        this.currentTime++;
        // Execute the callback function
        callback();
      }, 1000);
    } else {
      // Start the interval without a callback
      this.intervalId = setInterval(() => {
        // Increment the currentTime by 1 every second
        this.currentTime++;
      }, 1000);
    }
  }
  
  getMinutes() {
    // ... your code goes here
    // Calculate the number of minutes from the currentTime
    return Math.floor(this.currentTime / 60);
  }
  

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
     // Convert the number to a string and pad it with leading zeros if necessary
     return String(number).padStart(2, '0');
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    // Reset the HTML values
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
  }

  split() {
    // ... your code goes here
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
