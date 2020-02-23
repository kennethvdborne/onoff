const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');
const button = new Gpio(4, 'in', 'both');

button.watch(
    (err, value) => led.writeSync(value),
    console.log('button pressed')
);

console.log('End of node file');