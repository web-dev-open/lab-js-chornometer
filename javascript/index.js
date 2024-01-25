class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    console.log('The chronometer has started.')
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(typeof callback === 'function'){
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    if(value<10){
      //padding required
      return `0${value}`;
    }

    return `${value}`;
  }

  stop() {
    console.log('The chronometer has stopped.')
    clearInterval(this.intervalId);
  }

  reset() {
    console.log('Chronometer reset.')
    this.currentTime = 0;
    //reset values in DOM
    let numberDisplay = document.querySelectorAll('.number');
    // numberDisplay[0].innerHTML = 0;
    // numberDisplay[1].innerHTML = 0;
    // numberDisplay[2].innerHTML = 0;
    // numberDisplay[3].innerHTML = 0;
  }

  split() {
    console.log('Chronometer split.')
    let min = this.computeTwoDigitNumber(this.getMinutes());
    let sec = this.computeTwoDigitNumber(this.getSeconds());

    return `${min}:${sec}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
