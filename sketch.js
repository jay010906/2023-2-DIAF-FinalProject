
let emitter;
let emitter_2;
let repeller;
let attractor;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height-100);
  emitter_2 = new Emitter_2(width/2, 100);
  repeller = new Repeller(width / 2, height / 2);
  attractor = new Attractor(width / 2, height / 2);
}

function draw() {
  background(255);
  repeller.move();
  attractor.move();
  
  emitter.addParticle();
  emitter_2.addParticle();

  let gravity = createVector(0, 0.1);

  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
emitter.applyAttractor(attractor);
  emitter.run();

  emitter_2.applyForce(gravity);
  emitter_2.applyRepeller(repeller);
  emitter_2.applyAttractor(attractor);
  emitter_2.run();

  repeller.show();
  attractor.show();
}
