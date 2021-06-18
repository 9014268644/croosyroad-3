var grid = 50;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;

function preload()
{
 carAnimation1 = loadAnimation("images/car1.png");
 carAnimation2 = loadAnimation("images/car2.png");
 playerAnimation = loadAnimation("images/Player-03.png");
 logAnimation = loadAnimation("images/log4.png");
}

function setup() {
  createCanvas(displayWidth,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  for(var i = 0;i<6;i++);{
     
    var bottomGrass1 = createSprite(683,heigth-50-(i*400),width,grassHeigth);
    if(i%2 === 0)
    {
      var road = createSprite(683,heigth-150-(i*400)-grassHeigth,width,300);
      road.shapeColor = "black";
    }
    bottomGrass1.shapecolor = "grey";
  }
  
   for(var i = 0;i<40;i++){
     cars = newcar(2);
     carGroup1.add(cars.spt);
   }

   for(i = 1;i<logGroup1.length;i++){
      if(logGroup1[i].x<0)
      {
        logGroup1[i].x = width;
      }
   }

   if(carGroup1.isTouching(player.spt)){
     player.spt.x = width/2;
     player.spt.y = heigth-75;
   }
   
 }

function draw() {
  background("skyblue");

  translate (0,-player.spt.y+height-150);

  if(logGroup1.isTouching(player.spt)){
    player.spt.x = player.spt.x-3;
  }
  else if((player.spt.y>height-1550 && player.spt.y<height-1300)||
  (player.spt.y<height-500 && player.spt.y>height-850)||
  (player.spt.y>height)||
  (player.spt.x<0)||
  (player.spt.x>width)){

    player.spt.x = width/2;
    player.spt.y = height-75;
  }


  drawSprites();
}

