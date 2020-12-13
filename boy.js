class Boy {
  constructor(x, y) {
    var options = { isStatic: true };
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.image = loadImage("boy.png");
    World.add(world, this.body);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 200, 200);
    pop();
  }
}
