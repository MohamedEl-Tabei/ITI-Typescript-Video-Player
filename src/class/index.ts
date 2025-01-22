import IVideoPlayer from "../interface/index";
class VideoPlayer implements IVideoPlayer {
  constructor(
    readonly container: string,
    readonly src: string,
    readonly width: string
  ) {
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
    document.getElementById(this.container)?.append(videoContainer);
    this.addEvents();
  }
  private createVideoContainer = () => {
    let videoContainer = document.createElement("div");
    videoContainer.style.position = "relative";
    return videoContainer;
  };
  private createVideo = () => {
    let video = document.createElement("video");
    video.setAttribute("id", "myVideo123");
    video.setAttribute("width", this.width);
    // video.controls = true;
    video.innerHTML = `
            <source src="${this.src}" type="video/mp4" />
        `;
    return video;
  };
  private createControlContainer = () => {
    let controlContainer = document.createElement("div");
    controlContainer.style.position = "absolute";
    controlContainer.style.width = "100%";
    controlContainer.style.height = "100%";
    controlContainer.style.top = "0";
    controlContainer.style.display = "flex";
    controlContainer.style.alignItems = "end";
    return controlContainer;
  };
  private createControl = () => {
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
  private createLoader = () => {
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
  private addEvents = () => {
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
    let loader = document.getElementById("loader");
    video?.addEventListener("loadedmetadata", function () {
      timeRange?.setAttribute("max", `${video?.duration}`);
    });
    video?.addEventListener("timeupdate", function () {
      timeRange?.setAttribute("value", `${this.currentTime}`);
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
  };
}

export default VideoPlayer;
