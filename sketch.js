const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper_ball;
var ground;
var dustbin;
var engine,world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Rect(1200,650);
	paper_ball = new Crumpled_ball(100,600,10);
	ground =new Ground(800,650,1600,20);

	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	})

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);	  
	  
 	dustbin.display();
	paper_ball.display();
	ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:12,y:-12})
	}
}