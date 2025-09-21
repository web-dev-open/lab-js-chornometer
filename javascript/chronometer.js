class Chronometer {
  constructor() {
    // ... your code goes here
       this.currentTime = 0;
       this.intervalId = null;
       this.milliSeconds=0;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval (()=> {
          this.milliSeconds+=10;
          if (this.milliSeconds===1000){
             this.milliSeconds=0;
             this.currentTime+=1
          }
          if (callback)callback();
          
       },10);
    
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
      return this.milliSeconds;
   }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value <10){
      return ('0'+value);
    }
    else{
      return String(value);
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime=0;
    this.milliSeconds=0;
  }

  split() {
    // ... your code goes here
    const min=this.computeTwoDigitNumber(this.getMinutes());
    const sec=this.computeTwoDigitNumber(this.getSeconds());
    const milli=this.computeTwoDigitNumber(Math.floor(this.getMilliseconds()/10));
    return `${min}:${sec}:${milli}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
