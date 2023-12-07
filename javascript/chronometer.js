class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++;

      if(callback){
        callback();
      }
  },1000)
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    const seconds = (this.currentTime % 60 )
    return seconds;
  }

  getMilliseconds(){
    //to get the miliseconds --> BONUS PART
    const milisec = (this.currentTime % 1000);
    return milisec;
  }

  computeTwoDigitNumber(value) {
    var formattedNumber = ("0" + value).slice(-2);
    const val = formattedNumber.toString();
    return val;
  }

  stop() {
    if(this.intervalId !== null){
       
      clearInterval(this.intervalId)
      this.intervalId = null;
    }
  }

  reset() {
    this.currentTime = 0;
}

  split() {
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
