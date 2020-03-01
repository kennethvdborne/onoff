const Gpio = require('onoff').Gpio;
const led = new Gpio(11, 'out');
const button = new Gpio(21, 'in', 'both');

button.watch(
    (err, value) => led.writeSync(value)
);

button.watch(
    (err, value) => console.log('led blinked')
);

console.log('End of node file');