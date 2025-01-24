import VideoPlayerAbstract from "./abstract.js";
class VideoPlayer extends VideoPlayerAbstract {
    constructor(container, src, width, theme) {
        var _a, _b, _c, _d, _e;
        let myTheme = {
            color: "white",
            backgroundColor: "black",
            accent: "white",
        };
        super(src, container, width, Object.assign(Object.assign({}, myTheme), theme));
        this.count = 0;
        this.createVideoContainer = () => {
            let videoContainer = document.createElement("div");
            videoContainer.style.position = "relative";
            return videoContainer;
        };
        this.createVideo = () => {
            let video = document.createElement("video");
            video.setAttribute("id", `myVideo123${this.count}`);
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
          <small id="currentTime${this.count}">00:00:00</small>
          <input type="range"  value=0 style="width:80%;height:3px;accent-color:${this.theme.color};" id="timeRange${this.count}"/>
          <small id="durationTime${this.count}" >00:00:00</small>
        </div>
        <div style="width:100%;display:flex; align-items:center;padding:10px" >
          <div style="width:35px;cursor:pointer;margin:auto ;opacity:.8"  id="playToggle${this.count}">${this.icons.pause}</div>
        </div>
    `;
            return control;
        };
        this.createLoader = () => {
            let loader = this.createControlContainer();
            loader.innerHTML = `
    ${this.icons.spinner}
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>`;
            loader.style.display = "none";
            loader.id = `loader${this.count}`;
            return loader;
        };
        this.addEvents = () => {
            let controlContainer = document.getElementById(`controlContainer${this.count}`);
            let timeRange = document.querySelector(`input[id='timeRange${this.count}']`);
            let video = document.querySelector(`video[id='myVideo123${this.count}']`);
            let playToggle = document.querySelector(`div[id='playToggle${this.count}']`);
            let durationTime = document.getElementById(`durationTime${this.count}`);
            let currentTime = document.getElementById(`currentTime${this.count}`);
            let loader = document.getElementById(`loader${this.count}`);
            video === null || video === void 0 ? void 0 : video.addEventListener("loadedmetadata", () => {
                timeRange === null || timeRange === void 0 ? void 0 : timeRange.setAttribute("max", `${video === null || video === void 0 ? void 0 : video.duration}`);
                if (durationTime)
                    durationTime.innerHTML = this.getTime(video.duration);
            });
            video === null || video === void 0 ? void 0 : video.addEventListener("timeupdate", () => {
                if (timeRange) {
                    timeRange.value = `${video.currentTime}`;
                }
                if (currentTime)
                    currentTime.innerHTML = this.getTime(video.currentTime);
            });
            video === null || video === void 0 ? void 0 : video.addEventListener("play", () => {
                if (playToggle)
                    playToggle.innerHTML = this.icons.pause;
            });
            video === null || video === void 0 ? void 0 : video.addEventListener("pause", () => {
                if (playToggle)
                    playToggle.innerHTML = this.icons.play;
            });
            timeRange === null || timeRange === void 0 ? void 0 : timeRange.addEventListener("input", function () {
                if (video === null || video === void 0 ? void 0 : video.currentTime)
                    video.currentTime = Number(this.value);
            });
            playToggle === null || playToggle === void 0 ? void 0 : playToggle.addEventListener("click", function () {
                if (this.innerHTML.includes("play")) {
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
        this.icons = {
            pause: `<svg style="width:35px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="${(_a = this.theme) === null || _a === void 0 ? void 0 : _a.accent}" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>`,
            play: `<svg style="width:35px"   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, play Inc.--><path fill="${(_b = this.theme) === null || _b === void 0 ? void 0 : _b.accent}" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"/></svg>`,
            spinner: `<svg style="width:50px;margin:auto ;animation: spin 2s linear infinite;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="${(_c = this.theme) === null || _c === void 0 ? void 0 : _c.accent}" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>`,
        };
        this.count = VideoPlayer.count++;
        let startContainer = this.createControlContainer();
        let controlContainer = this.createControlContainer();
        let video = this.createVideo();
        let videoContainer = this.createVideoContainer();
        let control = this.createControl();
        let loader = this.createLoader();
        startContainer.style.background = "black";
        startContainer.innerHTML = `
    <div style="display:flex;justify-content:center;align-items:center;width:100%;height:100%">
      ${this.icons.play} 
    </div>`;
        startContainer.addEventListener("click", () => {
            startContainer.style.display = "none";
            video.play();
        });
        controlContainer.id = `controlContainer${this.count}`;
        control.style.backgroundImage = `linear-gradient(180deg, #ffffff00,rgba(0, 0, 0, 0.46), ${(_d = this.theme) === null || _d === void 0 ? void 0 : _d.backgroundColor})`;
        controlContainer.append(control);
        videoContainer.append(video);
        videoContainer.append(controlContainer);
        videoContainer.append(startContainer);
        videoContainer.append(loader);
        (_e = document.getElementById(this.container)) === null || _e === void 0 ? void 0 : _e.append(videoContainer);
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
VideoPlayer.count = 0;
export default VideoPlayer;
