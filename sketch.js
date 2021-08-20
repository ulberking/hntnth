const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hero,hero_img,enemy,enemy_img,shoot,ground,bg,myWorld,myEngine
function preload(){
bg=loadImage("bg.png")
hero_img = loadImage("bird.png")
enemy_img=loadImage("enemy.png")
}
function setup(){
  createCanvas(1700,800);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  ground= new Ground(5000,805,10000,10)
  hero = new Hero(25,25,25,25)

}
function draw(){
  background("white")
  image(bg,0,0,10000,800)
  Engine.update(myEngine);
  ground.display()
  hero.display()
}
