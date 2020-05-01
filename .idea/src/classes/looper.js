function loop (leds) {
    console.log('Starting loop.....')
    var length = leds.length;
    i = 0;
    myLoop();

    function myLoop() {
        setTimeout(function() {
            leds[i].writeSync(1);
            i++;
            if (i < length) {
                myLoop();
            }
        }, 1000)

        if(i > 1) {
            setTimeout(function() {
                leds[(i-2)].writeSync(0);
            }, 800)
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

