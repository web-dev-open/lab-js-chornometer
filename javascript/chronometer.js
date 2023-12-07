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
    return parseInt(this.currentTime/60)
  }

  getSeconds() {
    // ... to get the current seconds
    return (this.currentTime%60)
  }

  getMilliseconds(){
    //to get the miliseconds --> BONUS PART
    return (this.currentTime/1000)
  }

  computeTwoDigitNumber(value) {
    // ... converting singal digit number to double digit and return it as a string
    if(value<10)
       return '0'+value 
    else 
       return ''+value 
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
    const m  = this.computeTwoDigitNumber(minute)

    const second = this.getSeconds()
    const s = this.computeTwoDigitNumber(second)
    return ""+m+":"+s
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}