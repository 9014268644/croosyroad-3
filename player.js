class Player{

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.spt = createSprite(this.x,this.y,50,50);
    player.spt.addAnimation("player",playerImage);
    this.spt.shapeColor = "orange";
  }

  move(xdir,ydir){
    this.spt.x += xdir*grid;
    this.spt.y += ydir*grid;
  }

  player = new Player(width/2,heigth-25);

   functionkeyPressed(){
     
    if(keyCode == UP_ARROW){
      player.move(0,-2);
    }else if(keyCode == DOWN_ARROW){
      player.move(0,2);
    }else if(keyCode == LEFT_ARROW){
      player.move(-2,0);
    }else if(keyCode == RIGHT_ARROW){
      player.move(2,0);
    }

     
   }
}