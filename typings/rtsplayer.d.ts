/**
 * The rtsplayer object represents a player for live stream (RTSP).
 */
interface rtsPlayer {
    /**
    * The rtsPlayer.watchVideo method will open a new view with a live stream player
    * @param moviePath remote url to stream
    * @param onSuccess Success callback function invoked when user closes the stream window
    * @param onError Error callback function, invoked when an error occurs.
    */
    watchVideo(
		moviePath: string,
		onSuccess: () => void,
        onError: (error: any) => void): void;

}

declare var rtsPlayer: rtsPlayer;