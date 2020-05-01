const url = 'http://169.254.198.144:8080/';
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

    getS: function(){
        fetch(url + 'api/getbuttons')
            //.then(res => res.json())
            //.then(json => console.log(json))
            .then((res) => {
                return res.json()
            });
    }


}