const url = 'http://localhost:8080/';
const fetch = require('node-fetch');
const blinkHelper = require('./blinkHelper');
const main = require('../../index');

function recordScene(led, button, ledRecord) {

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
}

function recordSceneMultiple(led, button, ledRecord) {

    console.log('recordfromhhhtp');

    (fetch(url + '/api/recordSceneMultipleFrames/' + button))
        .then(res => res.text())
        .then(function (res) {
            if (res == 'true'){
                console.log('rec started');
                led.writeSync(1);
            }
            else {
                blinkHelper.blinkStart(ledRecord);
                getButtons(ledsFunction, 'Record');
            }
        })
}

function stopRecording(led, ledRecord) {

    console.log('stoprecording');

    (fetch(url + '/api/stopRecording'))
        .then(res => res.text())
        .then(function (res) {
            if (res == 'true'){
                console.log('true recording');
                led.writeSync(0);
                blinkHelper.blinkConfirm(led);
            }
            else {
                console.log('false recording');
                blinkHelper.blinkFastStart(ledRecord);
                getButtons(ledsFunction, 'Record');
            }
        })
}

function playScene(button) {
    fetch(url + '/api/playscene/' + button);
}

function getButtons(leds, mode){
    fetch(url + 'api/getbuttons')
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            blinkHelper.blinkSpecificLedsStart(json, leds, mode);
            main.setButtonsInUse(json);
        });
}

module.exports.recordScene = recordScene;
module.exports.recordSceneMultiple = recordSceneMultiple;
module.exports.stopRecording = stopRecording;
module.exports.playScene = playScene;
module.exports.getButtons = getButtons;

