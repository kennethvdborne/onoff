var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = {

    http : function(req) {

        var request = new XMLHttpRequest();
        console.log('testetetetetette')

        request.open('GET', 'http://localhost:8080/' + '/api/playscene/0eb672ee-b7f8-485c-bcb9-774497f5f0b7', true);
        request.onload = function () {
            console.log("worked............");
        }
        console.log("busy...........")

        request.send();
    }
}