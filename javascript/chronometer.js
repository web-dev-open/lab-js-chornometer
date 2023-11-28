class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = null;
  
      // Bonus
      this.milliseconds = 0;
      this.milliIntevalId = null;
    }
  
    start(callback) {
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
      return Math.floor(this.currentTime / 60);
    }
  
    getSeconds() {
      return this.currentTime % 60;
    }
  
    // Bonus
    getMilliseconds() {
      return this.milliseconds % 100; 
    }
  
    computeTwoDigitNumber(value) {
      // Convert the number to string and pad it with a leading '0' if necessary
      const numberStr = String(value).padStart(2, '0');
      return numberStr;
    }
  
    stop() {
      clearInterval(this.intervalId);
      clearInterval(this.milliIntevalId);
    }
  
    reset() {
      this.currentTime = 0;
      this.milliseconds = 0;
    }
  
    split() {
      const minutes = this.computeTwoDigitNumber(this.getMinutes());
      const seconds = this.computeTwoDigitNumber(this.getSeconds());
      //const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
  
      return `${minutes}:${seconds}`;
    }
  
    // Bonus
    splitmilli() {
      const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
      return `${milliseconds}`;
    }
  }
  
  // The following is required to make unit tests work.
  /* Environment setup. Do not modify the below code. */
  if (typeof module !== 'undefined') {
    module.exports = Chronometer;
  }
