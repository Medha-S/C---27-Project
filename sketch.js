
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var bob1,bob2,bob3,bob4,bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,30,350,40);
	bob1 = new Bob(300,240,20);
	bob2 = new Bob(350,240,20);
	bob3 = new Bob(400,240,20);
	bob4 = new Bob(450,240,20);
	bob5 = new Bob(500,240,20);
	rope1 = new Rope(bob1.body,{x:300, y:50});
	rope2 = new Rope(bob2.body,{x:350, y:50});
	rope3 = new Rope(bob3.body,{x:400, y:50});
	rope4 = new Rope(bob4.body,{x:450, y:50});
	rope5 = new Rope(bob5.body,{x:500, y:50});

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(225);
  Engine.update(engine);

  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() 
{
 if (keyCode === UP_ARROW)
  {
	Matter.Body.setStatic(bob1.body, false);
	Matter.Body.setStatic(bob2.body, false);
	Matter.Body.setStatic(bob3.body, false);
	Matter.Body.setStatic(bob4.body, false);
	Matter.Body.setStatic(bob5.body, false);
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-10}); 
  }
}

