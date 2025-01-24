abstract class VideoPlayerAbstract {
  constructor(
    protected src: string,
    protected container: string,
    protected width: string
  ) {}

  protected abstract createVideoContainer(): HTMLElement;
  protected abstract createVideo(): HTMLVideoElement;
  protected abstract createControlContainer(): HTMLElement;
  protected abstract createControl(): HTMLElement;
  protected abstract createLoader(): HTMLElement;
  protected abstract addEvents(): void;
  protected abstract getTime(time: number): string;
}
export default VideoPlayerAbstract;
