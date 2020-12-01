const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var world,engine;

function setup() {
  createCanvas(800,400);

  //hexa = new Hexagon(50,200,20,20)


  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255);  

  Engine.update(engine);

  //hexa.display();
  
  drawSprites();
}