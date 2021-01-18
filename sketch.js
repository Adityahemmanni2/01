var tom,tomImage,tom_running,tom_Standing;
var jerry,jerry_teasing,jerryImage,jerry_magnifing;
function preload() {
tomImage=loadImage("tomOne.png");
tom_running=loadAnimation("tomTwo.png,tomThree.png");   
tom_Standing=loadImage("tomFour.png")

jerryImage=loadImage("jerryOne.png")
jerry_teasing=loadAnimation("jerryTwo.png,jerryThree.png")
jerry_magnifing=loadImage("jerryFour.png")

}

function setup(){
    createCanvas(400,400);
    tom=createSprite(322,288,10,10);
    tom.addImage(tomImage);
    tom.scale=0.1;

    jerry=createSprite(97,288,10,10);
    jerry.addImage(jerryImage);
    jerry.scale=0.1;

}

function draw() {

    background(garden.png);
   if(tom.collided(jerry)){
tom.addImage(tom_Standing);
tom.changeImage(tom_Standing);

jerry.addImage(jerry_magnifing);
jerry.changeImage(jerry_magnifing);
   }
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
 tom.velocityX=-5;
 tom.addAnimation(tom_running);
tom.changeAnimation(tom_running)
}
}
