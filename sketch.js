
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObj=new Paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  fill("black");
  textSize(22);
  text("press up arrow key to throw the paper", 100, 70);
 
  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:130,y:-145});

    
  	}
}





