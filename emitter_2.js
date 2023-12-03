class Emitter_2 {
constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
  }

  addParticle(aColor) {
    let p = new Particle(this.origin.x, this.origin.y);
    p.c = color(aColor);
    this.particles.push(p);
  }

  applyForce(force) {
    for (let particle of this.particles) {
      particle.applyForce(force);
    }
  }

  applyRepeller(repeller) {
    for (let particle of this.particles) {
      let force = repeller.repel(particle);
      particle.applyForce(force);
    }
  }
  
  applyRepeller(repeller_2) {
    for (let particle of this.particles) {
      let force = repeller_2.repel(particle);
      particle.applyForce(force);
    }
  }

  applyAttractor(attractor) {
    for (let particle of this.particles) {
      let force = attractor.pull(particle);
      particle.applyForce(force);
    }
  }

  applyAttractor(attractor_2) {
    for (let particle of this.particles) {
      let force = attractor_2.pull(particle);
      particle.applyForce(force);
    }
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      particle.run();
      if (particle.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}