class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
   this.power = 300;
  }

  moveX(value) {
    this.position.x += value;
  }

  moveY(value) {
    this.position.y += value;
  }
  
  setPower(value) {
    this.power = value;
  }

  show() {
    noStroke();
    fill(0, 20);
    circle(this.position.x, this.position.y, 30);
  }

  repel(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = (shape.repellerDistanceX, shape.repellerDistanceY);
    let strength = (-1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}