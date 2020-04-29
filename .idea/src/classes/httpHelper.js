const url = 'http://localhost:8080/';
const fetch = require('node-fetch');

module.exports = {

    recordScene : function(button) {

        fetch(url + '/api/recordscenebis/' + button);
        
    },

    playScene : function (button) {

        fetch(url + '/api/playscene/' + button);
    },

    getButtonsWithScene: async function() {

        let obj;

        var response = await fetch(url + 'api/getbuttonswithscene')
            //.then(res => res.json())
            //.then(json => obj = json)
            //.then(json => console.log(json));
        
        obj = await response.text();
        return obj;
        console.log(obj);

        

    },

    getButtonsWithoutScene: async function() {

        let obj;

        var response = await fetch(url + 'api/getbuttonswithoutscene')
            //.then(res => res.json())
            //.then(json => obj = json)
            //.then(json => console.log(json));
        
        obj = await response.text();
        return obj;
        console.log(obj);
    }
}