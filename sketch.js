
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rooftop;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5,
var chain1,chain2,chain3,chain4,chain5;
//function preload()
//{}


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
     rooftop=new roof(400,200,80,10);
    bobObj1=new Bob(380,400,5);
    bobObj2=new Bob(400,400,5);
    bobObj3=new Bob(420,400,5);
    bobObj4=new Bob(440,400,5);
    bobObj5=new Bob(360,400,5);
      chain1=new Rope(bobObj1,{x:380,y:200})
      chain2=new Rope(bobObj2,{x:400,y:200})
      chain3=new Rope(bobObj3,{x:420,y:200})
      chain4=new Rope(bobObj4,{x:440,y:200})
      chain5=new Rope(bobObj5,{x:360,y:200})
}


function draw() {
  rectMode(CENTER);
  background("blue");
  rooftop.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  //bobObj2.display();
 drawSprites();
if(keyDown(leftArrow)) {
  bobObj1.velocityX=-3;
}
}



