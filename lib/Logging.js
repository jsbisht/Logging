/**
 * Created by WORKER on 19-04-2015.
 */
var log = console.log;
var logDir = console.dir;

var Logging = {
    enable: function() {
        console.dir = logDir;
        console.log = log;
    },
    disable: function() {
        console.dir = function() {};
        console.log = function() {};
    }
};

module.exports = Logging;
