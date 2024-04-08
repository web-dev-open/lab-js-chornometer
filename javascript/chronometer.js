class Chronometer {
    constructor() {
        // ... your code goes here
        this.currentTime = 0;
        this.intervalId = null;
        this.milliseconds = 0;
    }

    start(callback) {
        // ... your code goes here
        this.intervalId = setInterval(() => {
            this.milliseconds++;
            if (this.milliseconds === 1000) {
                this.currentTime++;
                this.milliseconds = 0;
            }
            if (callback) {
                callback();
            }
        }, 1)
    }

    getMinutes() {
        // ... your code goes here
        return Math.floor(this.currentTime / 60);
    }

    getSeconds() {
        // ... your code goes here
        return this.currentTime % 60;
    }

    computeTwoDigitNumber(value) {
        // ... your code goes here
        if (value < 10) {
            return `0${value}`;
        } else {
            return `${value}`;
        }
    }
    getMilliseconds() {
        // ... your code goes here
        return this.milliseconds;
    }

    stop() {
        // ... your code goes here
        clearInterval(this.intervalId);
    }

    reset() {
        // ... your code goes here
        this.currentTime = 0;
        this.milliseconds = 0;
    }

    split() {
        // ... your code goes here
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