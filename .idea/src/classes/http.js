const request = require('request');

const url = 'http://169.254.198.144:8080/';

let options = {json: true};



function test(){
    request((url + 'api/getbuttons'), options, (error, res, body) => {
        if (error) {
            return  console.log(error)
        };

        if (!error && res.statusCode == 200) {
            console.log(body);
            return body;
        };
    });
}



module.exports.test = test;