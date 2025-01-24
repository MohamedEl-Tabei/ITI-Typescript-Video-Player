import VideoPlayerAbstract from "./abstract.js";
class VideoPlayer extends VideoPlayerAbstract {
  constructor(container: string, src: string, width: string) {
    super(src, container, width);
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
    document.getElementById(this.container)?.append(videoContainer);
    this.addEvents();
  }
  protected createVideoContainer = () => {
    let videoContainer = document.createElement("div");
    videoContainer.style.position = "relative";
    return videoContainer;
  };
  protected createVideo = () => {
    let video = document.createElement("video");
    video.setAttribute("id", "myVideo123");
    video.setAttribute("width", this.width);
    // video.controls = true;
    video.innerHTML = `
            <source src="${this.src}" type="video/mp4" />
        `;
    return video;
  };
  protected createControlContainer = () => {
    let controlContainer = document.createElement("div");
    controlContainer.style.position = "absolute";
    controlContainer.style.width = "100%";
    controlContainer.style.height = "100%";
    controlContainer.style.top = "0";
    controlContainer.style.display = "flex";
    controlContainer.style.alignItems = "end";
    return controlContainer;
  };
  protected createControl = () => {
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
  protected createLoader = () => {
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
  protected addEvents = () => {
    let controlContainer = document.getElementById("controlContainer");
    let timeRange: HTMLInputElement | null = document.querySelector(
      "input[id='timeRange']"
    );
    let video: HTMLVideoElement | null = document.querySelector(
      "video[id='myVideo123']"
    );
    let playToggle: HTMLImageElement | null = document.querySelector(
      "img[id='playToggle']"
    );
    let durationTime: HTMLElement | null =
      document.getElementById("durationTime");
    let currentTime: HTMLElement | null =
      document.getElementById("currentTime");
    let loader = document.getElementById("loader");
    video?.addEventListener("loadedmetadata", () => {
      timeRange?.setAttribute("max", `${video?.duration}`);
      if (durationTime) durationTime.innerHTML = this.getTime(video.duration);
    });
    video?.addEventListener("timeupdate", () => {
      if (timeRange) timeRange.value = `${video.currentTime}`;
      if (currentTime) currentTime.innerHTML = this.getTime(video.currentTime);
    });
    video?.addEventListener("play", () => {
      playToggle?.setAttribute("src", playToggle.src.replace("play", "pause"));
    });
    video?.addEventListener("pause", () => {
      playToggle?.setAttribute("src", playToggle.src.replace("pause", "play"));
    });
    timeRange?.addEventListener("input", function () {
      if (video?.currentTime) video.currentTime = Number(this.value);
    });
    playToggle?.addEventListener("click", function () {
      if (this.src.includes("play")) {
        video?.play();
      } else {
        video?.pause();
      }
    });
    video?.addEventListener("waiting", () =>
      loader?.setAttribute(
        "style",
        "position: absolute; width: 100%; height: 100%; top: 0px; display: flex; align-items: end; "
      )
    );
    video?.addEventListener("playing", () =>
      loader?.setAttribute("style", "display:none")
    );
    controlContainer?.addEventListener("mouseout", function () {
      this.style.opacity = "0";
    });
    controlContainer?.addEventListener("mouseover", function () {
      this.style.opacity = "1";
    });
    //hover
    playToggle?.addEventListener(
      "mouseover",
      () => (playToggle.style.opacity = "1")
    );
    playToggle?.addEventListener(
      "mouseout",
      () => (playToggle.style.opacity = ".8")
    );
  };
  protected getTime(time: number) {
    let h = time / (60 * 60);
    time = time % (60 * 60);
    let m = time / 60;
    let s = time % 60;

    return `${h < 10 ? "0" + h.toFixed() : h.toFixed()}:${
      m < 10 ? "0" + m.toFixed() : m.toFixed()
    }:${s < 10 ? "0" + s.toFixed() : s.toFixed()}`;
  }
}

export default VideoPlayer;
