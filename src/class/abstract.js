"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VideoPlayerAbstract = /** @class */ (function () {
    function VideoPlayerAbstract(src, container, skipTime, theme) {
        this.src = src;
        this.container = container;
        this.skipTime = skipTime;
        this.theme = theme;
    }
    return VideoPlayerAbstract;
}());
exports.default = VideoPlayerAbstract;
