class Enemy {
    constructor(x, y, w, h) {
      var enemy_features = {
        restitution: 0.8,
      };
      this.enemy = Bodies.rectangle(x, y, w, h, enemy_features);
      World.add(myWorld, this.enemy);
      this.w = w;
      this.h = h;
      this.enemy_image = loadImage("enemy.png");
  
    }
    display() {
      push();
      translate(this.enemy.position.x, this.enemy.position.y);
      rotate(this.enemy.angle);
  
      imageMode(CENTER);
      image(this.enemy_image, 0, 0, this.w, this.h);
      pop();
      }
    }