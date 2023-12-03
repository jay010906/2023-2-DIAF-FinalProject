class Repeller_2 {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.power = 300;
    }
  
    move(value) {
      this.position.y -= value;
    }
    
    setPower(value) {
      this.power = value;
    }
    
    show() {
      stroke(0);
      noStroke();
      fill(230);
      circle(this.position.x, this.position.y, 30);
    }
  
    repel(particle) {
      let force = p5.Vector.sub(this.position, particle.position);
      let distance = force.mag();
      distance = constrain(distance, 1, 50);
      let strength = (-1 * this.power) / (distance * distance);
      force.setMag(strength);
      return force;
    }
  }
  