var exec = require('cordova/exec');
var pluginName = 'VideoEditor';


function rtsPlayer() {}


rtsPlayer.prototype.watchVideo = function(moviePath, success, error) {
    exec(success, error, "rtsplayer", "watchVideo", [moviePath]);
};

rtsPlayer.prototype.watch = function(moviePath, user, password, success, error) {
	exec(success, error, "rtsplayer", "watch", [moviePath, user, password]);
};

module.exports = new VideoEditor();
