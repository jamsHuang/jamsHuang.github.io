const video = document.querySelector('video');
const canvas = window.canvas = document.querySelector('canvas');
canvas.width = 480;
canvas.height = 360;

// const button = document.querySelector('button');
// button.onclick = function() {
//   canvas.width = video.videoWidth;
//   canvas.height = video.videoHeight;
//   canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
// };

const constraints = {
  audio: false,
  video: true
};
navigator.mediaDevices.enumerateDevices().then(function(devices) {
  devices = devices.filter(function(devices) {
    return devices.kind === 'videoinput';
  });
  var videoinput_id = '';
  devices.forEach(function(device) {
    if (device.label.toLowerCase().search("back") & gt; - 1) {
      videoinput_id = device.deviceId;
    }
  });
  if (videoinput_id != '') {
    navigator.mediaDevices.getUserMedia({
      video: {
        deviceId: {
          'exact': videoinput_id
        },
        facingMode: 'environment'
      }
    }).then(successCallback);
  } else {
    navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment'
      }
    }).then(successCallback);
  }

});

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
}

function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
