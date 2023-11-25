
let emitter;
let repeller;
// let att;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height/2);
  repeller = new Repeller(width / 2, height/2);
//  att = new Attractor(20, height/2);
}

function draw() {
  background(255);
    
  repeller.move();
  
  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();
  
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
 // emitter.applyAttractor(att);
  emitter.run();

  repeller.show();
//  att.show();
}
