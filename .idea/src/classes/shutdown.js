// shutdown.js

// Require child_process
var exec = require('child_process').exec;

// Create shutdown function
function shutdown(callback){
    exec('shutdown now', function(error, stdout, stderr){ callback(stdout); });
}

module.exports.shutdown = shutdown;