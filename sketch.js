var car1,wall;
var speed,weight;
  function setup() {
  createCanvas(1600,400);
  rectMode(CENTER) 
  car1=createSprite(780, 200, 50, 20);
  speed=random(55,90) 
  car1.velocityX=speed;

  wall=createSprite(1200,200,60,height/2); 
  weight=random(400,1500) 
}

function draw() {
  background(0); 
  drawSprites();

  if (wall.x-car1.x < (car1.width+wall.width)/2) {
    car1.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500
    if (deformation>180) {
      car1.shapeColor=color(255,0,0)
    } 
   }
   
   if (deformation<180 && deformation>100) {
     car1.shapeColor=color(230,230,0)
   }
 
   if (deformation<100) {
     car1.shapeColor=color(0,255,0)
   }

}