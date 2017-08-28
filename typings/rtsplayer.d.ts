/**
 * The rtsplayer object represents a player for live stream (RTSP).
 */
interface rtsPlayer {
    /**
    * The VideoEditor.watchVideo method executes asynchronously, encoding a video at a location
    * and returning the full path. Options can be set to change how the video is encoded. The resulting string 
    * is passed to the onSuccess callback function specified by the onSuccess parameter.
    * @param onSuccess Success callback function invoked with the full path of the video returned from successly saving the video
    * @param onError Error callback function, invoked when an error occurs.
    * @param transcodeOptions Transcode options that are required to reencode or change the coding of the video.
    */
    watchVideo(
		moviePath: string,
		onSuccess: () => void,
        onError: (error: any) => void): void;

}

declare var VideoEditor: VideoEditor;