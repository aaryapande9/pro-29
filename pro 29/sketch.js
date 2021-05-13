
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var holder,ball,ground;
var stand1,stand2;
var slingshot;
var polygon_IMG;

function preload(){
  polygon_IMG = loadImage("polygonIMG.png")
}


function setup(){
  engine = Engine.create();
  world = Engine.world;

createCanvas(990,400)
//creating objects using Ground.js
ground = new Ground(800,350,50,100);
stand1 = new Ground(380,300,270,10);
stand2 = new Ground(700,200,200,20);
 //creating blocks using Box.js
 //set 1/level 1
 block1 = new Box(280,275,30,40);
 block1.shapeColor=("blue");
 block2 = new Box(310,275,30,40);
 block2.shapeColor("blue");
 block3 = new Box(340,275,30,40);
 block3.shapeColor=("blue");
 block4 = new Box(370,275,30,40);
 block4.shapeColor=("blue");
 block5 = new Box(400,275,30,40);
 block5.shapeColor=("blue");
 block6 = new Box(430,275,30,40);
 block6.shapeColor=("blue");
 block7 = new Box(460,275,30,40);
 block7.shapeColor=("blue");
 //level 2
 block8 = new Box(280,275,30,40);
 block8.shapeColor=("blue");
 block9 = new Box(280,275,30,40);
 block9.shapeColor=("blue");
 block10 = new Box(280,275,30,40);
 block10.shapeColor=("blue");
 block11 = new Box(280,275,30,40);
 block11.shapeColor=("blue");
 block12 = new Box(280,275,30,40);
 block12.shapeColor=("blue");
//level 3
block13 = new Box(340,195,30,40);
block13.shapeColor=("green");
block14 = new Box(370,195,30,40);
block14.shapeColor=("green");
block15 = new Box(400,195,30,40);
block15.shapeColor=("green");
block16 = new Box(430,195,30,40);
block16.shapeColor=("green");
block17 = new Box(460,195,30,40);
block17.shapeColor=("green");
//level 4
block18 = new Box(385,115,30,40);
block18.shapeColor=("black");
//set 2/lelvel 1
Block1 = new Box(640,175,30,40);
Block1.shapeColor=("blue");
Block2 = new Box(640,175,30,40);
Block2.shapeColor=("blue");
Block3 = new Box(640,175,30,40);
Block3.shapeColor=("blue");
Block4 = new Box(640,175,30,40);
Block4.shapeColor=("blue");
Block5 = new Box(640,175,30,40);
Block5.shapeColor=("blue");
// level 2
Block6 = new Box(670,135,30,40);
Block6.shapeColor=("green");
Block7 = new Box(670,135,30,40);
Block7.shapeColor=("green");
Block8 = new Box(670,135,30,40);
Block8.shapeColor=("green");
//level 3
Block9 = new Box(700,95,30,40);
Block9.shapeColor=("pink");
//ball with slings
ball = Bodies.circle(50,200,20);
World.add(world,ball);
slingshot = new Slingshot(ball,{x:200,y:200})


  createSprite(400, 200, 50, 50);
}

function draw() {
  background("white"); 
  //displaying 
  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();

  imageMode (CENTER);
  ball = addImage("polygon_IMG")
Slingshot.display();

  drawSprites();
}

function MouseDragged(){
  Matter.body.setPosition(ball,{x:MouseX,y:MouseY})
}

function MouseReleased(){
  slingshot.fly();
}