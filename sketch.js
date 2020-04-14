var frect,mrect,o1,o2,m1,m2;



function setup() {
  createCanvas(1000,2000);
 frect=createSprite(200,200,40,80);
 mrect=createSprite(200,200,80,40);
 m1=createSprite(200,1000,80,40);
 m2=createSprite(200,200,80,40);
 m1.shapeColor = "green";
 m2.shapeColor = "blue";
m1.velocityY = -5;
m2.velocityY = 5;
 o1=createSprite(300,200,40,80);
 o2=createSprite(400,200,40,80);
 mrect.shapeColor = "red";
 frect.shapeColor = "red";
 o2.shapeColor = "red";
 o1.shapeColor = "red";
}

function draw() {
  background(0);  
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
  if (isTouching(mrect,o2)) {
    mrect.shapeColor = "darkorange";
    o2.shapeColor = "darkorange";
}else{
mrect.shapeColor = "red";
o2.shapeColor = "red";
} 
bounceOff(m1,m2);

drawSprites();
}
function bounceOff(object1,object2){
  if (object1.x-object2.x<object2.width/2+object1.width/2 && object2.x-object1.x<object2.width/2+object1.width/2){
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (1);
  }
if (object1.y-object2.y<object2.height/2+object1.height/2 && object2.y-object1.y<object2.height/2+object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object1.velocityY = object1.velocityY * (1);

}
  }







