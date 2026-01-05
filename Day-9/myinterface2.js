var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
var youtube = /** @class */ (function () {
    function youtube(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    youtube.prototype.createStory = function () {
        console.log("Story was created");
    };
    return youtube;
}());
