class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }
  
  show() {
    stroke(255);
    strokeWeight(3);
    fill(colorR, colorG, colorB,150);
    ellipse(this.x, this.y, this.r * 2);
  }
}
