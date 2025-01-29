class VideoPlayerAbstract {
    constructor(src, container, width, skipTime, theme) {
        this.src = src;
        this.container = container;
        this.width = width;
        this.skipTime = skipTime;
        this.theme = theme;
    }
}
export default VideoPlayerAbstract;
