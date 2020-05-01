var blinkInProcess = false;
var leds;
var blinkInterval;
var arrayBlinkInterval = [];

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
        arrayBlinkInterval.push(blinkInterval);
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
function blinkEndLeds() {
    try {
        if (arrayBlinkInterval.length > 0) {
            for (let i = 0; i < arrayBlinkInterval.length; i++) {
                clearInterval(arrayBlinkInterval[i]);
            }
            for (let i = 0; i < leds.length; i++) {
                leds[i].writeSync(0);
            }
        }
    } catch(e) {
        console.log('error');
    }
}

function blinkSpecificLedsStart(input) {
    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }

}


module.exports.blinkStart = blinkStart;
module.exports.blinkEnd = blinkEnd;
module.exports.blinkStartLeds = blinkStartLeds;
module.exports.blinkEndLeds = blinkEndLeds;
module.exports.blinkSpecificLedsStart = blinkSpecificLedsStart

//setTimeout(endBlink(), 5000); //stop blinking after 5 seconds

