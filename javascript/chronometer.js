class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0;
    this.intervalId="null";
    this.milliseconds = 0; 
  }

  start(callback) {
    // ... your code goes here
    const executeCallback = () => {
      if (callback && typeof callback === 'function') {
        callback();
      }
    };

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      
      executeCallback();
    }, 1000);
  
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }
  
  getMilliseconds() {
    return this.milliseconds % 1000;
  }

  computeTwoDigitNumber(number) {
    return number.toString().padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.milliseconds = 0; // Reset milliseconds
    document.getElementById('minDec').innerHTML = '0';
    document.getElementById('minUni').innerHTML = '0';
    document.getElementById('secDec').innerHTML = '0';
    document.getElementById('secUni').innerHTML = '0';
    document.getElementById('milDec').innerHTML = '0';
    document.getElementById('milUni').innerHTML = '0';
    document.getElementById('splits').innerHTML = ''; 
  }

  split() {
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
