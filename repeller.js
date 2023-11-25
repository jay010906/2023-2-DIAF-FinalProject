class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 200;
    this.value = 0.5;
  }
  
  move() {
    this.position.y -= this.value;

    if(this.position.y > height || this.position.y < 0){
      this.value *= -1;
    }
  }
  

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 32);
  }

  repel(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = (-1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
