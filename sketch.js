var fixedRect, movingRect;
var cube;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  cube = createSprite(400, 200, 100, 80);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (collision( movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  if (collision( movingRect,cube)){
    movingRect.shapeColor = "red";
    cube.shapeColor = "red";
   }
    else
    {
      movingRect.shapeColor = "green";
      cube.shapeColor = "green";
    }

  drawSprites();
}
