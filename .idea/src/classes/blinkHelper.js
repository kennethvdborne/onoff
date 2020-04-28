class BlinkHelper {

    constructor() {
        this.ledx;
        this.blinkInterval;
    }
 
    blink() {
        this.blinkInterval = setInterval(blinkStart(), 300);
    }

    blinkStart() {
        if (this.ledx.readSync() === 0) {
            this.ledx.writeSync(1);
        } else {
            this.ledx.writeSync(0);
        }
    }

    blinkEnd(ledx) {
        clearInterval(blinkInterval);
        this.ledx.writeSync(0);
        this.ledx.unexport();
    }
}

module.exports = new BlinkHelper();
//module.exports.blinking = blinking;
//module.exports.blinkEnd = blinkEnd;
