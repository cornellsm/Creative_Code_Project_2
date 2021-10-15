//noise code from Claire Zitzow
//random function code for the stars from The Coding Train
//audio play/pause function from Tsholo Matlala
//audio from soundbible.com
//UFO sounds by Stephan listed as UFO taking off and UFO landing
//cow sounds by BuffBill84 listed as Cow
let x;
let y;
let extraCanvas;
let imgUFO;
let imgCow;
let imgCow2;
let UFO = 10;
let moon = 50;
let UFOspeed = 1;
let moonSpeed = 0.25;
let n = 0.1;
let audioUFO;
let audioCows;

function preload() {
  imgUFO = loadImage('UFO.png');
  imgCow = loadImage('Cow.png');
  imgCow2 = loadImage('flippedCow.png');
  audioUFO = loadSound('UFOaudio.mp3');
  audioCows = loadSound('Cowaudio.mp3');
}

function setup() {
  createCanvas(800, 400);
  extraCanvas = createGraphics(800, 400);
  extraCanvas.clear();
  background(14, 71, 98);
  audioUFO.loop();
  audioCows.loop();
}
//getting the audio to play in present mode
function mousePressed() {
  if (audioUFO.isPlaying()) {
    audioUFO.pause();
  } else {
    audioUFO.play();
  }
  if (audioCows.isPlaying()) {
    audioCows.pause();
  } else {
    audioCows.play();
  }
}

function draw() {
  background(14, 71, 98);
  
//stars
  x = random(0,800);
  y = random(0, 400);
  extraCanvas.noStroke();
  extraCanvas.fill(255, 255, 255, 50);
  extraCanvas.ellipse(x, y, 4, 4);
  
    image(extraCanvas, 0, 0);
  
//moon
  fill(238, 238, 203);
  noStroke();
  ellipse(80, moon, 50, 50);
  
  if (moon > 250) {
    moonSpeed = -0.25;
  }
  
  if (moon < 50) {
    moonSpeed = 0.25;
  }
  
  moon = moon + moonSpeed;
  
    image(imgUFO, UFO, 10);
  
//UFO
  if (UFO > 700) {
    UFOspeed = -1;
  }
  
  if (UFO < 10) {
    UFOspeed = 1;
  }
  
  UFO = UFO + UFOspeed;
 
//mountains
    for(let x = 0; x < width; x = x + 1) {
    let p = (x + n) / 100;
    let y = noise(p);  
    
//background
    line(x, height, x, y * height);
    stroke(4, 35, 41);
//foreground
    line(x, height, x, y * height / 0.75);
    stroke(14, 51, 69);
  
  }
  
  n++;
//ground
    fill(10, 67, 40);
    noStroke();
    ellipse(300, 400, 1200, 100);
//cows
 image(imgCow, 10, 325, 70, 50);
 image(imgCow2, 85, 325, 40, 30);
 image(imgCow, 200, 315);
 image(imgCow, 760, 315);
 image(imgCow2, 415, 325, 90, 70);
 image(imgCow, 530, 325, 45, 30);
 image(imgCow2, 655, 335, 60, 40);
}