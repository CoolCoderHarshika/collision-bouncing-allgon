var fixedrect;
var movingrect;
var dog;
var cat;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(430, 200, 70, 100);
  movingrect=createSprite(550, 200, 100, 70);
  cat=createSprite(100,300,40,40);
  dog=createSprite(200,300,40,40);
  fixedrect.velocityX=3
  movingrect.velocityX=-3
  dog.velocityX=-4;
  cat.velocityX=4;
}

function draw() {
  background("orange"); 
  //movingrect.x=mouseX
  //movingrect.y=mouseY
  if(isTouching(dog,cat))
  {
  dog.shapeColor="black"
  cat.shapeColor="black"
    //fixedrect.visible=false;
  }
  else
  {
    dog.shapeColor="red"
    cat.shapeColor="red"
    
  }
  bounceOff();
  drawSprites();
}
function isTouching(movingrect,fixedrect)
{
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2)
    {
    // movingrect.shapeColor="black"
     //fixedrect.shapeColor="black"
     return true;
    }
    else
    {
      //movingrect.shapeColor="pink"
      //fixedrect.shapeColor="pink"
      return false;
    }
    

}
function bounceOff()
{
 if( movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2)
   {
     movingrect.velocityX=movingrect.velocityX*(-1) 
     fixedrect.velocityX=fixedrect.velocityX*(-1) 

   }
   if( movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
      fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2)
      {
        movingrect.velocityY=movingrect.velocityY*(-1) 
     fixedrect.velocityY=fixedrect.velocityY*(-1) 

      }
}
