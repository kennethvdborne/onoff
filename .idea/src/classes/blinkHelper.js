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
}

function blinkEnd(led) {
    clearInterval(blinkInterval);
    blinkInProcess = false;
    led.writeSync(0);
    //led.unexport();
}

function blinkStartLeds(leds) {
    for (let i = 0; i < leds.length; i++) {
        blinkInProcess = false;
        blinkStart(leds[i]);
    }
}
function blinkEndLeds(leds) {
    for (let i = 0; i < leds.length; i++) {
        blinkEnd(leds[i]);
    }
}

module.exports.blinkStart = blinkStart;
module.exports.blinkEnd = blinkEnd;
module.exports.blinkStartLeds = blinkStartLeds;
module.exports.blinkEndLeds = blinkEndLeds;

//setTimeout(endBlink(), 5000); //stop blinking after 5 seconds

