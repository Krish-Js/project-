var car,wall;
var speed,weight;
function setup() {
  createCanvas(1200 ,400);
  car=createSprite(50, 200, 100, 100);
  wall=createSprite(1100,200,60, height/2);
  speed=random(5,90);
  weight=random(40,1500);
car.velocityX= speed;

wall.shapeColor=(80,80,80);

//if(car.isTouching(wall));
//car.velocityX=0;

if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5 * weight * speed *speed/22500;
  if(car.isTouching(wall) && deformation>180)
  {
    car.shapeColor="red";
  }
  if(car.isTouching(wall) && deformation<180 && deformation>100)
  {
      car.shapeColor="yellow";
  }
  if(car.isTouching(wall) && deformation<100){
  car.shapeColor="green";
  }

  }  
}

function draw() {
  background(255,255,255);  
  
  drawSprites();

}
