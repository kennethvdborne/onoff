const url = 'http://169.254.198.144:8080/';
const fetch = require('node-fetch');
const blinkHelper = require('./blinkHelper');

module.exports = {

    recordScene : function(led, button, ledsFunction) {

        console.log('recordfromhhhtp');

        (fetch(url + '/api/recordscenebis/' + button))
            .then(res => res.text())
            .then(function (res) {
                if (!res){
                    console.log(res);
                }
                else console.log(res);
                blinkHelper.blinkConfirm(led, ledsFunction);
            })
        
    },

    playScene : function (button) {
        console.log('playfromhhhtp');
        fetch(url + '/api/playscene/' + button);
    },

    getButtons: function(leds, mode){
        fetch(url + 'api/getbuttons')
            .then(function(response){
                return response.json();
            })
            .then(function(json){
                blinkHelper.blinkSpecificLedsStart(json, leds, mode);
            });
    },



}