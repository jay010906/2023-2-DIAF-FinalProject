class Particle {
  constructor(x, y) {
    this.mouseXValue = map(mouseX, 0, width, -1, 5);
    this.mouseYValue = map(mouseY, 0, height, -1, 5);
    this.frame = frameCount;
    this.position = createVector(x, y);
    this.velocity = createVector(this.mouseXValue, this.mouseYValue);
    this.acceleration = createVector(this.mouseXValue, this.mouseYValue);
    this.lifespan = 255.0;

    console.log(this.acceleration);
  }

  run() {
    this.update();
    this.show();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration.mult(0.05);
  }

  show() {
    stroke(0, this.lifespan);
    strokeWeight(1);
    fill(1, this.lifespan);
    circle(this.position.x, this.position.y, 1);
  }

  isDead() {
    return this.lifespan < 0.0;
  }
}
