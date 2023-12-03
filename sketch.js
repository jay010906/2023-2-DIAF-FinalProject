let nSlider;

let particleValue = 10;
let particleValueMin = 0;
let particleValueMax = 50;
let particleValueStep = 2;
let gui;

let params = {
  powerValue : 10,
  powerValueMin : 0,
  powerValueMax : 500,
  powerValueStep : 1,

  repellerMove : 0,
  repellerMoveMin : 0,
  repellerMoveMax : 1,
  repellerMoveStep : 0.1,

  attractorMove : 0,
  attractorMoveMin : 0,
  attractorMoveMax : 1,
  attractorMoveStep : 0.1,

  gravityxValue : 0,
  gravityxMin : 1,
  gravityxMax : 1,
  gravityxStep : 0.1,

  gravityyValue : 0,
  gravityyMin : 1,
  gravityyMax : 1,
  gravityyStep : 0.1,

  particleColor : [200, 0, 0],
}

let emitter;
let emitter_2;
let repeller;
let repeller_2;
let attractor;
let attractor_2;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height/2);
  emitter_2 = new Emitter(width / 2, height/2);
  repeller = new Repeller(width / 2, 50);
  repeller_2 = new Repeller_2(width /2, 350);
  attractor = new Attractor(50, height/2);
  attractor_2 = new Attractor(350, height/2);
  
  nSlider = createSlider(0, 10, 0);
  nSlider.position(10, 420);
  
  gui = createGui('particleValue slider');
  
  gui.addObject(params);
  gui.setPosition(420, 10);
}

function draw() {
  background(255);
    
  repeller.setPower(params.testValue);
  repeller.move(params.repellerMove);
  repeller_2.setPower(params.testValue);
  repeller_2.move(params.repellerMove);
  attractor.setPower(params.testValue);
  attractor.move(params.attractorMove);
  attractor_2.setPower(params.testValue);
  attractor_2.move(params.attractorMove);
  
  for (let i=0; i<nSlider.value(); i++) {
    emitter.addParticle(params.particleColor);  
  }
  for (let i=0; i<nSlider.value(); i++) {
    emitter_2.addParticle(params.particleColor);  
  }
  
  let gravity = createVector(params.gravityxValue, params.gravityyValue);
  emitter.applyForce(gravity);
  emitter.applyRepeller(repeller);
  emitter.applyAttractor(attractor);
  emitter.run();
  emitter_2.applyForce(gravity);
  emitter_2.applyRepeller(repeller_2);
  emitter_2.applyAttractor(attractor_2);
  emitter_2.run();

  repeller.show();
  repeller_2.show();
  attractor.show();
  attractor_2.show();
}