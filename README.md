# rtsplayer
a rtsp player using FFMpeg and ImageView for Dride-App.


## Install

```cordova plugin add https://github.com/dride/cordova-dride-rtsp-player```

Execute the compile.sh inside the Plugins folder

Now you are ready to go

## Using

``` javascript
cordova.plugins.rtsplayer.watchVideo("rtsp://192.168.1.254/xxx.mov", callbackSucces, callbackError);
```
