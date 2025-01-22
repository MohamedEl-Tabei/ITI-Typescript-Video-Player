class VideoPlayer {
    constructor(container, src, width) {
        var _a;
        this.container = container;
        this.src = src;
        this.width = width;
        this.createVideoContainer = () => {
            let videoContainer = document.createElement("div");
            videoContainer.style.position = "relative";
            return videoContainer;
        };
        this.createVideo = () => {
            let video = document.createElement("video");
            video.setAttribute("id", "myVideo123");
            video.setAttribute("width", this.width);
            // video.controls = true;
            video.innerHTML = `
            <source src="${this.src}" type="video/mp4" />
        `;
            return video;
        };
        this.createControlContainer = () => {
            let controlContainer = document.createElement("div");
            controlContainer.style.position = "absolute";
            controlContainer.style.width = "100%";
            controlContainer.style.height = "100%";
            controlContainer.style.top = "0";
            controlContainer.style.display = "flex";
            controlContainer.style.alignItems = "end";
            return controlContainer;
        };
        this.createControl = () => {
            let control = document.createElement("div");
            control.style.height = "80px";
            control.style.padding = "0px 10px";
            control.style.width = "100%";
            control.innerHTML = `
        <input type="range" value=0 style="width:100%;height:3px" id="timeRange"/>
        <div style="width:100%;display:flex; align-items:center;padding:10px" >
          <img src="svgs/play.svg" style="width:35px;cursor:pointer;margin:auto" id="playToggle"/>
        </div>
    `;
            return control;
        };
        this.createLoader = () => {
            let loader = this.createControlContainer();
            loader.style.background = "black";
            loader.innerHTML = `
    <img src="svgs/spinner.svg" style="width:50px;margin:auto ;animation: spin 2s linear infinite;" />
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>`;
            loader.style.display = "none";
            loader.id = "loader";
            return loader;
        };
        this.addEvents = () => {
            let controlContainer = document.getElementById("controlContainer");
            let timeRange = document.querySelector("input[id='timeRange']");
            let video = document.querySelector("video[id='myVideo123']");
            let playToggle = document.querySelector("img[id='playToggle']");
            let loader = document.getElementById("loader");
            video === null || video === void 0 ? void 0 : video.addEventListener("loadedmetadata", function () {
                timeRange === null || timeRange === void 0 ? void 0 : timeRange.setAttribute("max", `${video === null || video === void 0 ? void 0 : video.duration}`);
            });
            video === null || video === void 0 ? void 0 : video.addEventListener("timeupdate", function () {
                timeRange === null || timeRange === void 0 ? void 0 : timeRange.setAttribute("value", `${this.currentTime}`);
            });
            video === null || video === void 0 ? void 0 : video.addEventListener("play", () => {
                playToggle === null || playToggle === void 0 ? void 0 : playToggle.setAttribute("src", playToggle.src.replace("play", "pause"));
            });
            video === null || video === void 0 ? void 0 : video.addEventListener("pause", () => {
                playToggle === null || playToggle === void 0 ? void 0 : playToggle.setAttribute("src", playToggle.src.replace("pause", "play"));
            });
            timeRange === null || timeRange === void 0 ? void 0 : timeRange.addEventListener("input", function () {
                if (video === null || video === void 0 ? void 0 : video.currentTime)
                    video.currentTime = Number(this.value);
            });
            playToggle === null || playToggle === void 0 ? void 0 : playToggle.addEventListener("click", function () {
                if (this.src.includes("play")) {
                    video === null || video === void 0 ? void 0 : video.play();
                }
                else {
                    video === null || video === void 0 ? void 0 : video.pause();
                }
            });
            video === null || video === void 0 ? void 0 : video.addEventListener("waiting", () => loader === null || loader === void 0 ? void 0 : loader.setAttribute("style", "position: absolute; width: 100%; height: 100%; top: 0px; display: flex; align-items: end; "));
            video === null || video === void 0 ? void 0 : video.addEventListener("playing", () => loader === null || loader === void 0 ? void 0 : loader.setAttribute("style", "display:none"));
            controlContainer === null || controlContainer === void 0 ? void 0 : controlContainer.addEventListener("mouseout", function () {
                this.style.opacity = "0";
            });
            controlContainer === null || controlContainer === void 0 ? void 0 : controlContainer.addEventListener("mouseover", function () {
                this.style.opacity = "1";
            });
        };
        let startContainer = this.createControlContainer();
        let controlContainer = this.createControlContainer();
        let video = this.createVideo();
        let videoContainer = this.createVideoContainer();
        let control = this.createControl();
        let loader = this.createLoader();
        startContainer.style.background = "black";
        startContainer.innerHTML = `<img src="svgs/play.svg" style="width:50px;cursor:pointer;margin:auto" id="playToggle"/>`;
        startContainer.addEventListener("click", () => {
            startContainer.style.display = "none";
            video.play();
        });
        controlContainer.id = "controlContainer";
        controlContainer.append(control);
        videoContainer.append(video);
        videoContainer.append(controlContainer);
        videoContainer.append(startContainer);
        videoContainer.append(loader);
        (_a = document.getElementById(this.container)) === null || _a === void 0 ? void 0 : _a.append(videoContainer);
        this.addEvents();
    }
}
export default VideoPlayer;
