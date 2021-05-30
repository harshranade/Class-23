const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var box1,box2;
var ground;


function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
 engine = Engine.create()
 world = engine.world
box1 = new Box(200,200,50,50)
box2 = new Box(220,100,40,80)
ground = new Ground(200,390,400,20)

 
}

function draw() {
  background("black");  
  Engine.update(engine)
  box1.display()
  box2.display()
  ground.display()

  
drawSprites();
text(mouseX + "," + mouseY,200,20)
}