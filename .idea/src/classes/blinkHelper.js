
var ledx;
//var blinkInterval = setInterval(blinkStart(), 300);
var test = 'Something here ';

function blinkStart() {
    setInterval(function blinking() {
        if (ledx.readSync() === 0) {
            ledx.writeSync(1);
        } else {
            ledx.writeSync(0);
        }
    },300);
}


function blinkEnd() {
    clearInterval(blinkInterval);
    ledx.writeSync(0);
    ledx.unexport();
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

