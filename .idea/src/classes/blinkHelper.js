var blinkInProcess = false;
var blinkInterval;

function blinkStart(led) {
    if (!blinkInProcess) {
        blinkInProcess = true;
        blinkInterval = setInterval(function blinking() {
            if (led.readSync() === 0) {
                led.writeSync(1);
            } else {
                led.writeSync(0);
            }
        },300);
    }
    else console.log('Blink in process.....');
}


function blinkEnd(led) {
    clearInterval(blinkInterval);
    blinkInProcess = false;
    led.writeSync(0);
    //led.unexport();
}

module.exports.blinkStart = blinkStart;
module.exports.blinkEnd = blinkEnd;


