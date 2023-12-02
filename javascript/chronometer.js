class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    this.seconds = 0;
    this.minutes = 0;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1 
      callback();
      console.log(this.currentTime)
    },1000)
  }

  getMinutes() {
    // ... your code goes here
    this.minutes =  Math.floor(this.currentTime/60);
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    this.seconds = Math.floor(this.currentTime % 60);
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let formatValue = value.toString().padStart(2, '3');
    console.log(formatValue);
    return formatValue;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return this.minutes.toString().padStart(2, '0') + ":" + this.seconds.toString().padStart(2, '0')
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
