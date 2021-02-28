var helicopterIMG,packageIMG,packageSprite,packageBody,ground,side1,side2,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

//packageSprite = createSprite(320,155,10,10)
//packageSprite.addImage(packageIMG)
//packageSprite.scale = 0.3;


	engine = Engine.create();
	world = engine.world;

	side1 = new Sides(400,680,200,20)

	side2 = new Sides(295,640,20,100)

	side3 = new Sides(495,640,20,100)

var packageBody_options={
	restitution:0.7
}


	packageBody = Bodies.circle(350,155,10,packageBody_options)
World.add(world,packageBody)
//packageBody.addIMG(packageIMG)


var ground_options={
	isStatic:true
}

ground = Bodies.rectangle(400,690,800,10,ground_options)
World.add(world,ground)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

side1.display()
side2.display()
side3.display()

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)

  

//packageBody.addImage(packageIMG)

keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Engine.update(engine)

ellipseMode(RADIUS)
  ellipse(packageBody.position.x,packageBody.position.y,10,10)

 }
}