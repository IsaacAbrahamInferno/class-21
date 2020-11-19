var fixedRect, movingRect;
var object3;

function setup() {
  createCanvas(1600,800);
  fixedRect = createSprite(200,200,50,80);
  movingRect = createSprite(400,200,80,30);
fixedRect.velocityX=5;
movingRect.velocityX=-5;
}

function draw() {
  background("pink");  
bounce(fixedRect,movingRect);

  
  drawSprites();
}

