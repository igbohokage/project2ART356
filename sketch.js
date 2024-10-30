let bubbles = [];

function setup() {
  createCanvas(600, 400);
for (let i = 0; i < 2; i++);
  bubbles[i] = new Bubble(200, 200, 40);

}

function draw() {
  background(0);

  bubbles[0].show();
  bubbles[1].show();
  
  bubbles[0].move();
  bubbles[1].move();
}

class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}
