var car1,wall;
var speed,weight;
  function setup() {
  createCanvas(800,400);
  rectMode(CENTER) 
  car1=createSprite(780, 50, 50, 20);
  car1.velocityX=speed;
  car2=createSprite(780,150, 50, 20);
  car2.velocityX=speed;
  car3=createSprite(780,250, 50, 20);
  car3.velocityX=speed;
  car4=createSprite(780,350, 50, 20);
  car4.velocityX=speed;
  wall=createSprite(1500,200,60,height/2); 
  speed=random(55,90) 
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

 if (wall.x-car2.x < (car2.width+wall.width)/2) {
  car2.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22500
  if (deformation>180) {
    car2.shapeColor=color(255,0,0)
  } 
 }
 
 if (deformation<180 && deformation>100) {
   car2.shapeColor=color(230,230,0)
 }

 if (deformation<100) {
   car2.shapeColor=color(0,255,0)
 }

if (wall.x-car3.x < (car3.width+wall.width)/2) {
  car3.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22500
  if (deformation>180) {
    car3.shapeColor=color(255,0,0)
  } 
 }
 
 if (deformation<180 && deformation>100) {
   car3.shapeColor=color(230,230,0)
 }

 if (deformation<100) {
   car3.shapeColor=color(0,255,0)
 }


if (wall.x-car4.x < (car4.width+wall.width)/2) {
  car4.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22500
  if (deformation>180) {
    car4.shapeColor=color(255,0,0)
  } 
 }
 
 if (deformation<180 && deformation>100) {
   car4.shapeColor=color(230,230,0)
 }

 if (deformation<100) {
   car4.shapeColor=color(0,255,0)
 }

}