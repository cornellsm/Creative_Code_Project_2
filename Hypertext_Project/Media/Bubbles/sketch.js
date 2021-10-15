let bubbles = [];
let colorR;
let colorG;
let colorB;
var r=random;
var g=random;
var b=random;


function setup() {
  createCanvas(1250, 550);
  //let button = createButton("reset");
  //button.mousePressed(resetSketch);
}

//function resetSketch() {
  //createCanvas(1250,550);
//}

  function mousePressed() {
    let r = random(5, 100);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
  }

function draw() {
  background(r,g,b);
  r=map(mouseX,0,600,0,255);
  g=map(mouseX,0,600,0,255);
  b=map(mouseX,0,600,0,255);
  colorR = random(100, 200);
  colorG = random(100, 200);
  colorB = random(100, 200);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i] .move();
    bubbles[i] .show();
  }
}
