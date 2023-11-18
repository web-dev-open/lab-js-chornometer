// Iteration No. 1. The Logic

class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  // Start Method. Initiaes the chronometer with callback
  start(callback) {
    // ... your code goes here

    // Check if the code is no running.
    if(!this.intervalId) {

      // Setting up the interval to update every second (1,000 milliseconds)
      this.intervalId = setInterval(() => {
        this.currentTime++; // This line increments by 1,000 miliseconds
        this.printTime(); // Print the updated time

        // Verify if there's a callback and if yes, execute it
        if(callback && typeof callback === "function") {
          callback();
        }
      }, 1000);
    }
  }

  getMinutes() {
    // ... your code goes here

    // Calculates the minutes portion of the current time as an integer.
    return Math.floor(this.currentTime / 60); 
  }

  getSeconds() {
    // ... your code goes here

    // Calculates the seconds and returns the remainding seconds.
    return this.currentTime % 60;
  }

  // Method to represent the numbers with two digits
  computeTwoDigitNumber(value) {
    // ... your code goes here

    // Ternary Operator (I prefer this one since I can use the same logic in other programming languages)
    return number < 10 ? `0${number}` : `${number}`;

    // With slice
    // return ("0" + number ).slice(-2);

  }

  stop() {
    // ... your code goes here

    // Stop chronometer using clearInterval
    clearInterval(this.intervalId); // Clears the interval

    // Reset the Interval 
    this.intervalId = null;

  }

  reset() {
    // ... your code goes here

    // Resets the counter to zero
    this.currentTime = 0;
    
    // Stops it
    // this.stop();
    // this.printTime();
  }

  split() {
    // ... your code goes here

    // Obtaining the split time
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
