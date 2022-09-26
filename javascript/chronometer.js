class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime = this.currentTime+1;      
      callback();     
    },1000);    
  }

  getMinutes() {
    let min = this.currentTime/60;
    min = Math.floor(min);    
    return min;
  }

  getSeconds() {
    // ... your code goes here
    let sec = this.currentTime % 60;  
    return sec;
  }



  computeTwoDigitNumber(value) {
    // ... your code goes here
    let theValue = String(value);
    if(theValue.length < 2){
      theValue = 0+theValue;
      return theValue;
    }else{
      return theValue;
    }
  }
 
  
  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }


  reset() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }


  split() {
    // ... your code goes here
    let theMinute = this.computeTwoDigitNumber(this.getMinutes());
    let theSeconds = this.computeTwoDigitNumber(this.getSeconds());
    let theTimeString = theMinute+":"+theSeconds;
    // console.log(theTimeString)
    return theTimeString;
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}