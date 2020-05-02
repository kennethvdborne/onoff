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

    getButtonsWithScene: async function() {

        let obj;

        var response = await fetch(url + 'api/getbuttonswithscene')
            //.then(res => res.json())
            //.then(json => obj = json)
            //.then(json => console.log(json));
        
        obj = await response.text();
        console.log(obj);
        return obj;

    },

    getButtonsWithoutScene: async function() {
        console.log('started .. .. .. ')

        let obj;

        var response = await fetch(url + 'api/getbuttonswithoutscene')
            //.then(res => res.json())
            //.then(json => obj = json)
            //.then(json => console.log(json));
        
        obj = await response.text();
        console.log(obj);
        return obj;
    },

    getS: function(leds){
        fetch(url + 'api/getbuttons')
            //.then(res => res.json())é
            //.then(json => console.log(json))
            .then(function(response){
                return response.json();
            })
            .then(function(json){
                console.log(json);
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

    getTest: async function () {
        const response = await fetch(url + 'api/getbuttons');
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
        const body = await response.json();
        return body;

    },


}