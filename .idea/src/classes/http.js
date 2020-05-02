const request = require('request');

const url = 'http://169.254.198.144:8080/';

let options = {json: true};



function test(){
    request((url + 'api/getbuttons'), options, (error, res, body) => {
        if (error) {
            return  console.log(error)
        };

        if (!error && res.statusCode == 200) {
            return body;
            // do something with JSON, using the 'body' variable
        };
    });
}



module.exports.test = test;