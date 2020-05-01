function loop (leds) {
    console.log('Starting loop.....')
    //var i = 1;
    myLoop();

    function myLoop() {
        setTimeout(function() {
            for (i = 0; i < leds.length; i++) {
                leds[i].writeSync(1);
                if(i > 1) {
                    j = i-2;
                    leds[j].writeSync(0);
                }
                myLoop();
            }
        }, 500)
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

