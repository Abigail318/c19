var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,800);
  speed = random(55, 90);
weight = random(400, 1500);
car = createSprite(100, 400, 50, 50);
car.velocityX = speed;
wall = createSprite(1000, 400, 100, 500);
}

function draw() {
  background(255,255,255); 
  if(wall.x - car.x < (car.width + wall.width)/2)
  { car.velocityX = 0
    var deformation = 0.5 * weight * speed * speed/22500;
   if( deformation>180)
{
  car.shapeColor="red";
}
  if(deformation<180 && deformation>100)
  {
    car.shapeColor = "yellow";
  }
  if(deformation<100)
  {
    car.shapeColor="green";
  }


  } 
  drawSprites();
}