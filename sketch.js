var cat,cat1_image,cat_ani,cat4_ani;
var ground,ground_image;
var mouse,mouse1_image,mouse_ani,mouse4_ani;

function preload() {
    //load the images here
    cat1_image = loadImage("images/cat1.png");
    cat_ani = loadAnimation("images/cat2.png","images/cat3.png");
    cat4_ani = loadAnimation("images/cat4.png");

    ground_image = loadImage("images/garden.png");

    mouse1_image = loadImage("images/mouse1.png");
    mouse_ani = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4_ani = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    ground = createSprite(500,400,20,20);
    ground.addImage(ground_image);
    ground.scale = 0.8;

    cat = createSprite(700,600,300,20);
    cat.addImage(cat1_image);
    cat.scale = 0.12;

    mouse = createSprite(200,600,50,20);
    mouse.addImage(mouse1_image);
    mouse.scale = 0.084;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2 ){
        cat.velocityX = 0;
        cat.addAnimation("cats_ani",cat4_ani);
        cat.changeAnimation("cats_ani");
        cat.x = 260;

        mouse.addAnimation("mouses_ani",mouse4_ani);
        mouse.changeAnimation("mouses_ani");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){

    mouse.addAnimation("mouseTeasing",mouse_ani); 
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 15;

    cat.velocityX = -6;
    cat.addAnimation("cat_running",cat_ani);
    cat.changeAnimation("cat_running");
    cat.frameDelay = 3;
}


}
