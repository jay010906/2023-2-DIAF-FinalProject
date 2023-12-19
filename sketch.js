let gui;
let gui2;

let targetColor = 0; 
let easing = 0.01; 
let bgColor = 0;

let basic = {

  particleValue : 0,
  particleValueMin : 0,
  particleValueMax : 10,
  particleValueStep : 1,

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
  createCanvas(600, 600);
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

  bgColor += (targetColor - bgColor) * easing;
  background(bgColor);
    
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


  if (mouseIsPressed) {
    for (let i = 0; i < basic.particleValue; i++) {
      let particleColor = basic.particleColor; 
      emitter.addParticle(particleColor);
    }
    for (let i = 0; i < basic.particleValue; i++) {
      let particleColor = basic.particleColor;
      emitter_2.addParticle(particleColor);
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
 }

function mousePressed() {
  targetColor = 255;
}

function mouseReleased() {
  targetColor = 0;
}