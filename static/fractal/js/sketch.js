var slider_angle;
var slider_brancheRatio;
var angle = 0;
let branchSize = 60;
let minBranchSize = 200;
let maxBranchSize = 150;
let brancheRatio = 1.3;

function preload() {}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  slider_brancheRatio = createSlider(1.2, 2, 1.3, 0.01);
  slider_angle = PI / 8;
}

function draw() {
  frameRate(20);
  slider_angle += 0.01;

  background(10);
  angle = slider_angle;
  // angle = slider_angle.value();
  strokeWeight(branchSize / 20);
  translate(width / 2, height / 2);
  branch(branchSize);
}
function branch(len) {
  line(0, 0, 0, -len);
  // line(0, 0, 0, -len);
  translate(0, -len);
  strokeWeight(len / 100);
  stroke(20, 100, 220);

  // line(0, 0, 0, -len *brancheRatio);
  if (len < maxBranchSize) {
    push();
    rotate(angle * 2);
    branch(len * slider_brancheRatio.value());
    pop();

    push();
    rotate(-angle * 2);
    branch(len * slider_brancheRatio.value());
    pop();

    push();
    rotate(angle);
    branch(len * slider_brancheRatio.value());
    pop();

    push();
    rotate(-angle);
    branch(len * slider_brancheRatio.value());
    pop();
  }
}

// var slider;
// var angle = 0;

// function preload() {}

// function setup() {
//   createCanvas(400, 400);
//   slider = createSlider(0, TWO_PI, PI / 4, 0.01);
// }

// function draw() {
//   background(51);
//   angle = slider.value();
//   stroke(255);
//   translate(200, height);
//   branch(100);
// }
// function branch(len) {
//   line(0, 0, 0, -len);
//   translate(0, -len);

//   rotate(angle);
//   line(0, 0, 0, -len *brancheRatio);
//   if (len > 4) {
//     push();
//     branch(len *brancheRatio);
//     rotate(-angle);
//     branch(len *brancheRatio);
//     pop();
//   }
// }
