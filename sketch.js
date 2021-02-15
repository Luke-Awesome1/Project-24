const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper_ball;
var ground;
var rect1,rect2,rect3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(400,650,800,20);

	paper_ball = new Crumpled_ball(100,600,10);

	rect1 = new Rect(500,500,20,100,PI/2);
	rect2 = new Rect(600,600,100,20,PI);
	rect3 = new Rect(600,500,20,100,PI/2);

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);
  
	ground.display();
	paper_ball.display();
	rect1.display();
	rect2.display();
	rect3.display(); 
}