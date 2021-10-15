var r = 230;
var b = 31;
let gBody = 50;
let gHead1 = 50;
let gHcurve1 = 55;
let gHcurve2 = 120;
let gHead2 = 125;
let gBottom1 = 50;
let gBcurve1 = 45;
let gBcurve2 = 135;
let gBottom2 = 125;
let gLeye = 65;
let gReye = 110;
let speed = 1;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(r, 0, b);
  // background
  r = map(mouseX, 0, 600, 0, 242);
  b = map(mouseX, 0, 600, 240, 0);

  noStroke();

  fill(193, 155, 212);

  rect(0, 250, 400, 200);

  //pumpkin

  //stem
  noStroke();
  fill(111, 171, 117);
  rect(130, 200, 20, 40, 5);

  //base

  noStroke();
  fill(224, 162, 54);
  ellipse(100, 250, 50, 70);
  ellipse(140, 250, 76, 78);
  ellipse(180, 250, 50, 70);

  //face
  stroke(112, 73, 9);
  strokeWeight();
  fill(138, 86, 4);
  triangle(115, 245, 122, 230, 130, 245);
  triangle(148, 245, 155, 230, 163, 245);
  rect(130, 255, 18, 18, 1, 1, 5, 5);

  if (mouseX > 50 && mouseX < 210) {
    fill(252, 220, 61);
    triangle(115, 245, 122, 230, 130, 245);
    triangle(148, 245, 155, 230, 163, 245);
    rect(130, 255, 18, 18, 1, 1, 5, 5);
  }
  fill(225);
  //Ghost Body
  rect(gBody, 50, 75, 100);
  //Ghost Top
  bezier(gHead1, 50, gHcurve1, 10, gHcurve2, 10, gHead2, 50);
  //Ghost Bottom
  bezier(gBottom1, 150, gBcurve1, 175, gBcurve2, 170, gBottom2, 150);
  noStroke();
  fill(0);
  //Ghost Eyes
  ellipse(gLeye, 65, 10, 10);
  ellipse(gReye, 65, 10, 10);
  if (gBody > 275) {
    speed = -1;
  }
  if (gBody < 50){
    speed = 1;
  }
  gBody = gBody + speed;
  gHead1 = gHead1 + speed;
  gHcurve1 = gHcurve1 + speed;
  gHcurve2 = gHcurve2 + speed;
  gHead2 = gHead2 + speed;
  gBottom1 = gBottom1 + speed;
  gBcurve1 = gBcurve1 + speed;
  gBcurve2 = gBcurve2 + speed;
  gBottom2 = gBottom2 + speed;
  gLeye = gLeye + speed;
  gReye = gReye + speed;


  
  
}
