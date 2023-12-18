let gui;
let gui2;

let basic = {

  particleValue : 0,
  particleValueMin : 0,
  particleValueMax : 10,
  particleValueStep : 1,

  alphaValue : 0,
  alphaValueMin : 0,
  alphaValueMax : 255,
  alphaValueStep : 1,

  repeller1Diameter: 0,
  repeller1DiameterMin : 0,
  repeller1DiameterMax : 200,
  repeller1DiameterStep : 1,

  repeller2Diameter: 0,
  repeller2DiameterMin : 0,
  repeller2DiameterMax : 200,
  repeller2DiameterStep : 1,

  attractor1Diameter : 0,
  attractor1DiameterMin : 0,
  attractor1DiameterMax : 200,
  attractor1DiameterStep : 1,

  attractor2Diameter : 0,
  attractor2DiameterMin : 0,
  attractor2DiameterMax : 200,
  attractor2DiameterStep : 1,

  repeller1MoveX: 0,
  repeller1MoveXMin : -1,
  repeller1MoveXMax : 1,
  repeller1MoveXStep : 0.05,

  repeller1MoveY: 0,
  repeller1MoveYMin : -1,
  repeller1MoveYMax : 1,
  repeller1MoveYStep : 0.05,

  repeller2MoveX: 0,
  repeller2MoveXMin : -1,
  repeller2MoveXMax : 1,
  repeller2MoveXStep : 0.05,

  repeller2MoveY: 0,
  repeller2MoveYMin : -1,
  repeller2MoveYMax : 1,
  repeller2MoveYStep : 0.05,

  attractor1MoveX : 0,
  attractor1MoveXMin : -1,
  attractor1MoveXMax : 1,
  attractor1MoveXStep : 0.05,

  attractor1MoveY : 0,
  attractor1MoveYMin : -1,
  attractor1MoveYMax : 1,
  attractor1MoveYStep : 0.05,

  attractor2MoveX : 0,
  attractor2MoveXMin : -1,
  attractor2MoveXMax : 1,
  attractor2MoveXStep : 0.05,

  attractor2MoveY : 0,
  attractor2MoveYMin : -1,
  attractor2MoveYMax : 1,
  attractor2MoveYStep : 0.05,

  particleColor : [0, 0, 0],
}

let shape = {
  power: 10,
  powerMin : 0,
  powerMax : 1000,
  powerStep : 1,

  gravityX : 0,
  gravityX_Min : -3,
  gravityX_Max : 3,
  gravityX_Step : 0.05,

  gravityY : 0,
  gravityY_Min : -3,
  gravityY_Max : 3,
  gravityY_Step : 0.05,

  repellerDistanceX : 0,
  repellerDistanceXMin : 0,
  repellerDistanceXMax : 50,
  repellerDistanceXStep : 0.01,

  repellerDistanceY : 0,
  repellerDistanceYMin : 0,
  repellerDistanceYMax : 50,
  repellerDistanceYStep : 0.01,

  attractorDistanceX : 0,
  attractorDistanceXMin : 0,
  attractorDistanceXMax : 50,
  attractorDistanceXStep : 0.011,

  attractorDistanceY : 0,
  attractorDistanceYMin : 0,
  attractorDistanceYMax : 50,
  attractorDistanceYStep : 0.01,
  
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
  repeller = new Repeller(width / 2, height/2);
  repeller_2 = new Repeller_2(width / 2, height/2);
  attractor = new Attractor(width / 2, height/2);
  attractor_2 = new Attractor(width / 2, height/2);
  
  gui = createGui('basic slider');
  gui2 = createGui('shape slider');

  gui.addObject(basic);
  gui.setPosition(420, 10);

  gui2.addObject(shape);
  gui2.setPosition(630, 10);
}

function draw() {
  background(255);
    
repeller.setPower(shape.power);
repeller.moveX(basic.repeller1MoveX);
repeller.moveY(basic.repeller1MoveY);

  repeller_2.setPower(shape.power);
  repeller_2.moveX(basic.repeller2MoveX);
repeller_2.moveY(basic.repeller2MoveY);


  attractor.setPower(shape.power);
  attractor.moveX(basic.attractor1MoveX);
  attractor.moveY(basic.attractor1MoveY);


  attractor_2.setPower(shape.power);
  attractor_2.moveX(basic.attractor2MoveX);
  attractor_2.moveY(basic.attractor2MoveY);


  for (let i=0; i<basic.particleValue; i++) {
    emitter.addParticle(basic.particleColor);  
  }
  for (let i=0; i<basic.particleValue; i++) {
    emitter_2.addParticle(basic.particleColor);  
  }
  
  let gravity = createVector(shape.gravityX, shape.gravityY);

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