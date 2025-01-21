class VideoPlayer {
    constructor(_container, _src) {
        var _a;
        this.container = _container;
        this.src = _src;
        const video = document.createElement("video");
        video.width = 400;
        video.height = 320;
        video.autoplay = true;
        video.innerHTML = `
            <source src=${this.src} type="video/mp4" />
        `;
        (_a = document.getElementById("container")) === null || _a === void 0 ? void 0 : _a.append(video);
    }
}
export default VideoPlayer;
