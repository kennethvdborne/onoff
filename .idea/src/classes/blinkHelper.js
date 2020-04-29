
var led;
var blinkInterval;
//var test = 'Something here ';

function blinkStart(ledx) {
    led = ledx;
    setInterval(function blinking() {
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
    led.unexport();
}

function testing(x) {
    console.log(test);
    console.log(x);
    test = x;
    console.log(x);
}

module.exports.blinkStart = blinkStart;
//module.exports.blinkEnd = blinkEnd;
//module.exports.ledx = ledx;
module.exports.testing = testing;
module.exports.test = test;

