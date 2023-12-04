class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime++;

      if(callback){
        callback();
      }
  },1000)

  }

  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    const seconds = (this.currentTime % 60 )
    return seconds;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    var formattedNumber = ("0" + value).slice(-2);
    const val = formattedNumber.toString();
    return val;
  }

  stop() {
    // ... your code goes here
    if(this.intervalId !== null){

      clearInterval(this.intervalId)
      this.intervalId = null;
    }

  }

  reset() {
    // ... your code goes here
    // ... to reset the current time to 0
    this.currentTime = 0;

  }

  split() {
    // ... your code goes here
    // ... spliting the running time 
    const minute = this.getMinutes()
    const minVal  = this.computeTwoDigitNumber(minute)

    const second = this.getSeconds()
    const secVal = this.computeTwoDigitNumber(second)

    const formattedTime = `${minVal}:${secVal}`

    return formattedTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
