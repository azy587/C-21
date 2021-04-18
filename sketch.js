var rect1
var rect2
var rect3
var rect4
function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(400,100,80,90)
  rect3 = createSprite(400,300,10,90)
  rect4 = createSprite(200,150,100,30)
}

function draw() {
  background("blue"); 
  rect1.y = mouseY 
  rect1.x = mouseX
  
  rect1.shapeColor = "yellow"
 if( algorithm(rect1, rect4)){
 // rect1.shapeColor = "yellow"
  rect4.shapeColor = "yellow"
 }
 else{
  //rect1.shapeColor = "orange"
  rect4.shapeColor = "orange"
 }
 
 if( algorithm(rect1, rect3)){
  //rect1.shapeColor = "yellow"
  rect3.shapeColor = "yellow"
 }
 else{
  //rect1.shapeColor = "orange"
  rect3.shapeColor = "orange"
 }
 
 if( algorithm(rect1, rect2)){
  //rect1.shapeColor = "yellow"
  rect2.shapeColor = "yellow"
 }
 else{
  //rect1.shapeColor = "orange"
  rect2.shapeColor = "orange"
 }



  drawSprites();
}
