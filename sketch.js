var movingR

var fixedR

var rect1

function setup() {
  createCanvas(1600,400);
  movingR  = createSprite(800, 300, 50, 50);
  movingR.velocityY = -5
  movingR.shapeColor = "green"

  fixedR  = createSprite(500, 300, 50, 50);
  fixedR.shapeColor = "white"

  rect1 = createSprite(800,50,50,50)
  rect1.velocityY = 5
  rect1.shapeColor = "orange" 
}

function draw() {
  background("black"); 
  
  /*movingR.x = World.mouseX
  movingR.y = World.mouseY*/
  /*if(isTouching(rect1,movingR)){
    fill ("pink")
      text ("Objects are Touching",400,200)
      rect1.shapeColor = "red"
      movingR.shapeColor = "red"
  }
  else{
    fill ("green")
    text ("Objects are Apart",400,200)
    rect1.shapeColor = "yellow"
    movingR.shapeColor = "blue"
  }*/
  bounceoff(rect1,movingR)



  drawSprites();
}

