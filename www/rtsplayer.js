var exec = require('cordova/exec');
var pluginName = 'rtsPlayer';


function rtsPlayer() {}


rtsPlayer.prototype.watchVideo = function(moviePath, success, error) {
    exec(success, error, "rtsplayer", "watchVideo", [moviePath]);
};

module.exports = new rtsPlayer();
