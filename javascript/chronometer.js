class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    this.isStart = true
    // ... your code goes here
  }

  start(callback) {
    this.intervalID = setInterval(() => {
      this.currentTime++;
      callback()
      console.log(this.currentTime)
  }, 1000)
    // ... your code goes here
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
    // ... your code goes here
  }

  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    let myNumber = value;
    if (this.currentTime.length > 1){
      return myNumber.toString() 
    } else {
    let formattedNumber = ("0" + myNumber).slice(-2);
    return formattedNumber;}
    // ... your code goes here
  }

  stop() {
    clearInterval( this.intervalID );
    // ... your code goes here
  }

  reset() {
    
    this.currentTime = 0
    var elems = document.querySelectorAll(".sphere span");
    console.log(elems)
    // elems.innerHTML = 0

    // ... your code goes here
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${minutes}:${seconds}`


    // ... your code goes here
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
