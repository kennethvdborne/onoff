function blinking (ledx) {
    setInterval(blinkStart, 250);

    function blinkStart() {
        if (ledx.readSync() === 0) {
            ledx.writeSync(1);
        } else {
            ledx.writeSync(0);
        }
    }
}

function blinkEnd(ledx) {
    clearInterval(blinkInterval);
    ledx.writeSync(0);
    ledx.unexport();
}

module.exports.blinking = blinking;
module.exports.blinkEnd = blinkEnd;
