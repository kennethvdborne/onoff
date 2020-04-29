var led;
var blinkInterval;

function blinkStart(ledx) {
    led = ledx;
    blinkInterval = setInterval(function blinking() {
        if (led.readSync() === 0) {
            led.writeSync(1);
        } else {
            led.writeSync(0);
        }
    },300);
}


function blinkEnd() {
    clearInterval(blinkInterval);
    led.writeSync(0);
    //led.unexport();
}

module.exports.blinkStart = blinkStart;
module.exports.blinkEnd = blinkEnd;


