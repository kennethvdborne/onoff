function loop (leds) {
    console.log('Starting loop.....')
    var length = leds.length + 3;
    i = 0;
    myLoop();

    function myLoop() {
        if(i < leds.length) {
            setTimeout(function () {
                leds[i].writeSync(1);
                i++;
                if (i < length) {
                    myLoop();
                }
            }, 1000)
        }

        if(i > 2) {
            console.log(i);
            setTimeout(function() {
                leds[(i-3)].writeSync(0);
            }, 800)

            if(i >= leds.length && i < length){
                myLoop();
                i++;
            }
        }

    }
}

module.exports.loop = loop;


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

