
// ml5 Face Detection Model
let faceapi;
let detections = [];

// Video
let video;

let points

function setup() {
  createCanvas(360, 270);

  // Creat the video and start face tracking
  video = createCapture(VIDEO);
  video.size(width, height);
  // Only need landmarks for this example
  const faceOptions = { withLandmarks: true, withExpressions: false, withDescriptors: false };
  faceapi = ml5.faceApi(video, faceOptions, faceReady);
}

// Start detecting faces
function faceReady() {
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
  leftest = windowWidth
  lowest = windowHeight
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
    
    for (let i = 48; i < points.length; i++) {
      if (i == 48) { //54 48
        //find highest and leftest point, shift every left by that
      stroke(0, 255, 0);
      } else {
        stroke(255, 0, 0);
      }
      strokeWeight(4);
      point(points[i]._x- leftest, points[i]._y- lowest);
    }
  }

}
outData = []
function keyPressed() {
  
  if (key === 'w') {
    outData.push({"inputs":[points[48]._x,points[48]._y,points[49]._x,points[49]._y,points[50]._x,points[50]._y,points[51]._x,points[51]._y,points[52]._x,points[52]._y,points[53]._x,points[53]._y,points[54]._x,points[54]._y,points[55]._x,points[55]._y,points[56]._x,points[65]._y,points[57]._x,points[57]._y,points[58]._x,points[58]._y,points[59]._x,points[59]._y,points[60]._x,points[60]._y,points[61]._x,points[61]._y,points[62]._x,points[62]._y,points[63]._x,points[63]._y,points[64]._x,points[64]._y,points[65]._x,points[65]._y,points[66]._x,points[66]._y,points[67]._x,points[67]._y],"label": "w"});
    print("W label added")
  }
  else if (key === 'o') {
    outData.push({"inputs":[points[48]._x,points[48]._y,points[49]._x,points[49]._y,points[50]._x,points[50]._y,points[51]._x,points[51]._y,points[52]._x,points[52]._y,points[53]._x,points[53]._y,points[54]._x,points[54]._y,points[55]._x,points[55]._y,points[56]._x,points[65]._y,points[57]._x,points[57]._y,points[58]._x,points[58]._y,points[59]._x,points[59]._y,points[60]._x,points[60]._y,points[61]._x,points[61]._y,points[62]._x,points[62]._y,points[63]._x,points[63]._y,points[64]._x,points[64]._y,points[65]._x,points[65]._y,points[66]._x,points[66]._y,points[67]._x,points[67]._y],"label": "o"});
    print("O label added")
  }
  else if (key === 'r') {
    outData.push({"inputs":[points[48]._x,points[48]._y,points[49]._x,points[49]._y,points[50]._x,points[50]._y,points[51]._x,points[51]._y,points[52]._x,points[52]._y,points[53]._x,points[53]._y,points[54]._x,points[54]._y,points[55]._x,points[55]._y,points[56]._x,points[65]._y,points[57]._x,points[57]._y,points[58]._x,points[58]._y,points[59]._x,points[59]._y,points[60]._x,points[60]._y,points[61]._x,points[61]._y,points[62]._x,points[62]._y,points[63]._x,points[63]._y,points[64]._x,points[64]._y,points[65]._x,points[65]._y,points[66]._x,points[66]._y,points[67]._x,points[67]._y],"label": "r"});
    print("R label added")
  }
  if (key === '0') {
    save(outData, 'data.json');
  }
  
}


//"inputs"["point48":points[48],"point49":points[49],"point50":points[50],"point51":points[51],"point52":points[52],"point53":points[53],"point54":points[54],"point55":points[55],"point56":points[56],"point57":points[57],"point58":points[58],"point59":points[59],"point60":points[60],"point61":points[61],"point62":points[62],"point63":points[63],"point64":points[64],"point65":points[65],"point66":points[66],"point67":points[67],"point68":points[68]