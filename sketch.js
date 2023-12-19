let gui;
let gui2;

let targetColor = 0; 
let easing = 0.01; 
let bgColor = 0;

let basic = {

  particleValue : 1,
  particleValueMin : 0,
  particleValueMax : 10,
  particleValueStep : 1,

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
  attractor_2 = new Attractor_2(width / 2, height/2);
  
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
  repeller_2.setPower(shape.power);
  attractor.setPower(shape.power);
  attractor_2.setPower(shape.power);

    let gravity = createVector(shape.gravityX, shape.gravityY);

    emitter.applyForce(gravity);
    emitter.applyRepeller(repeller);
    emitter.applyAttractor(attractor);
    emitter.run();

    emitter_2.applyForce(gravity);
    emitter_2.applyRepeller(repeller_2);
    emitter_2.applyAttractor(attractor_2);
    emitter_2.run();
  
  repeller.move();
  repeller.show();
  repeller_2.move();
  repeller_2.show();
  attractor.move();
  attractor.show();
  attractor_2.move();
  attractor_2.show();

  for (let i = 0; i < basic.particleValue; i++) {
    let particleColor = basic.particleColor; 
    emitter.addParticle(particleColor);
  }
  for (let i = 0; i < basic.particleValue; i++) {
    let particleColor = basic.particleColor;
    emitter_2.addParticle(particleColor);
  }
}

function mousePressed() {
  targetColor = 255;
  attractor.position.set(random(width), random(height));
 attractor_2.position.set(random(width), random(height));
 repeller.position.set(random(width), random(height));
 repeller_2.position.set(random(width), random(height));
}

function mouseReleased() {
  targetColor = 0;
}