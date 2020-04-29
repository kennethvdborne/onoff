
var ledx;
var blinkInterval = setInterval(blinkStart(), 300);

function blinkStart() {
    if (ledx.readSync() === 0) {
        ledx.writeSync(1);
    } else {
        ledx.writeSync(0);
    }
}

function blinkEnd() {
    clearInterval(blinkInterval);
    ledx.writeSync(0);
    ledx.unexport();
}

module.exports.blinkStart = blinkStart;
module.exports.blinkEnd = blinkEnd;
module.exports.ledx = ledx;

