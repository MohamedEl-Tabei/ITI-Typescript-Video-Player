import IVideoPlayer from "../interface/index";
class VideoPlayer implements IVideoPlayer{
    readonly container: string;
    readonly src: string;
    constructor(_container:string,_src:string){
        this.container=_container
        this.src=_src
        const video=document.createElement("video")
        video.width=400;
        video.height=320
        video.autoplay=true

        video.innerHTML=`
            <source src=${this.src} type="video/mp4" />
        `
        document.getElementById("container")?.append(video)
    }
}

export default VideoPlayer