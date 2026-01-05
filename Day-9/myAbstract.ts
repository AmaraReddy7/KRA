abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    return 8;
  }
}
//const aman = new TakePhoto("test", "Test"); //it wont create object in abstract class

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Special");
  }
}

const hritik = new Instagram("test", "Test", 3);

hritik.getReelTime;
