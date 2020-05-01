const Gpio = require('onoff').Gpio;
const blinkHelper = require('./src/classes/blinkHelper');
const httpHelper = require('./src/classes/httpHelper');
const looper = require('./src/classes/looper');

var recordMode = false;
var playMode = false;
var stopMode = false;

//Delay for buttons
var sys1 = true;
var sys2 = true;
var sys3 = true;
var sys4 = true;
var sys5 = true;
var sys6 = true;
var sys7 = true;
var sys8 = true;
var sys9 = true;
var sysPlay = true;
var sysStop = true;
var sysRecord = true;

//Initializing Output
const led1 = new Gpio(10, 'out');
const led2 = new Gpio(24, 'out');
const led3 = new Gpio(23, 'out');
const led4 = new Gpio(22, 'out');
const led5 = new Gpio(27, 'out');
const led6 = new Gpio(18, 'out');
const led7 = new Gpio(17, 'out');
const led8 = new Gpio(15, 'out');
const led9 = new Gpio(14, 'out');
const ledMain = new Gpio(4, 'out');
const ledPlay = new Gpio(11, 'out');
const ledStop = new Gpio(25, 'out');
const ledRecord = new Gpio(9, 'out');
const fan = new Gpio(2, 'out');

//Array leds
var ledsAll = [ledPlay, ledStop, ledRecord, led1, led2, led3, led4, led5, led6, led7, led8, led9];
var ledsFunction = [led1, led2, led3, led4, led5, led6, led7, led8, led9];

//Initializing Input
const button1 = new Gpio(16, 'in', 'both', 'rising');
const button2 = new Gpio(19, 'in', 'both','rising');
const button3 = new Gpio(13, 'in', 'both', 'rising');
const button4 = new Gpio(12, 'in', 'both', 'rising');
const button5 = new Gpio(6, 'in', 'both', 'rising');
const button6 = new Gpio(5, 'in', 'both', 'rising');
const button7= new Gpio(8, 'in', 'both', 'rising');
const button8 = new Gpio(0, 'in', 'both', 'rising');
const button9 = new Gpio(7, 'in', 'both', 'rising');
const buttonPlay = new Gpio(21, 'in', 'both');
const buttonStop = new Gpio(20, 'in', 'both');
const buttonRecord = new Gpio(26, 'in', 'both');

function buttonFunctions(value, x) {
    if (value === 1 && recordMode) {

    }
    if (value === 1 && playMode) {
        console.log('play ' + x);
    }
    if (value === 1 && stopMode) {
        console.log('stop ' + x);
    }
}

//Watch Output
button1.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (sys1 && value === 1) {
        blinkHelper.blinkStartLeds(leds);
        sys1 = false;
        setTimeout(function(){
            sys1 = true;
        }, 1000);
        buttonFunctions(value, 1);
    }
});

button2.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (sys2 && value === 1) {
        blinkHelper.blinkEndLeds();
        sys2 = false;
        setTimeout(function(){
            sys2 = true;
        }, 1000);
        buttonFunctions(value, 2);
    }
});

button3.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (sys3 && value === 1) {
        sys3 = false;
        setTimeout(function(){
            sys3 = true;
        }, 1000);
        buttonFunctions(value, 3);
    }
});

button4.watch((err, value) => {
    if (err) {
        throw err;
    }
        if (sys4 && value === 1) {
            sys4 = false;
            setTimeout(function(){
                sys4 = true;
            }, 1000);
            buttonFunctions(value, 4);
        }
});

button5.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (sys5 && value === 1) {
        sys5 = false;
        setTimeout(function(){
            sys5 = true;
        }, 1000);
        buttonFunctions(value, 5);
    }
});

button6.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (sys6 && value === 1) {
        sys6 = false;
        setTimeout(function(){
            sys6 = true;
        }, 1000);
        buttonFunctions(value, 6);
    }
});

button7.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (sys7 && value === 1) {
        sys7 = false;
        setTimeout(function(){
            sys7 = true;
        }, 1000);
        buttonFunctions(value, 7);
    }
});

button8.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (sys8 && value === 1) {
        sys8 = false;
        setTimeout(function(){
            sys8 = true;
        }, 1000);
        buttonFunctions(value, 8);
    }
});

button9.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (sys9 && value === 1) {
        sys9 = false;
        setTimeout(function(){
            sys9 = true;
        }, 1000);
        buttonFunctions(value, 9);
    }
});

function allModes() {
    if (playMode || recordMode || stopMode) {
        return true;
    }
}

buttonPlay.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (value === 1 && !allModes() && sysPlay) {
        sysPlay = false;
        setTimeout(function(){
            sysPlay = true;
        }, 500);
        blinkHelper.blinkStart(ledPlay);
        playMode = true;
    }
    else if (value === 1 && playMode && sysPlay) {
        sysPlay = false;
        setTimeout(function(){
            sysPlay = true;
        }, 500);
        blinkHelper.blinkEnd(ledPlay);
        playMode = false;
    };
});

buttonStop.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (value === 1 && !allModes() && sysStop) {
        sysStop = false;
        setTimeout(function(){
            sysStop = true;
        }, 500);
        blinkHelper.blinkStart(ledStop);
        stopMode = true;
    }
    else if (value === 1 && stopMode && sysStop) {
        sysStop = false;
        setTimeout(function(){
            sysStop = true;
        }, 500);
        blinkHelper.blinkEnd(ledStop);
        stopMode = false;
    };
});

buttonRecord.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (value === 1 && !allModes() && sysRecord) {
        sysRecord = false;
        setTimeout(function(){
            sysRecord = true;
        }, 500);
        blinkHelper.blinkStart(ledRecord);
        httpHelper.getS(ledsFunction);
        //blinkHelper.blinkSpecificLedsStart(input);
        recordMode = true;
    }
    else if (value === 1 && recordMode && sysRecord) {
        sysRecord = false;
        setTimeout(function(){
            sysRecord = true;
        }, 500);
        blinkHelper.blinkEnd(ledRecord);
        blinkHelper.blinkEndLeds();
        recordMode = false;
    };
});

process.on('SIGINT', _ => {
    led1.unexport();
    led2.unexport();
    led3.unexport();
    led4.unexport();
    led5.unexport();
    led6.unexport();
    led7.unexport();
    led8.unexport();
    led9.unexport();
    ledStop.unexport();
    ledPlay.unexport();
    ledRecord.unexport();

    button1.unexport();
    button2.unexport();
    button3.unexport();
    button4.unexport();
    button5.unexport();
    button6.unexport();
    button7.unexport();
    button8.unexport();
    button9.unexport();
    buttonStop.unexport();
    buttonPlay.unexport();
    buttonRecord.unexport();
});

fan.writeSync(1);

//looper.loopInit(ledsAll);

console.log('End of node file');