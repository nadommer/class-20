var fixedRec
var movingRec


function setup() {
  createCanvas(800,400);
fixedRec = createSprite(200,200,10,50)
movingRec=createSprite(100,150,50,10)
movingRec.shapeColor="white"
fixedRec.shapeColor="white"
}

function draw() {
  background(0);  
movingRec.x = World.mouseX
movingRec.y = World.mouseY

if(movingRec.x - fixedRec.x < movingRec.width/2 + fixedRec.width/2
  && fixedRec.x - movingRec.x < movingRec.width/2 + fixedRec.width/2
  && fixedRec.y - movingRec.y < movingRec.height/2 + fixedRec.height/2 
  &&movingRec.y - fixedRec.y < movingRec.height/2 + fixedRec.height/2){
    movingRec.shapeColor="red"
    fixedRec.shapeColor="green"
  }
else{
  movingRec.shapeColor="white"
  fixedRec.shapeColor="white"
}


  drawSprites();
}