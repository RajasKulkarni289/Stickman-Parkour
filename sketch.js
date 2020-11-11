var runner,runnerImg;
var ob1,ob2,ground;
var score,ob1Group,ob2Group;
var GameOver,goImg;
var gameState="PLAY";
function preload(){
runnerImg=loadImage("tenor.gif");
goImg=loadImage("5096344108662784.jpg");
}

function setup() {
  createCanvas(400,400);
  runner=createSprite(30,200);
  runner.addImage(runnerImg);
  runner.scale=0.3;

  ob1Group=createGroup();
  ob2Group=createGroup();
  
  ground=createSprite(0,250,5000,10);
  score=0;

GameOver=createSprite(200,200);
GameOver.addImage(goImg);
GameOver.visible=false;
}
function draw() {
  background("white");
  runner.setCollider("rectangle",0,0,80,runner.height);
if(gameState==="PLAY"){  
  jumpOb();
  duckOb();
}
  score=score+1;
  if(keyDown("space")){
    runner.velocityY=-21;
  }
  runner.velocityY=runner.velocityY+1.7;
  runner.collide(ground);
  
  if(frameCount%45===0){
    runner.scale=0.3;
  }
  
  if(keyDown(DOWN_ARROW)){
    runner.scale=0.15;
  }
 
  if(runner.isTouching(ob1Group)||runner.isTouching(ob2Group)){
    gameState="END";
    runner.destroy();
    ob1Group.destroyEach();
    ob2Group.destroyEach();
    score.visible=false;
    GameOver.visible=true;
  }
  drawSprites();
  text("Score:"+score,200,50);
  score++;

}
function jumpOb(){
  if (frameCount%150===0){
    ob1=createSprite(300,215,15,70);
    ob1.velocityX=-10;
    ob1Group.add(ob1);
  }
}
function duckOb(){
  if (frameCount%50===0){
    ob2=createSprite(400,190,50,10);
    ob2.velocityX=-12;
    ob2Group.add(ob2);
  }
}