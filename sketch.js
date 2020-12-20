
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,400,40)
    ground1 = new Ground(600,650,1200,10)
	dustbin1 = new Dustbin(790,580,15,130) 
	dustbin2 = new Dustbin(910,580,15,130) 
	dustbin3 = new Dustbin(850,635,105.5,19) 
	

	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  drawSprites();

  paper1.display();
  ground1.display();
  dustbin1.display();	
  dustbin2.display();	
  dustbin3.display();	
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:61,y:-100})
	}
}


