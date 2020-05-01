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

    getButtons: function() {
        console.log('started .. .. .. ')


        let obj;

        var response = fetch(url + 'api/getbuttons')
            //.then(res => res.json())
            //.then(json => console.log(json))
            //.then(json => {return json})
            //.then(json => obj = json)
            //.then(json => console.log(json));
            .then((res) => {
                status = res.status;
                return res.json()
            })
            .then((jsonData) => {
                console.log(jsonData);
                console.log(status);
            })
            .catch((err) => {
                // handle error for example
                console.error(err);
            });
        
        //return await response.text();
        //console.log(obj);
    },

    getDataFromUrl: function(resp){
        fetch(url + 'api/getbuttons')
        .then(function(data) {
            return data.json();
        }).then(function(parsed){
        resp(parsed);
    });
}

}