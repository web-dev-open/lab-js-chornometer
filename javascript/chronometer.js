class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0;
    this.intervalId=null;
    
    // Bonus
    this.milliseconds = 0;
    this.milliIntevalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(callback) callback();
    }, 1000);

    // Bonus
    this.milliIntevalId = setInterval(() => {
      this.milliseconds += 1;
      if(callback) callback();
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  // Bonus
  getMilliseconds() {
    return this.milliseconds % 100; 
  }
  
  computeTwoDigitNumber(value) {
    // ... your code goes here
    const numberStr = String(value).padStart(2, '0');
    return numberStr;
  }

  stop() {
    // ... your code goes here
    learInterval(this.intervalId);
    clearInterval(this.milliIntevalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  split() {
    // ... your code goes here
     const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    //const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
