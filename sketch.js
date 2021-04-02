var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var box5;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    box1 = createSprite(random(20,550));
    box1.shapeColor="grey";
    box1.velocityX=3;
    box1.velocityY=4;
    
    //creating the 2nd box here
    box2 = createSprite(100,550,100,80);
    box2.shapeColor="blue";
    
    //creating the third box here
    box3 = createSprite(210,550,100,80);
    box3.shapeColor="red";
    
    //creating 4th box here
    box4 = createSprite(320,550,100,80);
    box4.shapeColor="yellow";
    
    //creating 5th box here
    box5 = createSprite(430,550,100,80);
    box5.shapeColor="green";
   
    canvas = createCanvas(600,600);
    



}

function draw() {
    background("cyan");

    music.play();
    edges=createEdgeSprites();

 box1.bounceOff(edges);

if(box2.isTouching(box1)&&box1.bounceOff(box2)){
    box1.shapeColor="blue";
    box1.velocityX=0;
    box1.velocityY=0;
    music.stop();

}

if(box3.isTouching(box1)&&box1.bounceOff(box3)){
    box1.shapeColor="red";
    box1.velocityX=0;
    box1.velocityY=0;
    music.stop();
}

if(box4.isTouching(box1)&&box1.bounceOff(box4)){
    box1.shapeColor="yellow";
    box1.velocityX=0;
    box1.velocityY=0;
    music.stop();
}

if(box5.isTouching(box1)&&box1.bounceOff(box5)){
    box1.velocityX=0;
    box1.velocityY=0;
    box1.shapeColor="green";
    music.stop();
}


drawSprites();

  
    
}
