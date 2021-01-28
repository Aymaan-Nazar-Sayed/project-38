var square1,square2,square3,square4,square5,square6;



function setup() {
  createCanvas(1200,800);
  createSprite(400, 200, 50, 50);
  square1=createSprite(400,500,80,150);
  square2=createSprite(600,600,80,150);
  square3=createSprite(800,500,80,150);
  square4=createSprite(1000,600,80,150);
  square5=createSprite(100,600,250,200)

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}