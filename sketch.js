const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var chain;
var polygon, polygonImg;
var mGround, ground1, ground2;

function preload(){
    polygonImg = loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1350,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    
    box1 = new Box(650,250,30,40);
    
    box2 = new Box(650,320,30,40);
    box3 = new Box(700,320,30,40);
    box4 = new Box(600,320,30,40);
    
    box5 = new Box(650,390,30,40);
    box6 = new Box(700,390,30,40);
    box7 = new Box(600,390,30,40);
    box8 = new Box(750,390,30,40);
    box9 = new Box(550,390,30,40);
    
    box10 = new Box(650,460,30,40);
    box11 = new Box(700,460,30,40);
    box12 = new Box(750,460,30,40);
    box13 = new Box(600,460,30,40);
    box14 = new Box(550,460,30,40);
    box15 = new Box(500,460,30,40);
    box16 = new Box(800,460,30,40);

    
    box17 = new Box(1140,100,30,40);
    
    box18 = new Box(1140,170,30,40);
    box19 = new Box(1190,170,30,40);
    box20 = new Box(1090,170,30,40);
    
    box21 = new Box(1140,240,30,40);
    box22 = new Box(1190,240,30,40);
    box23 = new Box(1090,240,30,40);
    box24 = new Box(1240,240,30,40);
    box25 = new Box(1040,240,30,40);

    mGround = new Ground(width/2,height,width,20);
    
    ground1 = new Ground(650,505,390,20);
    ground2 = new Ground(1140,285,290,20);

    polygon = Bodies.circle(150,300,40);
    World.add(world,polygon);

    chain = new Chain(this.polygon,{x : 150, y : 300});
    
}

function draw(){
    Engine.update(engine);
    background(rgb(138,43,226));
    
    rectMode(CENTER);
    imageMode(CENTER);

    chain.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
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
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    mGround.display();

    ground1.display();
    ground2.display();
  
    image(polygonImg,polygon.position.x,polygon.position.y,60,60);

    textSize(22);
    textFont("Fanstasy")
    fill("white")
    text("Drag the HEXAGONAL STONE and release it, to hit it towards the blocks...",80,100)

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode === 32){
        chain.attach(this.polygon)
    }
}
