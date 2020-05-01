const Gpio = require('onoff').Gpio;
const blinkHelper = require('./src/classes/blinkHelper');
const httpHelper = require('./src/classes/httpHelper');

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
        console.log('record ' + x);
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
    buttonFunctions(value, 1);
});

button2.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 2);
});

button3.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 3);
});

button4.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 4);
});

button5.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 5);
});

button6.watch((err, value) => {
    if (err) {
        throw err;
    }
    if (sys6) {
        sys6 = false;
        setTimeout(function(){ sys6 = true; console.log('end sys......')}, 1000);
        //delaySysTime(sys6);
        buttonFunctions(value, 6);
    }
});

button7.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 7);
});

button8.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 8);
});

button9.watch((err, value) => {
    if (err) {
        throw err;
    }
    buttonFunctions(value, 9);
});

function delaySysTime(sys) {
    //sys = false;
    setTimeout(function(){
        sys = true;
    }, 1000);
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
    if (value === 1 && !allModes() && sysPlay) {
        sysPlay = false;
        delaySysTime(sysPlay);
        blinkHelper.blinkStart(ledPlay);
        playMode = true;
    }
    else if (value === 1 && playMode && sysPlay) {
        sysPlay = false;
        delaySysTime(sysPlay);
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
        delaySysTime(sysStop);
        blinkHelper.blinkStart(ledStop);
        stopMode = true;
    }
    else if (value === 1 && stopMode && sysStop) {
        sysStop = false;
        delaySysTime(sysStop);
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
        delaySysTime(sysRecord);
        blinkHelper.blinkStart(ledRecord);
        recordMode = true;
    }
    else if (value === 1 && recordMode && sysRecord) {
        sysRecord = false;
        delaySysTime(sysRecord);
        blinkHelper.blinkEnd(ledRecord);
        recordMode = false;
    };
});



/*

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
*/


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