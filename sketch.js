var bg,bg2,form,system,code,security;
var score=0;
var scary;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  scary = loadSound("scary.mp3")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  fill("white");
  textSize(25);
  text("'Welcome to Treasure Hunt Game!", 375, 40);
  scary.play();

  
  textSize(18);
  text("Score : "+score,900,50);
  fill("white");
  
  if(score === 3){
    clear();
    background(bg2);
    fill("magenta");
    textSize(40);
    text("TREASURE UNLOCKED!",250,200);
  }
    scary.play();
  
  drawSprites();
}
