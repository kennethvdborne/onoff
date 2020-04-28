var blinkInterval = setInterval(blinkStart, 250);

function blinkStart(ledx) {
    if (ledx.readSync() === 0) {
        ledx.writeSync(1);
    } else {
        ledx.writeSync(0);
    }
}

function blinkEnd(ledx) {
    clearInterval(blinkInterval);
    ledx.writeSync(0);
    ledx.unexport();
}

setTimeout(endBlink, 5000);

module.exports.blinkStart = blinkStart();
module.exports.blinkEnd = blinkEnd();



/*
var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms

function blinkLED() { //function to start blinking
    if (led1.readSync() === 0) { //check the pin state, if the state is 0 (or off)
        led1.writeSync(1); //set pin state to 1 (turn LED on)
    } else {
        led1.writeSync(0); //set pin state to 0 (turn LED off)
    }
}

function endBlink() { //function to stop blinking
    clearInterval(blinkInterval); // Stop blink intervals
    led1.writeSync(0); // Turn LED off
    led1.unexport(); // Unexport GPIO to free resources
}

setTimeout(endBlink, 5000); //stop blinking after 5 seconds

*/