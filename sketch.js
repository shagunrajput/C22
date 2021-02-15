const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var myWorld, myEngine, box;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var option ={
    isStatic: true 
  }

 box =Bodies.rectangle(100,100,60,60);
 World.add(myWorld,box);

ground=Bodies.rectangle (200,390,400,20,option);
World.add(myWorld,ground);

var ball_option = {
  restitution: 1
}

ball=Bodies.circle (200,50,20,ball_option);
World.add(myWorld,ball);



 console.log(box);
 console.log(box.position.x);
 console.log(box.position.y);

}

function draw() {
  background(0); 
  Engine.update(myEngine);
 
  fill ("blue");
  rectMode(CENTER);
  rect(200,200,50,50); 

  fill ("yellow");
  rect (box.position.x,box.position.y,60,60);

fill ("lightgreen");
rect(ground.position.x,ground.position.y,400,20);

fill ("pink");
ellipseMode (RADIUS);

ellipse(ball.position.x,ball.position.y,20,20);
ellipse(50,50,40,20);
}