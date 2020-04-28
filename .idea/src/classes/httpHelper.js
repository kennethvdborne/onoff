var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class HttpHelper {

    constructor(url) {
        this.url = url;
        XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    }

    //TODO record,play,pause,...

    method() {
        request.open('GET', url + '/api/playscene/0eb672ee-b7f8-485c-bcb9-774497f5f0b7', true);
        request.onload = function() {
            console.log("worked............");
        }
        console.log("busy...........")

        request.send();
    }



}

var a = new HttpHelper();

module.exports = {HttpHelper: HttpHelper};