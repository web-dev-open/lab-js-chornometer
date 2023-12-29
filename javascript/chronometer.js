class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId= null;
  }

  start(callback) {
    if(!this.intervalId){
      this.intervalId = setInterval(() =>{
        this.currentTime++;
        if(callback && typeof callback === 'function'){
          callback();
        }
      },1000);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }
  computeTwoDigitNumber(number) {
    const numberString= number.toString();
    return ("00"+numberString).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.stop();
    this.currentTime = 0;
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
