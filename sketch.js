const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload() {}

function setup() {
  createCanvas(1200, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(600, 600, width, 50);
  tree = new Tree(900, 300);
  boy = new Boy(200, 550);
  mango = new Mango(1000, 250);
  mango2 = new Mango(870, 200);
  mango3 = new Mango(800, 100);
  mango4 = new Mango(780, 220);
  mango5 = new Mango(930, 100);
  mango6 = new Mango(1070, 160);
  stone = new Stone(145, 500);
  chain = new Chain(stone.body, { x: 145, y: 500 });
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(180);
  ground.display();
  tree.display();
  boy.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  chain.display();
  var mangoProp = {
    x: mango.body.position.x,
    y: mango.body.position.y,
    width: mango.width,
    height: mango.height,
  };
  var mango2Prop = {
    x: mango2.body.position.x,
    y: mango2.body.position.y,
    width: mango2.width,
    height: mango2.height,
  };
  var mango3Prop = {
    x: mango3.body.position.x,
    y: mango3.body.position.y,
    width: mango3.width,
    height: mango3.height,
  };
  var mango4Prop = {
    x: mango4.body.position.x,
    y: mango4.body.position.y,
    width: mango4.width,
    height: mango4.height,
  };
  var mango5Prop = {
    x: mango5.body.position.x,
    y: mango5.body.position.y,
    width: mango5.width,
    height: mango5.height,
  };
  var mango6Prop = {
    x: mango6.body.position.x,
    y: mango6.body.position.y,
    width: mango6.width,
    height: mango6.height,
  };
  var stoneProp = {
    x: stone.body.position.x,
    y: stone.body.position.y,
    width: stone.width,
    height: stone.height,
  };
  if (isTouching(mangoProp, stoneProp)) {
    mango.dropMango();
  }
  if (isTouching(mango2Prop, stoneProp)) {
    mango2.dropMango();
  }
  if (isTouching(mango3Prop, stoneProp)) {
    mango3.dropMango();
  }
  if (isTouching(mango4Prop, stoneProp)) {
    mango4.dropMango();
  }
  if (isTouching(mango5Prop, stoneProp)) {
    mango5.dropMango();
  }
  if (isTouching(mango6Prop, stoneProp)) {
    mango6.dropMango();
  }
}
function mouseDragged() {
  Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  chain.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    chain.attach(stone.body);
  }
}
function isTouching(object1, object2) {
  if (
    object1.x - object2.x < object1.width / 2 + object2.width / 2 &&
    object2.x - object1.x < object1.width / 2 + object2.width / 2 &&
    object2.y - object1.y < object1.height / 2 + object2.height / 2 &&
    object1.y - object2.y < object1.height / 2 + object2.height / 2
  ) {
    return true;
  } else {
    return false;
  }
}
