var Play;
var End;
var gameState = Play;
var monkey,monkey_running,monkey_collided;
var ground,groundImage;
var bananaGroup,bananasImage,bananas;
var obstacleGroup,obstaclesImage,obstacles;
var SurvivalTime;


function preload(){
monkey_running = loadAnimation("sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_7.png","sprite_8.png");
  
  obstaclesImage = loadImage("obstacle.png");
  bananasImage = loadImage("banana.png","banana-1.png");
  
}
function setup(){
monkey = createSprite(110,315,20,20);
monkey.addAnimation("running",monkey_running);
  
  monkey.scale = 0.1;

ground = createSprite(240,350,800,15);
ground.velocityX = -4;
ground.x = ground.width/2;
console.log(ground.x);
  
SurvivalTime = 0;
 
bananaGroup = createGroup();
obstacleGroup = createGroup();
}
function draw(){
  background("lightBlue");
  
  if(gameState === Play){
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if (bananaGroup.isTouching(monkey)){
    SurvivalTime = SurvivalTime+1;
    bananaGroup.destroyEach();
  }
  monkey.collide(ground);
  if(keyDown("space") && monkey.y >= 100){
     monkey.velocityY = -12;
}
  //ADD GRAVITY
     monkey.velocityY = monkey.velocityY + 0.9;
  
  
   SurvivalTime=Math.ceil(frameCount/frameRate())
  }
  Food();
  obstacles1();
  if(obstacleGroup.isTouching(monkey)){
gameState = End;
   
  }
else if(gameState === End){
  
        bananaGroup.setLifetimeEach(-1);
        obstacleGroup.setLifetimeEach(-1);
        
         
         
        ground.velocityX = 0;
        }
  
  
  drawSprites();
  stroke("black")
  textSize = 40;
  text("Survival Time : " + SurvivalTime,150,50);
}

function Food()
{
  if(frameCount%80 == 0){
    bananas  = createSprite(370,140,20,20);
    bananas.addImage(bananasImage);
    bananas.scale = 0.1;
    bananas.velocityX = -7;
    bananas.lifetime = 100;
    bananas.y = 150;
    bananaGroup.add(bananas);
  }
}
function obstacles1(){
  if(frameCount%200 == 0){
  obstacles = createSprite(380,325,30,30);
  obstacles.addImage(obstaclesImage);
  obstacles.scale = 0.1;
  obstacles.velocityX = -22;
  obstacles.y = 325;
  obstacles.lifetime = 100;
    obstacleGroup.add(obstacles);
  }
  
}
