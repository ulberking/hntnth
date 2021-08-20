class Hero {
  constructor(x, y, w, h) {
    var hero_features = {
      restitution: 0.8,
    };
    this.hero = Bodies.rectangle(x, y, w, h, hero_features);
    World.add(myWorld, this.hero);
    this.w = w;
    this.h = h;
    this.hero_image = loadImage("bird.png");

  }
  display() {
    push();
    translate(this.hero.position.x, this.hero.position.y);
    rotate(this.hero.angle);

    imageMode(CENTER);
    image(this.hero_image, 0, 0, this.w, this.h);
    pop();
    if(keyWentDown("LEFT_ARROW")){
      console.log("hi")
      Matter.Body.applyForce(this.hero,this.hero.position,{x:-0.001,y:0})
    }
    if(keyCode==RIGHT_ARROW){
      console.log("hi")
      Matter.Body.applyForce(this.hero,this.hero.position,{x:0.001,y:0})
    }
  }
}
