var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database, positionDB;
function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  createCanvas(1500,700);
  database=firebase.database();
var positionDB=database.ref("balloon/position")
positionDB.on("value",readPosition)
  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    //code to move air balloon in left direction
    changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    //code to move air balloon in right direction
    changePosition(1,0)
  }
  else if(keyDown(UP_ARROW)){
    //code to move air balloon in up direction
    changePosition(0,-1)
  }
  else if(keyDown(DOWN_ARROW)){
    //code to move air balloon in down direction
    changePosition(0,1)
  }
  
  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function readPosition(data){
positionDB=data.val();
balloon.x=positionDB.x;
balloon.y=positionDB.y;
}
function changePosition(xinc,yinc){
  database.ref("balloon/position").set({x:positionDB.x+xinc,y:positionDB.y+yinc})
  }
  