interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}
interface STory {
  createStory(): void;
}
class youtube implements TakePhoto, STory {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
  createStory(): void {
    console.log("Story was created");
  }
}
