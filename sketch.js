
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;
var paperobject,groundobject;

function preload () {
	binimage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1=new Dustbin(600,665,200,30);
	bin2=new Dustbin(500,605,20,150);
	bin3=new Dustbin(700,605,20,150);

	paperobject=new Paper(100,500,30);
	
    groundobject= new Ground(400,690,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  groundobject.display();
  paperobject.display();
  bin1.display();
  bin2.display();
  bin3.display();
  imageMode(CENTER);
  image(binimage,600,600,240,170);
  drawSprites();
 
}

function keyPressed() {

	if (keyCode === UP_ARROW) {
	   
	   Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:160,y:-130});
	   
	 }
   }

