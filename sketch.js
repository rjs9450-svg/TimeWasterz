let click = true;
// you need to click when true
let clickdisplay = true;
//prevents a bunch of clicks from showing up on screen
let complete = true;
// when false there will be an animation on screen
let animationDisplay = true;
let XP = 0;
let bgcolor = 220;
let NeededXP = 25;
let homePage = true;
let cam;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgcolor);
  rectMode(CENTER);
cam = createCapture(VIDEO)
  cam.hide()
  homepageGeneration();
}

function draw() {
  homepagemodifier();
  if (loading == true) {
    background(bgcolor, 20);
  }
  if (homePage == true && loading == false) {
    homepage();
    howtoPlay()
    
  }

  if (homePage == false && loading == false) {
    background(bgcolor, 80);
    if(level >= 3){
     prize()
    }
    if(level<3){
    // removes animations and clicks once completed
    if (complete == true) {
     
      XpGain();
      cancelClickReset();
      if (click == true && clickdisplay == true) {
        clickFalse();
        clickdisplay = false;
        //when its time to click a click! will show up on screen
        // you cannot gain xp while an animation is playing out
      }
      if (click == true) {
     ClickDisplay()
      
    }
    }
    if (complete == true) {
      XpDisplay();
      LevelUP();
      LevelDisplay();
      ScoreDisplay()
      LevelClick()
      //displays progress
    }
    if (complete == false) {
      if (animationDisplay == false) {
        AnimationSelection();
ScoreAddReset()
        
        animationDisplay = true;
      }
      AnimationCreation();
      AnimationDisplayer();
      ScoreCounter()
    }

    //print(XP);
  }
}
}