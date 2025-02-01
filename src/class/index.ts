import VideoPlayerAbstract from "./abstract.js";

class VideoPlayer extends VideoPlayerAbstract {
  private static count = 0;
  private count = 0;
  private icons: {
    play: string;
    spinner: string;
    pause: string;
    unMuted: string;
    muted: string;
    fullScreen: string;
    forwardStep: string;
    backStep: string;
  };
  constructor(
    container: string,
    src: string,
    width: string,
    skipTime: Number,
    theme?: {
      color?: string;
      backgroundColor?: string;
      accent?: string;
    }
  ) {
    let myTheme = {
      color: "white",
      backgroundColor: "black",
      accent: "white",
    };
    super(src, container, width, skipTime, { ...myTheme, ...theme });
    this.icons = {
      pause: `<svg style="width:2rem"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="${this.theme?.accent}" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>`,
      play: `<svg style="width:2rem"   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, play Inc.--><path fill="${this.theme?.accent}" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"/></svg>`,
      spinner: `<svg style="width:50px;margin:auto ;animation: spin 2s linear infinite;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="${this.theme?.accent}" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>`,
      unMuted: `<svg style="width:1rem"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!-- unmuted !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="${this.theme?.accent}"  d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>`,
      muted: `<svg style="width:1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="${this.theme?.accent}"   d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>`,
      fullScreen: `<svg style="width:1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  fill="${this.theme?.accent}" d="M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"/></svg>`,
      forwardStep: `<svg style="width:1rem"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="${this.theme?.accent}" d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z"/></svg>`,
      backStep: `<svg style="width:1rem"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="${this.theme?.accent}" d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 11.5 9.6 192 160z"/></svg>`,
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
    control.style.backgroundImage = `linear-gradient(180deg, #ffffff00,rgba(0, 0, 0, 0.46), ${this.theme?.backgroundColor})`;
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
    videoContainer.style.width = this.width;
    return videoContainer;
  };
  protected createVideo = () => {
    let video = document.createElement("video");
    video.setAttribute("id", `myVideo123${this.count}`);
    video.setAttribute("width", this.width);
    video.volume = 0.1;
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
    control.style.height = "3.5rem";
    control.style.padding = "0px 10px";
    control.style.width = "100%";
    control.style.display = "flex";
    control.style.flexDirection = "column";
    control.style.justifyContent = "space-between";
    control.style.paddingBottom = "8px";
    control.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;color:white">
          <small id="currentTime${this.count}">00:00:00</small>
          <input type="range"  value=0 style="width:80%;height:3px;accent-color:${this.theme.color};" id="timeRange${this.count}"/>
          <small id="durationTime${this.count}" >00:00:00</small>
        </div>
        <div style="width:100%;display:flex; align-items:center;justify-content:space-between;" >
          <div style="width:155px;display:flex;align-items:center">
            <div style="width:35px;cursor:pointer;opacity:.8"  id="volume${this.count}">${this.icons.unMuted}</div>
            <input type="range" max="1" step="0.1"  value=0.1 style="width:100px;height:3px;accent-color:${this.theme.color};" id="volumeRange${this.count}"/>
          </div>
          <div style='display:flex ;width:100px;justify-content:space-between;align-items:center'>
            <div style="cursor:pointer;opacity:.8"  id="backStep${this.count}" title="-${this.skipTime}">${this.icons.backStep}</div>
            <div style="cursor:pointer;opacity:.8"  id="playToggle${this.count}">${this.icons.pause}</div>
            <div style="cursor:pointer;opacity:.8"  id="forwardStep${this.count}" title="+${this.skipTime}">${this.icons.forwardStep}</div>
          </div>
          <div style="width:155px;display:flex;align-items:center;justify-content:end">
            <div style="width:35px;cursor:pointer;opacity:.8"  id="fullScreen${this.count}">${this.icons.fullScreen}</div>
          </div>
        </div>
    `;
    return control;
  };
  protected createLoader = () => {
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
  protected addEvents = () => {
    let controlContainer = document.getElementById(
      `controlContainer${this.count}`
    );
    let timeRange: HTMLInputElement | null = document.querySelector(
      `input[id='timeRange${this.count}']`
    );
    let video: HTMLVideoElement | null = document.querySelector(
      `video[id='myVideo123${this.count}']`
    );
    let playToggle: HTMLElement | null = document.querySelector(
      `div[id='playToggle${this.count}']`
    );
    let durationTime: HTMLElement | null = document.getElementById(
      `durationTime${this.count}`
    );
    let currentTime: HTMLElement | null = document.getElementById(
      `currentTime${this.count}`
    );
    let loader = document.getElementById(`loader${this.count}`);
    let volume = document.getElementById(`volume${this.count}`);
    let volumeRange: HTMLInputElement | null = document.querySelector(
      `input[id='volumeRange${this.count}']`
    );
    let fullScreen = document.getElementById(`fullScreen${this.count}`);
    let forwardStep = document.getElementById(`forwardStep${this.count}`);
    let backStep = document.getElementById(`backStep${this.count}`);
    video?.addEventListener("loadedmetadata", () => {
      timeRange?.setAttribute("max", `${video?.duration}`);
      if (durationTime) durationTime.innerHTML = this.getTime(video.duration);
    });
    video?.addEventListener("timeupdate", () => {
      if (timeRange) {
        timeRange.value = `${video.currentTime}`;
      }
      if (currentTime) currentTime.innerHTML = this.getTime(video.currentTime);
    });
    video?.addEventListener("play", () => {
      if (playToggle) playToggle.innerHTML = this.icons.pause;
    });
    video?.addEventListener("pause", () => {
      if (playToggle) playToggle.innerHTML = this.icons.play;
    });
    timeRange?.addEventListener("input", function () {
      if (video?.currentTime) video.currentTime = Number(this.value);
    });
    playToggle?.addEventListener("click", function () {
      if (this.innerHTML.includes("play")) {
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
    volume?.addEventListener("click", () => {
      if (volume.innerHTML.includes("unmuted")) {
        volume.innerHTML = this.icons.muted;
        if (volumeRange) volumeRange.value = "0";
        if (video) video.volume = 0;
      } else {
        volume.innerHTML = this.icons.unMuted;
        if (volumeRange) volumeRange.value = "0.1";
        if (video) video.volume = 0.1;
      }
      if (video) video.muted = !volume.innerHTML.includes("unmuted");
    });
    volumeRange?.addEventListener("input", () => {
      if (video) video.volume = Number(volumeRange.value);
      if (video?.volume == 0 && volume) {
        volume.innerHTML = this.icons.muted;
        video.muted = true;
      }
      if (video && video?.volume > 0 && volume) {
        volume.innerHTML = this.icons.unMuted;
        video.muted = false;
      }
    });
    fullScreen?.addEventListener("click", () => {
      video?.requestFullscreen();
    });

    forwardStep?.addEventListener("click", () => {
      if (video && video.currentTime < video.duration)
        video.currentTime = video.currentTime + Number(this.skipTime);
    });

    backStep?.addEventListener("click", () => {
      if (video && video.currentTime > 0.1)
        video.currentTime = video.currentTime - Number(this.skipTime);
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
    volume?.addEventListener("mouseover", () => (volume.style.opacity = "1"));
    volume?.addEventListener("mouseout", () => (volume.style.opacity = ".8"));
    fullScreen?.addEventListener(
      "mouseover",
      () => (fullScreen.style.opacity = "1")
    );
    fullScreen?.addEventListener(
      "mouseout",
      () => (fullScreen.style.opacity = ".8")
    );
    forwardStep?.addEventListener(
      "mouseover",
      () => (forwardStep.style.opacity = "1")
    );
    forwardStep?.addEventListener(
      "mouseout",
      () => (forwardStep.style.opacity = ".8")
    );
    backStep?.addEventListener(
      "mouseover",
      () => (backStep.style.opacity = "1")
    );
    backStep?.addEventListener(
      "mouseout",
      () => (backStep.style.opacity = ".8")
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
