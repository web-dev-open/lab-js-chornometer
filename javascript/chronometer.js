class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(()=> {
      this.currentTime +=1;
      if (callback) {
        callback();
      }
      return this.currentTime;
     
    }, 1000);  
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    const secondes = Math.floor(this.currentTime %  60);
    return secondes;
  }

  computeTwoDigitNumber(value) {
    if (value <10){
      return 0 + value.toString();
    }else{
      return value.toString(); 
    }
  }

  stop() {
   return clearInterval(this.intervalId);
  }

  reset() {
   return this.currentTime = 0;
  }

  split() {
    const realMin = this.computeTwoDigitNumber(this.getMinutes());
    const realSec = this.computeTwoDigitNumber(this.getSeconds());
    return `${realMin}:${realSec}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
