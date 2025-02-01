# ITI-Typescript-Video-Player

customizable video player

## Features

- Loader
- Mute
- Play/Pause
- Time slider
- Timer
- Steps
- Theme
- npm package

## Demo

[ITI-Typescript-Video-Player Demo](https://iti-typescript-video-player.vercel.app/)

## Installation

Install my-project with npm

```bash
  npm install me-vp
```

## Screenshots

![App Screenshot](https://i.ibb.co/HLy5pzLR/Screenshot-2025-02-01-192958.png)

![App Screenshot](https://i.ibb.co/j9VgT25X/Screenshot-2025-02-01-193026.png)

![App Screenshot](https://i.ibb.co/vvKX1kn8/Screenshot-2025-02-01-193139.png)

![App Screenshot](https://i.ibb.co/j9SXMgPm/Screenshot-2025-02-01-193208.png)

## NPM

[me-vp](https://www.npmjs.com/package/me-vp)

## Getting started

    <div id="container"></div>

######

    import MEVP from "./node_modules/me-vp/index.js";

######

    const videoPlayer = new MEVP(
        "container",
        "video.mp4",
        "100%",
        2,
        { color: "orange", backgroundColor: "black", accent: "orange" }
    );

######

    const videoPlayer1 = new MEVP(
        "container",
        "video.mp4",
        "100%",
        4
    );
