const Gpio = require('onoff').Gpio;

var debounceTime = 100;
var recordMode = false;
var playMode = false;
var pauseMode = false;

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
const ledStart = new Gpio(11, 'out');
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
const buttonStart = new Gpio(21, 'in', 'both', 'rising', {debounceTimeout: debounceTime});
const buttonStop = new Gpio(20, 'in', 'both', 'rising', {debounceTimeout: debounceTime});
const buttonRecord = new Gpio(26, 'in', 'both', 'rising', {debounceTimeout: debounceTime});

//Watch Output
button1.watch((err, value) => blinkLED());
button2.watch((err, value) => led2.writeSync(value));
button3.watch((err, value) => led3.writeSync(value));
button4.watch((err, value) => led4.writeSync(value));
button5.watch((err, value) => led5.writeSync(value));
button6.watch((err, value) => led6.writeSync(value));
button7.watch((err, value) => led7.writeSync(value));
button8.watch((err, value) => led8.writeSync(value));
button9.watch((err, value) => led9.writeSync(value));
buttonStart.watch((err, value) => ledStart.writeSync(value));
buttonStop.watch((err, value) => ledStop.writeSync(value));
buttonRecord.watch((err, value) => ledRecord.writeSync(value));


/*
buttonStart.watch((err, value) => {
    ledStart.writeSync(value);
    http();
});
buttonStop.watch((err, value) => {
    ledStop.writeSync(value);
    fan.writeSync(0);
    myLoop();
});

const InputPiHelper = require('./src/classes/inputPiHelper').InputPiHelper;
let a = new InputPiHelper();

buttonRecord.watch((err, value) => {
    ledRecord.writeSync(value);
    fan.writeSync(1);
    if(value==1){a.method();}

});
*/
var leds = [
    ledStart,
    ledStop,
    ledRecord,
    led1,
    led2,
    led3,
    led4,
    led5,
    led6,
    led7,
    led8,
    led9
];
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function http() {
    var request = new XMLHttpRequest();

    request.open('GET', url + '/api/playscene/0eb672ee-b7f8-485c-bcb9-774497f5f0b7', true);
    request.onload = function() {
        console.log("worked............");
    }
    console.log("busy...........")

    request.send();
}

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
fan.writeSync(1);
console.log('End of node file');