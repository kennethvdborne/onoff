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

function blinkSpecificLedsStart(input, ledsInput) {
    leds = [ ...ledsInput ];
    for (let i = 0; i < input.length; i++) {
         if (!input[i]) {
             leds.splice(i, 1);
         }
    }
    blinkStartLeds(leds);
}


function blinkSpecificKLedsStart(input, ledsInput) {
    leds = [ ...ledsInput ];
    for (let i = 0; i < input.length; i++) {
        if (input[i]) {
            leds.splice(i, 1);
        }
    }
    blinkStartLeds(leds);
}

function getLeds() {
    return leds;
}


module.exports.blinkStart = blinkStart;
module.exports.blinkEnd = blinkEnd;
module.exports.blinkStartLeds = blinkStartLeds;
module.exports.blinkEndLeds = blinkEndLeds;
module.exports.blinkSpecificLedsStart = blinkSpecificLedsStart;
module.exports.getLeds = getLeds;

//setTimeout(endBlink(), 5000); //stop blinking after 5 seconds

