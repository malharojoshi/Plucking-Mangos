class Stone {
  constructor(x, y) {
    var options = { isStatic: false, friction: 1, dencity: 1.2 };
    this.width = 50;
    this.height = 50;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("stone.png");
    World.add(world, this.body);
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
