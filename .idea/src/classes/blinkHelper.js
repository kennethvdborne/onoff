var blinkInProcess = false;
var leds;
var blinkInterval;
var arrayBlinkInterval = [];
var timeOutSlow = 300;
var timeOutFast = 100;

function setTimeOutSlow(x){
    timeOutSlow = x;
    console.log(timeOutSlow);
}

function blinkStart(led) {
    if (!blinkInProcess) {
        blinkInProcess = true;
        blinkInterval = setInterval(function blinking() {
            console.log(timeOutSlow + ' blink')
            if (led.readSync() === 0) {
                led.writeSync(1);
            } else {
                led.writeSync(0);
            }
        },timeOutSlow);
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
        },timeOutFast);
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
        blinkInProcess = false;
    } catch(e) {
        console.log('error');
    }
}

function stopLeds(ledsInput, ledStop){
    leds = [ ...ledsInput ];
        blinkEndLeds();
    setTimeout(function () {
        blinkEndLeds();
        if (ledStop.readSync() != 1){

        }
        blinkConfirm(ledStop);
    },1000);
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

function blinkConfirm(led) {
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
module.exports.stopLeds = stopLeds;
module.exports.setTimeOutSlow = setTimeOutSlow;


