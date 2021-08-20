class Ground {
    constructor(x, y, w, h) {
      var ground_features = {
        isStatic: true,
      };
      this.ground = Bodies.rectangle(x, y, w, h, ground_features);
      World.add(myWorld, this.ground);
      this.w = w;
      this.h = h;
    }
    display() {
      rectMode(CENTER);
      fill("brown");
      rect(this.ground.position.x, this.ground.position.y, this.w, this.h);
    }
  }
  