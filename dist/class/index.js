import VideoPlayerAbstract from "./abstract.js";
class VideoPlayer extends VideoPlayerAbstract {
    constructor(container, src, width) {
        var _a;
        super(src, container, width);
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
        <div style="display:flex;justify-content:space-between;align-items:center;color:white">
          <small id="currentTime">00:00:00</small>
          <input type="range"  value=0 style="width:80%;height:3px;accent-color:white;" id="timeRange"/>
          <small id="durationTime" >00:00:00</small>
        </div>
        <div style="width:100%;display:flex; align-items:center;padding:10px" >
          <img src="svgs/play.svg" style="width:35px;cursor:pointer;margin:auto ;opacity:.8" id="playToggle"/>
        </div>
    `;
            return control;
        };
        this.createLoader = () => {
            let loader = this.createControlContainer();
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
            let durationTime = document.getElementById("durationTime");
            let currentTime = document.getElementById("currentTime");
            let loader = document.getElementById("loader");
            video === null || video === void 0 ? void 0 : video.addEventListener("loadedmetadata", () => {
                timeRange === null || timeRange === void 0 ? void 0 : timeRange.setAttribute("max", `${video === null || video === void 0 ? void 0 : video.duration}`);
                if (durationTime)
                    durationTime.innerHTML = this.getTime(video.duration);
            });
            video === null || video === void 0 ? void 0 : video.addEventListener("timeupdate", () => {
                if (timeRange)
                    timeRange.value = `${video.currentTime}`;
                if (currentTime)
                    currentTime.innerHTML = this.getTime(video.currentTime);
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
            //hover
            playToggle === null || playToggle === void 0 ? void 0 : playToggle.addEventListener("mouseover", () => (playToggle.style.opacity = "1"));
            playToggle === null || playToggle === void 0 ? void 0 : playToggle.addEventListener("mouseout", () => (playToggle.style.opacity = ".8"));
        };
        let startContainer = this.createControlContainer();
        let controlContainer = this.createControlContainer();
        let video = this.createVideo();
        let videoContainer = this.createVideoContainer();
        let control = this.createControl();
        let loader = this.createLoader();
        startContainer.style.background = "black";
        startContainer.innerHTML = `<img src="svgs/play.svg" style="width:80px;cursor:pointer;margin:auto" id="playToggle"/>`;
        startContainer.addEventListener("click", () => {
            startContainer.style.display = "none";
            video.play();
        });
        controlContainer.id = "controlContainer";
        control.style.backgroundImage =
            "linear-gradient(180deg, #ffffff00,rgba(0, 0, 0, 0.46), black)";
        controlContainer.append(control);
        videoContainer.append(video);
        videoContainer.append(controlContainer);
        videoContainer.append(startContainer);
        videoContainer.append(loader);
        (_a = document.getElementById(this.container)) === null || _a === void 0 ? void 0 : _a.append(videoContainer);
        this.addEvents();
    }
    getTime(time) {
        let h = time / (60 * 60);
        time = time % (60 * 60);
        let m = time / 60;
        let s = time % 60;
        return `${h < 10 ? "0" + h.toFixed() : h.toFixed()}:${m < 10 ? "0" + m.toFixed() : m.toFixed()}:${s < 10 ? "0" + s.toFixed() : s.toFixed()}`;
    }
}
export default VideoPlayer;
