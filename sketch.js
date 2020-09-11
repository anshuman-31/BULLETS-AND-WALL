var car,wall;
var speed,weight;
var thickness;
var bullet;

function setup() {
  createCanvas(1600,400);
speed=random(223,321)
weight=random(30,52)
thickness=random(22,83);

 car=createSprite(50, 200, 50, 50);
 car.velocityX=-10;
wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor(80,80,80)

if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=speed;
  var deformation=0.5 * weight * speed * speed/22509;
  if(deformation<180 && deformation>100)
 {
    car.shapeColor=color(255,0,0);
 }

if(deformation<180 && deformation>100)
 {
    car.shapeColor=color(230,230,0,0)
 }

if(deformation<100)
 {
  car.shapeColor=color(0,255,0);
 }
}  
}

function draw(){
background(225)
drawsprite();
}

function hascollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wall.leftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
   return true
  }
   return false;
}

if(hascollided(bullet,wall))
{
 bullet.velocityX=0;
 var damage=0.5 * weight * speed *speed/(thickness *thickness *thickness);

if(damage>10)
{

   wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
   wall.shapeColor=color(0,255,0);
}






}






