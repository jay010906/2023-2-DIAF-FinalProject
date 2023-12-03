class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 300;
  }
  
  move(value) {
    this.position.x -= value;
  }
  
  setPower(value) {
    this.power = value;
  }

  show() {
    stroke(0);
    noStroke();
    fill(0);
    circle(this.position.x, this.position.y, 30);
  }

  pull(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 1, 10);
    let strength = this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
