var blinkInProcess = false;
var blinkInterval;
var leds;

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
}

function blinkStartLeds(ledsInput) {
    leds = ledsInput;
    for (let i = 0; i < leds.length; i++) {
        blinkInProcess = false;
        blinkStart(leds[i]);
    }
}
function blinkEndLeds(ledsInput) {
    clearInterval(blinkInterval);
    blinkInProcess = false;
    leds = ledsInput;
    for (let i = 0; i < leds.length; i++) {
        leds[i].writeSync(0);
    }
}

function setLeds(ledsInput) {
    leds = ledsInput;
}

module.exports.blinkStart = blinkStart;
module.exports.blinkEnd = blinkEnd;
module.exports.blinkStartLeds = blinkStartLeds;
module.exports.blinkEndLeds = blinkEndLeds;
module.exports.setLeds = setLeds;

//setTimeout(endBlink(), 5000); //stop blinking after 5 seconds

