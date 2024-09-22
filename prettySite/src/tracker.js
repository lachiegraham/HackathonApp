let faceapi;
let detections = [];
let video;
let points;
let canvas;

function setup() {
  // Create canvas and attach to the div
  canvas = createCanvas(360, 270);
  canvas.parent('liveTrackDiv');

  // Create the video and start face tracking
  video = createCapture(VIDEO);
  video.size(360, 270); // Match the canvas size
  video.parent('videoContainer'); // Attach to the new video container div

    // request microphone access on startup
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })

  const faceOptions = { withLandmarks: true, withExpressions: false, withDescriptors: false };
  faceapi = ml5.faceApi(video, faceOptions, faceReady);
}

// Show loading modal on page load
$(document).ready(function() {
  $('#loadingModal').modal('show');
});

// Start detecting faces
function faceReady() {
  // Hide loading modal when face detection is ready
  $('#loadingModal').modal('hide');
  faceapi.detect(gotFaces);
}

// Got faces
function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  detections = result;
  faceapi.detect(gotFaces);
}

// Draw everything
function draw() {
  background(0);
  let leftest = windowWidth;
  let lowest = windowHeight;

  // Just look at the first face and figure out extremities
  if (detections.length > 0) {
    points = detections[0].landmarks.positions;

    for (let i = 48; i < points.length; i++) {
      if (points[i]._x < leftest) {
        leftest = points[i]._x;
      }
      if (points[i]._y < lowest) {
        lowest = points[i]._y;
      }
    }
    leftest -= 30//170
    lowest-= 10//125
    scale = 3.7
    
    for (let i = 48; i < points.length; i++) {
      stroke(255, 0, 0);
      strokeWeight(3);
      point((points[i]._x-leftest)*scale, (points[i]._y-lowest)*scale);
      strokeWeight(1);
      if (i != 67) {
        line((points[i]._x-leftest)*scale, (points[i]._y-lowest)*scale,(points[i+1]._x-leftest)*scale, (points[i+1]._y-lowest)*scale)
      }
      else {
        line((points[48]._x-leftest)*scale, (points[48]._y-lowest)*scale,(points[67]._x-leftest)*scale, (points[67]._y-lowest)*scale)
      }
    }
  }
}

