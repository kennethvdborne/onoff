
var ledx;
var blinkInterval = setInterval(blinkStart(), 300);

function blinkStart() {
    if (this.ledx.readSync() === 0) {
        this.ledx.writeSync(1);
    } else {
        this.ledx.writeSync(0);
    }
}

function blinkEnd() {
    clearInterval(blinkInterval);
    this.ledx.writeSync(0);
    this.ledx.unexport();
}

module.exports.blinkStart = blinkStart;
module.exports.blinkEnd = blinkEnd;
module.exports.ledx = ledx;

