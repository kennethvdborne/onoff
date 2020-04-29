const Gpio = require('onoff').Gpio;
const blinkHelper = require('./src/classes/blinkHelper');

var debounceTime = 2000;
var recordMode = false;
var playMode = false;
var stopMode = false;

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
const button1 = new Gpio(16, 'in', 'both', 'rising', {debounceTimeout: debounceTime});
const button2 = new Gpio(19, 'in', 'both','rising', {debounceTimeout: debounceTime});
const button3 = new Gpio(13, 'in', 'both', 'rising', {debounceTimeout: debounceTime});
const button4 = new Gpio(12, 'in', 'both', 'rising', {debounceTimeout: debounceTime});
const button5 = new Gpio(6, 'in', 'both', 'rising', {debounceTimeout: debounceTime});
const button6 = new Gpio(5, 'in', 'both', 'rising', {debounceTimeout: debounceTime});
const button7= new Gpio(8, 'in', 'both', 'rising', {debounceTimeout: debounceTime});
const button8 = new Gpio(0, 'in', 'both', 'rising', {debounceTimeout: debounceTime});
const button9 = new Gpio(7, 'in', 'both', 'rising', {debounceTimeout: debounceTime});
const buttonPlay = new Gpio(21, 'in', 'both', 'rising', {debounceTimeout: debounceTime});
const buttonStop = new Gpio(20, 'in', 'both', 'rising', {debounceTimeout: debounceTime});
const buttonRecord = new Gpio(26, 'in', 'both', 'rising', {debounceTimeout: debounceTime});


//Watch Output
button1.watch((err, value) => {
    if (value === 1) {
        blinkHelper.blinkStart(led1);
    }

});
button2.watch((err, value) => blinkHelper.blinkEnd(led1));
button3.watch((err, value) => led3.writeSync(value));
button4.watch((err, value) => led4.writeSync(value));
button5.watch((err, value) => led5.writeSync(value));
button6.watch((err, value) => led6.writeSync(value));
button7.watch((err, value) => led7.writeSync(value));
button8.watch((err, value) => led8.writeSync(value));
button9.watch((err, value) => led9.writeSync(value));

buttonPlay.watch((err, value) => {
    if (err) {
        throw err;
    }
    else if (value === 1) {
        blinkHelper.blinkStart(ledPlay);
        playMode = !playMode;
        console.log("Play");
        console.log(playMode.valueOf());
    }
});

buttonStop.watch((err, value) => {
    if (err) {
        throw err;
    }
    else if (value === 1) {
        blinkHelper.blinkStart(ledStop);
        stopMode = !stopMode;
        console.log("Stop");
        console.log(stopMode.valueOf());
    }
});

buttonRecord.watch((err, value) => {
    if (err) {
        throw err;
    }
    else if (value === 1) {
        blinkHelper.blinkStart(ledRecord);
        recordMode = !recordMode;
        console.log("Record");
        console.log(recordMode.valueOf());
    }
});

//setTimeout(endBlink(), 5000); //stop blinking after 5 seconds









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
    ledStart.unexport();
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
    buttonStart.unexport();
    buttonRecord.unexport();
});

console.log('End of node file');