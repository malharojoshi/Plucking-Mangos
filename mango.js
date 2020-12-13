class Mango {
  constructor(x, y) {
    var options = { isStatic: true, friction: 1 };
    this.width = 50;
    this.height = 50;
    this.radious = 25;
    this.body = Bodies.circle(x, y, this.radious, options);
    this.image = loadImage("mango.png");
    World.add(world, this.body);
  }

  dropMango() {
    Body.setStatic(this.body, false);
    console.log("true");
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 50);
    pop();
  }
}
