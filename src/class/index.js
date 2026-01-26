"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_js_1 = require("./abstract.js");
var VideoPlayer = /** @class */ (function (_super) {
    __extends(VideoPlayer, _super);
    function VideoPlayer(container, src, skipTime, theme) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var myTheme = {
            color: "white",
            backgroundColor: "black",
            accent: "white",
        };
        _this = _super.call(this, src, container, skipTime, __assign(__assign({}, myTheme), theme)) || this;
        _this.count = 0;
        _this.createVideoContainer = function () {
            var videoContainer = document.createElement("div");
            videoContainer.style.position = "relative";
            videoContainer.style.width = "100%";
            return videoContainer;
        };
        _this.createVideo = function () {
            var video = document.createElement("video");
            video.setAttribute("id", "myVideo123".concat(_this.count));
            video.setAttribute("width", "100%");
            video.volume = 0.1;
            // video.controls = true;
            video.innerHTML = "\n            <source src=\"".concat(_this.src, "\" type=\"video/mp4\" />\n        ");
            return video;
        };
        _this.createControlContainer = function () {
            var controlContainer = document.createElement("div");
            controlContainer.style.position = "absolute";
            controlContainer.style.width = "100%";
            controlContainer.style.height = "100%";
            controlContainer.style.top = "0";
            controlContainer.style.display = "flex";
            controlContainer.style.alignItems = "end";
            return controlContainer;
        };
        _this.createControl = function () {
            var control = document.createElement("div");
            control.style.padding = "0px 10px";
            control.style.gap = "15px";
            control.style.height = "100%";
            control.style.boxSizing = "border-box";
            control.style.width = "100%";
            control.style.display = "flex";
            control.style.flexDirection = "column";
            control.style.alignItems = "center";
            control.style.paddingBottom = "8px";
            control.innerHTML = "\n        \n        <div style='display:flex ;justify-content:space-around;gap:10px;align-items:center;width:100%;margin:auto'>\n            <div style=\"cursor:pointer;opacity:.5\"  id=\"backStep".concat(_this.count, "\" title=\"-").concat(_this.skipTime, "\">").concat(_this.icons.backStep, "</div>\n            <div style=\"cursor:pointer;opacity:.5\"  id=\"playToggle").concat(_this.count, "\">").concat(_this.icons.pause, "</div>\n            <div style=\"cursor:pointer;opacity:.5\"  id=\"forwardStep").concat(_this.count, "\" title=\"+").concat(_this.skipTime, "\">").concat(_this.icons.forwardStep, "</div>\n        </div>\n        <div style=\"display:flex;justify-content:space-between;align-items:center;color:white;width:100%\">\n          <input type=\"range\"  value=0 style=\"width:100%;height:3px;accent-color:").concat(_this.theme.color, ";\" id=\"timeRange").concat(_this.count, "\"/>\n        </div>\n        <div style=\"width:100%;display:flex; align-items:center; gap:20px\" >\n          \n          <div style=\"width:155px;display:flex;align-items:center\">\n            <div style=\"width:35px;cursor:pointer;opacity:.8\"  id=\"volume").concat(_this.count, "\">").concat(_this.icons.unMuted, "</div>\n            <input type=\"range\" max=\"1\" step=\"0.1\"  value=0.1 style=\"width:100px;height:3px;accent-color:").concat(_this.theme.accent, ";\" id=\"volumeRange").concat(_this.count, "\"/>\n          </div>\n          \n          <div style=\"width:100px;display:flex;align-items:center;justify-content:space-between;color:white\">\n            <small id=\"currentTime").concat(_this.count, "\">00:00:00</small>/\n            <small id=\"durationTime").concat(_this.count, "\" >00:00:00</small>\n          </div>\n\n          <div style=\"display:flex;align-items:center;justify-content:end ;margin-left:auto\">\n            <div style=\"width:35px;cursor:pointer;opacity:.8\"  id=\"fullScreen").concat(_this.count, "\">").concat(_this.icons.fullScreen, "</div>\n          </div>\n        </div>\n    ");
            return control;
        };
        _this.createLoader = function () {
            var loader = _this.createControlContainer();
            loader.innerHTML = "\n    ".concat(_this.icons.spinner, "\n    <style>\n      @keyframes spin {\n        0% { transform: rotate(0deg); }\n        100% { transform: rotate(360deg); }\n      }\n    </style>");
            loader.style.display = "none";
            loader.id = "loader".concat(_this.count);
            return loader;
        };
        _this.addEvents = function () {
            var controlContainer = document.getElementById("controlContainer".concat(_this.count));
            var timeRange = document.querySelector("input[id='timeRange".concat(_this.count, "']"));
            var video = document.querySelector("video[id='myVideo123".concat(_this.count, "']"));
            var playToggle = document.querySelector("div[id='playToggle".concat(_this.count, "']"));
            var durationTime = document.getElementById("durationTime".concat(_this.count));
            var currentTime = document.getElementById("currentTime".concat(_this.count));
            var loader = document.getElementById("loader".concat(_this.count));
            var volume = document.getElementById("volume".concat(_this.count));
            var volumeRange = document.querySelector("input[id='volumeRange".concat(_this.count, "']"));
            var fullScreen = document.getElementById("fullScreen".concat(_this.count));
            var forwardStep = document.getElementById("forwardStep".concat(_this.count));
            var backStep = document.getElementById("backStep".concat(_this.count));
            video === null || video === void 0 ? void 0 : video.addEventListener("loadedmetadata", function () {
                timeRange === null || timeRange === void 0 ? void 0 : timeRange.setAttribute("max", "".concat(video === null || video === void 0 ? void 0 : video.duration));
                if (durationTime)
                    durationTime.innerHTML = _this.getTime(video.duration);
            });
            video === null || video === void 0 ? void 0 : video.addEventListener("timeupdate", function () {
                if (timeRange) {
                    timeRange.value = "".concat(video.currentTime);
                }
                if (currentTime)
                    currentTime.innerHTML = _this.getTime(video.currentTime);
            });
            video === null || video === void 0 ? void 0 : video.addEventListener("play", function () {
                if (playToggle)
                    playToggle.innerHTML = _this.icons.pause;
            });
            video === null || video === void 0 ? void 0 : video.addEventListener("pause", function () {
                if (playToggle)
                    playToggle.innerHTML = _this.icons.play;
            });
            timeRange === null || timeRange === void 0 ? void 0 : timeRange.addEventListener("input", function () {
                if (video === null || video === void 0 ? void 0 : video.currentTime)
                    video.currentTime = Number(this.value);
            });
            playToggle === null || playToggle === void 0 ? void 0 : playToggle.addEventListener("click", function () {
                var _a;
                if ((_a = this.innerHTML) === null || _a === void 0 ? void 0 : _a.includes("play")) {
                    video === null || video === void 0 ? void 0 : video.play();
                }
                else {
                    video === null || video === void 0 ? void 0 : video.pause();
                }
            });
            video === null || video === void 0 ? void 0 : video.addEventListener("waiting", function () {
                return loader === null || loader === void 0 ? void 0 : loader.setAttribute("style", "position: absolute; width: 100%; height: 100%; top: 0px; display: flex; align-items: end; ");
            });
            video === null || video === void 0 ? void 0 : video.addEventListener("playing", function () {
                return loader === null || loader === void 0 ? void 0 : loader.setAttribute("style", "display:none");
            });
            controlContainer === null || controlContainer === void 0 ? void 0 : controlContainer.addEventListener("mouseout", function () {
                this.style.opacity = "0";
            });
            controlContainer === null || controlContainer === void 0 ? void 0 : controlContainer.addEventListener("mouseover", function () {
                this.style.opacity = "1";
            });
            volume === null || volume === void 0 ? void 0 : volume.addEventListener("click", function () {
                if (volume.innerHTML.includes("unmuted")) {
                    volume.innerHTML = _this.icons.muted;
                    if (volumeRange)
                        volumeRange.value = "0";
                    if (video)
                        video.volume = 0;
                }
                else {
                    volume.innerHTML = _this.icons.unMuted;
                    if (volumeRange)
                        volumeRange.value = "0.1";
                    if (video)
                        video.volume = 0.1;
                }
                if (video)
                    video.muted = !volume.innerHTML.includes("unmuted");
            });
            volumeRange === null || volumeRange === void 0 ? void 0 : volumeRange.addEventListener("input", function () {
                if (video)
                    video.volume = Number(volumeRange.value);
                if ((video === null || video === void 0 ? void 0 : video.volume) == 0 && volume) {
                    volume.innerHTML = _this.icons.muted;
                    video.muted = true;
                }
                if (video && (video === null || video === void 0 ? void 0 : video.volume) > 0 && volume) {
                    volume.innerHTML = _this.icons.unMuted;
                    video.muted = false;
                }
            });
            fullScreen === null || fullScreen === void 0 ? void 0 : fullScreen.addEventListener("click", function () {
                video === null || video === void 0 ? void 0 : video.requestFullscreen();
            });
            forwardStep === null || forwardStep === void 0 ? void 0 : forwardStep.addEventListener("click", function () {
                if (video && video.currentTime < video.duration)
                    video.currentTime = video.currentTime + Number(_this.skipTime);
            });
            backStep === null || backStep === void 0 ? void 0 : backStep.addEventListener("click", function () {
                if (video && video.currentTime > 0.1)
                    video.currentTime = video.currentTime - Number(_this.skipTime);
            });
            //hover
            playToggle === null || playToggle === void 0 ? void 0 : playToggle.addEventListener("mouseover", function () { return (playToggle.style.opacity = "1"); });
            playToggle === null || playToggle === void 0 ? void 0 : playToggle.addEventListener("mouseout", function () { return (playToggle.style.opacity = ".5"); });
            volume === null || volume === void 0 ? void 0 : volume.addEventListener("mouseover", function () { return (volume.style.opacity = "1"); });
            volume === null || volume === void 0 ? void 0 : volume.addEventListener("mouseout", function () { return (volume.style.opacity = ".8"); });
            fullScreen === null || fullScreen === void 0 ? void 0 : fullScreen.addEventListener("mouseover", function () { return (fullScreen.style.opacity = "1"); });
            fullScreen === null || fullScreen === void 0 ? void 0 : fullScreen.addEventListener("mouseout", function () { return (fullScreen.style.opacity = ".8"); });
            forwardStep === null || forwardStep === void 0 ? void 0 : forwardStep.addEventListener("mouseover", function () { return (forwardStep.style.opacity = "1"); });
            forwardStep === null || forwardStep === void 0 ? void 0 : forwardStep.addEventListener("mouseout", function () { return (forwardStep.style.opacity = ".5"); });
            backStep === null || backStep === void 0 ? void 0 : backStep.addEventListener("mouseover", function () { return (backStep.style.opacity = "1"); });
            backStep === null || backStep === void 0 ? void 0 : backStep.addEventListener("mouseout", function () { return (backStep.style.opacity = ".5"); });
        };
        _this.icons = {
            pause: "<svg style=\"width:80px\"  xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"".concat((_a = _this.theme) === null || _a === void 0 ? void 0 : _a.color, "\" d=\"M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24z\"/></svg>"),
            play: "<svg style=\"width:80px\"   xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, play Inc.--><path fill=\"".concat((_b = _this.theme) === null || _b === void 0 ? void 0 : _b.color, "\" d=\"M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z\"/></svg>"),
            spinner: "<svg style=\"width:50px;margin:auto ;animation: spin 2s linear infinite;\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"".concat((_c = _this.theme) === null || _c === void 0 ? void 0 : _c.accent, "\" d=\"M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z\"/></svg>"),
            unMuted: "<svg style=\"width:1rem\"  xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><!-- unmuted !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"".concat((_d = _this.theme) === null || _d === void 0 ? void 0 : _d.accent, "\"  d=\"M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z\"/></svg>"),
            muted: "<svg style=\"width:1rem\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"".concat((_e = _this.theme) === null || _e === void 0 ? void 0 : _e.accent, "\"   d=\"M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z\"/></svg>"),
            fullScreen: "<svg style=\"width:1rem\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  fill=\"".concat((_f = _this.theme) === null || _f === void 0 ? void 0 : _f.accent, "\" d=\"M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z\"/></svg>"),
            forwardStep: "<svg style=\"width:40px\"  xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"".concat((_g = _this.theme) === null || _g === void 0 ? void 0 : _g.color, "\" d=\"M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z\"/></svg>"),
            backStep: "<svg style=\"width:40px\"  xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"".concat((_h = _this.theme) === null || _h === void 0 ? void 0 : _h.color, "\" d=\"M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 11.5 9.6 192 160z\"/></svg>"),
        };
        _this.count = VideoPlayer.count++;
        var startContainer = _this.createControlContainer();
        var controlContainer = _this.createControlContainer();
        var video = _this.createVideo();
        var videoContainer = _this.createVideoContainer();
        var control = _this.createControl();
        var loader = _this.createLoader();
        startContainer.style.background = "black";
        startContainer.innerHTML = "\n    <div style=\"display:flex;justify-content:center;align-items:center;width:100%;height:100%\">\n      ".concat(_this.icons.play, " \n    </div>");
        startContainer.addEventListener("click", function () {
            startContainer.style.display = "none";
            video.play();
        });
        controlContainer.id = "controlContainer".concat(_this.count);
        control.style.backgroundImage = "linear-gradient(180deg, #ffffff00,rgba(0, 0, 0, 0.46), ".concat((_j = _this.theme) === null || _j === void 0 ? void 0 : _j.backgroundColor, ")");
        controlContainer.append(control);
        videoContainer.append(video);
        videoContainer.append(controlContainer);
        videoContainer.append(startContainer);
        videoContainer.append(loader);
        (_k = document.getElementById(_this.container)) === null || _k === void 0 ? void 0 : _k.append(videoContainer);
        _this.addEvents();
        return _this;
    }
    VideoPlayer.prototype.getTime = function (time) {
        var h = time / (60 * 60);
        time = time % (60 * 60);
        var m = time / 60;
        var s = time % 60;
        return "".concat(h < 10 ? "0" + h.toFixed() : h.toFixed(), ":").concat(m < 10 ? "0" + m.toFixed() : m.toFixed(), ":").concat(s < 10 ? "0" + s.toFixed() : s.toFixed());
    };
    VideoPlayer.count = 0;
    return VideoPlayer;
}(abstract_js_1.default));
exports.default = VideoPlayer;
