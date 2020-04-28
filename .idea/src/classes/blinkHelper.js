class BlinkHelper {

    constructor() {
        this.blinkInterval = setInterval(blinkStart, 300);
    }


    blinkStart(ledx) {
        if (ledx.readSync() === 0) {
            ledx.writeSync(1);
        } else {
            ledx.writeSync(0);
        }
    }

    blinkEnd(ledx) {
        clearInterval(blinkInterval);
        ledx.writeSync(0);
        ledx.unexport();
    }
}

module.exports = BlinkHelper();
//module.exports.blinking = blinking;
//module.exports.blinkEnd = blinkEnd;
