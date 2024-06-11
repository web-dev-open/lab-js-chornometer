class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0;
    this.intervalId=null;

  }

  start(callback) {
    // ... your code goes here
    this.intervalId=setInterval(()=>{
      this.currentTime++;
      if(callback) callback();
    },1000);

  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime%60;
  }

  getMilliseconds(){
    return this.currentTime%100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().padStart(2,'0');
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    this.intervalId=null;
  }

  reset() {
    // ... your code goes here
    this.currentTime=0;
  }

  split() {
    // ... your code goes here
    const minutes=this.computeTwoDigitNumber(this.getMinutes());
    const seconds=this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds=this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
