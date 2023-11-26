
let emitter;
let emitter_2;
let repeller;
let repeller_2;
let attractor;
let attractor_2;
let gravity_x = 0;
let gravity_y = 0;


function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height / 2);
  emitter_2 = new Emitter_2(width/2, height / 2);
  repeller = new Repeller(width / 2, 100);
  repeller_2 = new Repeller_2(width / 2, 300);
  attractor = new Attractor(100, height / 2);
  attractor_2 = new Attractor(300, height / 2);
}

function draw() {

gravity_x = constrain(gravity_x, -5, 5);
gravity_y = constrain(gravity_y, -5, 5);

  background(255);
  
  emitter.addParticle();
  emitter_2.addParticle();
  emitter.addParticle();
  emitter_2.addParticle();
  emitter.addParticle();
  emitter_2.addParticle();

  let gravity = createVector(gravity_x, gravity_y);

  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
emitter.applyAttractor(attractor);
emitter.applyRepeller(repeller_2);
emitter.applyAttractor(attractor_2);
  emitter.run();

  emitter_2.applyForce(gravity);
  emitter_2.applyRepeller(repeller);
  emitter_2.applyAttractor(attractor);
  emitter_2.applyRepeller(repeller_2);
  emitter_2.applyAttractor(attractor_2);
  emitter_2.run();

  repeller.show();
  repeller_2.show();
  attractor.show();
  attractor_2.show();

  if (keyIsDown(LEFT_ARROW)) {
    gravity_x -= 0.01;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    gravity_x += 0.01;
  }

  if (keyIsDown(UP_ARROW)) {
    gravity_y -= 0.01;
  }

  if (keyIsDown(DOWN_ARROW)) {
    gravity_y += 0.01;
  }
  console.log(gravity_y);
  console.log(gravity_x);
}