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

function blinkFastStart(led) {
    if (!blinkInProcess) {
        blinkInProcess = true;
        blinkInterval = setInterval(function blinking() {
            if (led.readSync() === 0) {
                led.writeSync(1);
            } else {
                led.writeSync(0);
            }
        },100);
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

function blinkSpecificLedsStart(input, ledsInput, mode) {
    leds = [ ...ledsInput ];
    var ledsSelected = [];

    if (mode === 'Play'){
        for (let i = 0; i < input.length; i++) {
            if (!input[i]) {
                ledsSelected.push(leds[i]);
            }
        }
    }
    if (mode === 'Record'){
        for (let i = 0; i < input.length; i++) {
            if (input[i]) {
                ledsSelected.push(leds[i]);
            }
        }
    }
    blinkStartLeds(ledsSelected);
}

function blinkConfirm(led, ledsFunction) {
    if (!blinkInProcess) {
        blinkInProcess = true;
        blinkInterval = setInterval(function blinking() {
            if (led.readSync() === 0) {
                led.writeSync(1);
            } else {
                led.writeSync(0);
            }
        },50);
        arrayBlinkInterval.push(blinkInterval);
    }
    setTimeout(function () {
        clearInterval(blinkInterval);
        blinkInProcess = false;
        led.writeSync(0);
    },1000);
}


module.exports.blinkStart = blinkStart;
module.exports.blinkFastStart = blinkFastStart;
module.exports.blinkEnd = blinkEnd;
module.exports.blinkStartLeds = blinkStartLeds;
module.exports.blinkEndLeds = blinkEndLeds;
module.exports.blinkSpecificLedsStart = blinkSpecificLedsStart;
module.exports.blinkConfirm = blinkConfirm;


//setTimeout(endBlink(), 5000); //stop blinking after 5 seconds

