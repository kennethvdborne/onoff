const url = 'http://localhost:8080/';
const fetch = require('node-fetch');
const blinkHelper = require('./blinkHelper');
const main = require('../../index');

module.exports = {

    recordScene : function(led, button, ledRecord) {

        console.log('recordfromhhhtp');

        (fetch(url + '/api/recordSceneSingleFrame/' + button))
            .then(res => res.text())
            .then(function (res) {
                if (res == 'true'){
                    blinkHelper.blinkConfirm(led);
                }
                else {
                    blinkHelper.blinkStart(ledRecord);
                }
            })
    },

    recordSceneMultiple : function(led, button, ledRecord) {

        console.log('recordfromhhhtp');

        (fetch(url + '/api/recordSceneMultipleFrame/' + button))
            .then(res => res.text())
            .then(function (res) {
                if (res == 'true'){
                    blinkHelper.blinkConfirm(led);
                }
                else {
                    blinkHelper.blinkStart(ledRecord);
                }
            })
    },

    stopRecording : function(led, ledRecord) {

        console.log('stoprecording');

        (fetch(url + '/api/stopRecording'))
            .then(res => res.text())
            .then(function (res) {
                if (res == 'true'){
                    console.log('true recording');
                    blinkHelper.blinkConfirm(led);
                }
                else {
                    console.log('false recording');
                    blinkHelper.blinkFastStart(ledRecord);
                }
            })
    },

    playScene : function (button) {
        fetch(url + '/api/playscene/' + button);
    },

    getButtons: function(leds, mode){
        fetch(url + 'api/getbuttons')
            .then(function(response){
                return response.json();
            })
            .then(function(json){
                blinkHelper.blinkSpecificLedsStart(json, leds, mode);
                main.setButtonsInUse(json);
            });
    },



}