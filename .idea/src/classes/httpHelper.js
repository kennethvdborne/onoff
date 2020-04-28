var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function http() {
    var request = new XMLHttpRequest();

    request.open('GET', url + '/api/playscene/0eb672ee-b7f8-485c-bcb9-774497f5f0b7', true);
    request.onload = function() {
        console.log("worked............");
    }
    console.log("busy...........")

    request.send();
}