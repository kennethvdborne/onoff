const Gpio = require('onoff').Gpio;

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

const fan = new Gpio(3, 'out');

const button1 = new Gpio(16, 'in', 'both');
const button2 = new Gpio(19, 'in', 'both');
const button3 = new Gpio(13, 'in', 'both');
const button4 = new Gpio(12, 'in', 'both');
const button5 = new Gpio(6, 'in', 'both');
const button6 = new Gpio(5, 'in', 'both');
const button7= new Gpio(8, 'in', 'both');
const button8 = new Gpio(0, 'in', 'both');
const button9 = new Gpio(7, 'in', 'both');
const buttonStart = new Gpio(21, 'in', 'both');
const buttonStop = new Gpio(20, 'in', 'both');
const buttonRecord = new Gpio(26, 'in', 'both');

button1.watch((err, value) => led1.writeSync(value));
button2.watch((err, value) => led2.writeSync(value));
button3.watch((err, value) => led3.writeSync(value));
button4.watch((err, value) => led4.writeSync(value));
button5.watch((err, value) => led5.writeSync(value));
button6.watch((err, value) => led6.writeSync(value));
button7.watch((err, value) => led7.writeSync(value));
button8.watch((err, value) => led8.writeSync(value));
button9.watch((err, value) => {led9.writeSync(value);
    console.log(value + " *** " + value.toString());
});
buttonStart.watch((err, value) => ledStart.writeSync(value));
buttonStop.watch((err, value) => ledStop.writeSync(value));
buttonRecord.watch((err, value) => ledRecord.writeSync(value));

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

function startup() {
    try {
        async function loop(led) {
            led.write(1);
            await sleep(1000);
            led.write(0);
        }
        
        leds.forEach(led => loop(led));
    }
    catch(err) {
        //Unhandled
    }
}

startup();

console.log('End of node file');