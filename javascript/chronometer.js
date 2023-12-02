class Chronometer {

  constructor() {
    // ... the constructor of class
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... to start the chronometer
    this.intervalId = setInterval(()=>{
        this.currentTime++;

        if(callback){
          callback();
        }
    },1000)

  }

  getMinutes() {
    // ... to get the current minutes
    const minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    // ... to get the current seconds
    const seconds = (this.currentTime % 60 )
    return seconds;
  }

  getMilliseconds(){
    //to get the miliseconds --> BONUS PART
    const milisec = (this.currentTime % 1000);
    return milisec;
  }

  computeTwoDigitNumber(value) {
    // ... converting singal digit number to double digit and return it as a string

    var formattedNumber = ("0" + value).slice(-2);
    const val = formattedNumber.toString();
    return val;
  }

  stop() {
    // ... to stop the current timer
    if(this.intervalId !== null){
       
      clearInterval(this.intervalId)
      this.intervalId = null;
    }
    
  }

  reset() {
    // ... to reset the current time to 0
    this.currentTime = 0;

  }

  split() {
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
