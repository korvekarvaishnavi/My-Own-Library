var fixedRect, movingRect;
var rect1,rect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  rect1 = createSprite(400,350,60,50);
  rect1.shapeColor="yellow";

  rect2 = createSprite(500,200,30,70);
  rect2.shapeColor="orange";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
//function call
  if(isTouching(movingRect,rect2)){
    rect2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
    else if (isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
    }
    else if (isTouching(movingRect,rect1)){
      rect1.shapeColor = "red";
      movingRect.shapeColor = "red";
    }
    else{
      rect1.shapeColor="yellow";
      rect2.shapeColor="orange";
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green";

    }
  

  drawSprites();
}
//function definition

