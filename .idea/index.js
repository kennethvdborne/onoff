const Gpio = require('onoff').Gpio;
const blinkHelper = require('./src/classes/blinkHelper');
const httpHelper = require('./src/classes/httpHelper');

var recordMode = false;
var playMode = false;
var stopMode = false;

//DelayTime for buttons
var sysTime1 = 0;
var sysTime2 = 0;
var sysTime3 = 0;
var sysTime4 = 0;
var sysTime5 = 0;
var sysTime6 = 0;
var sysTime7 = 0;
var sysTime8 = 0;
var sysTime9 = 0;
var sysTimePlay = 0;
var sysTimeStop = 0;
var sysTimeRecord = 0;

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

function buttonFunctions(value, x, sysTime) {
    if (value === 1 && recordMode && sysTime === 0) {
        delaySysTime(sysTime);
        console.log('record ' + x);
    }
    if (value === 1 && playMode && sysTime === 0) {
        delaySysTime(sysTime);
        console.log('play ' + x);
    }
    if (value === 1 && stopMode && sysTime === 0) {
        delaySysTime(sysTime);
        console.log('stop ' + x);
    }
}

//Watch Output
button1.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 1, sysTime1);
});

button2.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 2, sysTime2);
});

button3.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 3, sysTime3);
});

button4.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 4, sysTime4);
});

button5.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 5, sysTime5);
});

button6.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 6, sysTime6);
});

button7.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 7, sysTime7);
});

button8.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 8, sysTime8);
});

button9.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 9, sysTime9);
});

function delaySysTime(sysTime) {
    sysTime = 1;
    setTimeout(function(){
        sysTime = 0;
    }, 300);
}

function allModes() {
    if (playMode || recordMode || stopMode) {
        return true;
    }
}

buttonPlay.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (value === 1 && !allModes() && sysTimePlay === 0) {
        delaySysTime(sysTimePlay);
        blinkHelper.blinkStart(ledPlay);
        playMode = true;
    }
    else if (value === 1 && playMode && sysTimePlay === 0) {
        delaySysTime(sysTimePlay);
        blinkHelper.blinkEnd(ledPlay);
        playMode = false;
    };
});

buttonStop.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (value === 1 && !allModes() && sysTimeStop === 0) {
        delaySysTime(sysTimeStop);
        blinkHelper.blinkStart(ledStop);
        stopMode = true;
    }
    else if (value === 1 && stopMode && sysTimeStop === 0) {
        delaySysTime(sysTimeStop);
        blinkHelper.blinkEnd(ledStop);
        stopMode = false;
    };
});

buttonRecord.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (value === 1 && !allModes() && sysTimeRecord === 0) {
        delaySysTime(sysTimeRecord);
        blinkHelper.blinkStart(ledRecord);
        recordMode = true;
    }
    else if (value === 1 && recordMode && sysTimeRecord === 0) {
        delaySysTime(sysTimeRecord);
        blinkHelper.blinkEnd(ledRecord);
        recordMode = false;
    };
});





var i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
        console.log('hello');   //  your code here
        i++;                    //  increment the counter
        if (i < 10) {           //  if the counter < 10, call the loop function
            myLoop();             //  ..  again which will trigger another
        }                       //  ..  setTimeout()
    }, 3000)
}

fan.writeSync(1);


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

console.log('End of node file');