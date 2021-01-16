const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup(){
    createCanvas(1350, 600);
    bg=loadImage("images/GamingBackground.png")

	engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,600,2000,20);
    box1=new Box(1000,575);
    box2=new Box(1000,525);
    box3=new Box(1000,475);
    box4=new Box(1000,425);
    box5=new Box(1000,375);
    box6=new Box(1000,325);
    box6A=new Box(1000,275);

    box7=new Box(1100,575);
    box8=new Box(1100,525);
    box9=new Box(1100,475);
    box10=new Box(1100,425);
    box11=new Box(1100,375);
    box12=new Box(1100,325);

    box13=new Box(1200,575);
    box14=new Box(1200,525);
    box15=new Box(1200,475);
    box16=new Box(1200,425);
    box17=new Box(1200,375);
    box18=new Box(1200,325);
    box18B=new Box(1200,275);
    
    boxStrip=new BoxStrip(1100,225);

    
    ball=new Superhero(500,100);
   chain=new Shot(ball.body,{x:800 , y:100})
   
   monster=new Monster(1100,130);
 
}
function draw(){
    background(bg);
    Engine.update(engine);
    textSize(32);
    fill("orange");
    text("Press Space to start",200,200);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box6A.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    
    box18B.display();
    boxStrip.display();

    ground.display();
    ball.display();
    chain.display();
    monster.display();

    MouseDragged();
    
}

function MouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function keyPressed(){
    if(keyCode===32){
    Matter.Body.setStatic(boxStrip.body,false);
    }
   
}