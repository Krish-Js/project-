var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600 ,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60, height/2);
  speed=random(80,190);
  weight=random(400,150);
car.velocityX= speed;

  if(wall.x-car.x < (car.width=wall.width/2)){
car.velocityX=0;
var deformation=0.5 * weight * speed *speed/22500;
if(deformatio>180)
{
  car.shapeColor="red";
}
if(deformation<180 && deformation>100)
{
    car.shapeColor="yellow";
}
if(deformation<100){
car.shapeColor="green";


}
if(car.isTouching(wall)){
car.velocityX=speed/2;

}

}










}

function draw() {
  background(255,255,255);  
  drawSprites();
}