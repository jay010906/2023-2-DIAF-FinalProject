class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 200;
    this.value = 0.8;
  }
  
  move() {
    this.position.y -= this.value;

    if(this.position.y > 205 || this.position.y < 195){
      this.value *= -1;
    }
  }
  

  show() {
    stroke(0);
    noStroke();
    fill(230);
    circle(this.position.x, this.position.y, 50);
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
