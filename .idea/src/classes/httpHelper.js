const url = 'http://169.254.198.144:8080/';
const fetch = require('node-fetch');
const b = require('./blinkHelper');

module.exports = {

    recordScene : function(button) {

        console.log('recordfromhhhtp');

        fetch(url + '/api/recordscenebis/' + button);
        
    },

    playScene : function (button) {
        console.log('playfromhhhtp');
        fetch(url + '/api/playscene/' + button);
    },

    getButtons: function(leds){
        fetch(url + 'api/getbuttons')
            .then(function(response){
                return response.json();
            })
            .then(function(json){
                b.blinkSpecificLedsStart(json, leds);
            });
    },

    getK: function(leds){
        fetch(url + 'api/getbuttons')
            //.then(res => res.json())é
            //.then(json => console.log(json))
            .then(function(response){
                return response.json();
            })
            .then(function(json){
                console.log(json);
                b.blinkSpecificKLedsStart(json, leds);
            });
    },

    getTest: function (){
        var f = fetch(url + 'api/getbuttons')
            //.then(res => res.json())é
            //.then(json => console.log(json))
            .then(function(response){
                return response.json();
            })
            .then(function(json){
                //console.log(json);
                return json;
                //b.blinkSpecificKLedsStart(json, leds);
            });

        //return json;

    },

    getTest2: function(){
        return getTest();
    }


}