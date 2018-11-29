var SELECTORS = {
  CAMERA_ELEMENT: '.camera__element--js',
};
var CSS_CLASSES = {
  CAMERA_FRONT_FACING: 'camera-front-facing'
};
//exports.VIDEO_PIXELS = 224;
var Camera = (function() {
  function Camera() {
    this.videoElement = document.querySelector(SELECTORS.CAMERA_ELEMENT);
    this.snapShotCanvas = document.createElement('canvas');
  }
  Camera.prototype.setupCamera = function() {

    var _this = this;
    var stream;

    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) return [3, 2];
    return [4, navigator.mediaDevices.getUserMedia({
      'audio': false,
      'video': {
        facingMode: 'environment'
      }
    })];

  };
  Camera.prototype.setupVideoDimensions = function(width, height) {
    this.aspectRatio = width / height;
    if (width >= height) {
      this.videoElement.height = exports.VIDEO_PIXELS;
      this.videoElement.width = this.aspectRatio * exports.VIDEO_PIXELS;
    } else {
      this.videoElement.width = exports.VIDEO_PIXELS;
      this.videoElement.height = exports.VIDEO_PIXELS / this.aspectRatio;
    }
  };
  Camera.prototype.pauseCamera = function() {
    // if (!game_1.game.cameraPaused) {
    //     this.videoElement.pause();
    //     game_1.game.cameraPaused = true;
    // }
  };
  Camera.prototype.unPauseCamera = function() {
    // if (game_1.game.cameraPaused) {
    //     this.videoElement.play();
    //     game_1.game.cameraPaused = false;
    // }
  };
  Camera.prototype.setFrontFacingCamera = function() {
    // classes_1.addClass(this.videoElement, CSS_CLASSES.CAMERA_FRONT_FACING);
  };
  Camera.prototype.snapshot = function() {
    this.snapShotCanvas.height = this.videoElement.height;
    this.snapShotCanvas.width = this.videoElement.width;
    var ctx = this.snapShotCanvas.getContext('2d');
    ctx.drawImage(this.videoElement, 0, 0, this.snapShotCanvas.width, this.snapShotCanvas.height);
    var img = new Image();
    img.src = this.snapShotCanvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    return img;
  };
  return Camera;
}());
var jCamera = new Camera();
jCamera.setupCamera();

//exports.Camera = Camera;
//exports.camera = new Camera();
