
let emitter;
let emitter_2;
let repeller;
let attractor;
let gravity_x = 0;
let gravity_y = 0;


function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height-100);
  emitter_2 = new Emitter_2(width/2, 100);
  repeller = new Repeller(width / 2, height / 2);
  attractor = new Attractor(width / 2, height / 2);
}

function draw() {

gravity_x = constrain(gravity_x, 0, 30);
gravity_y = constrain(gravity_y, 0, 30);

  background(255);
  repeller.move();
  attractor.move();
  
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
  emitter.run();

  emitter_2.applyForce(gravity);
  emitter_2.applyRepeller(repeller);
  emitter_2.applyAttractor(attractor);
  emitter_2.run();

  repeller.show();
  attractor.show();

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