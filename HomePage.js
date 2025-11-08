let homepager = 0
let homepageg = 0
let homepageb = 0
let rvel = 1
let gvel = -1
let bvel = 1
let tutorial = false
let homepagescalarone = 1
let homepagescalartwo = 1
let buttoncolorone = 255
let buttoncolortwo = 255
let tutorialscalarone = 1
let tutorialbuttoncolor = 255
let loading = false
let trackpad = false
let trackpadred = 255
let trackpadgreen = 0
let trackpadval = 1
let trackchanger = true


function homepageGeneration(){
  homepager = floor(random(255))
  homepageg = floor(random(255))
  homepageb = floor(random(255))
}



function homepage(){
  background(homepager,homepageg,homepageb)
  homepagescalarone = 1
  homepagescalartwo = 1
  
  if(tutorial == false){
  fill(0)
    rectMode(CENTER)
  textAlign(CENTER)
 strokeWeight(0)
  textSize(50)
  text("TimeWasterz", width/2, height/12)
  textSize(20)
  text("the most annoying game that actually has a reward at the end in history", width/2,height/9)
  textSize(10)
  text("and dont go back to the homepage mid game", width/1.2,height/8)
    
    if(mouseX>(width/2)-(width/8)&& mouseX<(width/2)+width/8
    && mouseY>(height/2-height/24)&& mouseY<(height/2+height/24)
    ){
    homepagescalarone=0.9;
     if(mouseIsPressed==true){
     buttoncolorone=200
     setTimeout(loadIn, 500)
       setTimeout(loadDone,1250)
     }
     else{buttoncolorone=255}
     }
  fill(buttoncolorone)
 strokeWeight(1)
    rect(width/2,height/2,width*homepagescalarone/4,height*homepagescalarone/12)
  textSize(30*homepagescalarone)
    fill(0)
  text("PLAY!",width/2, height/2+height/60)
    
  if(mouseX>width/2-width/6 && mouseX<width/2+width/6 && mouseY>height/1.65-height/32 &&mouseY<height/1.65+height/32){
    homepagescalartwo=0.9
    if(mouseIsPressed==true){
      buttoncolortwo=200
      setTimeout(loadIn,500)
      setTimeout(tutorialLoad,1250)
    }
    else{buttoncolortwo=255}
  }
    
    textSize(30*homepagescalartwo)
    fill(buttoncolortwo)
  rect(width/2,height/1.65,width*homepagescalartwo/3,height*homepagescalartwo/16)
    fill(0)
  text("How to Play",width/2, height/1.65+height/64)
    
    if(mouseX>width/2-width/3 && mouseX<width/2+width/3 &&
      mouseY> height/1.65+height/20-height/32 && mouseY< height/1.65+height/20+height/32 && mouseIsPressed == true){
      
      if(trackpad == false && trackchanger == true){
        trackpadred = 0
        trackpadgreen = 255
        trackpad = true
        trackpadval = 1.5
        trackchanger = false
        print("trackpadyes")
      }
      if(trackpad == true && trackchanger == true){
        trackpadred= 255
        trackpadgreen = 0
        trackpad = false
        trackpadval = 1
        trackchanger = false
print("trackpadno")
      }
      setTimeout(trackreset, 250)
    }
    
    fill(trackpadred, trackpadgreen, 0)
    rect(width/2, height/1.65+height/20,width/3,height/32)
    textAlign(CENTER)
    fill(0)
    textSize(15)
    text("trackpad?",width/2,height/1.65+height/20+height/128)
}}


function howtoPlay(){
  tutorialscalarone = 1
  if(tutorial == true){
    rectMode(CENTER)
    textAlign(CENTER)
    textSize(40)
    text("How to Play!", width/2, height/10)
    textSize(20)
    text("its easy!", width/2, height/8)
    text("click on the click to gain XP", width/2,height/4)
    text("sometimes when you click an animation will display!", width/2, height/4+height/10)
    text("find the golden object and click it!", width/2, height/4+height/5)
    text("if you cant wait to see all the animations,",width/2, height/4+height/5+height/10)
    text("you can switch levels in the top right", width/2, height/4+height/5+height/10+height/20)
    text("collect as much score as you can while working towards the prize!", width/2, height/4+height/2.5+ height/20)
    if(mouseX>width/10-width/6 && mouseX< width/10+width/6 && mouseY> height/16-height/10 && mouseY< height/16+height/10){
      tutorialscalarone = 0.9
      if(mouseIsPressed == true){
        tutorialbuttoncolor = 200
        setTimeout(loadIn, 500)
        setTimeout(homepageLoad, 1250)
      }
    }
    
    fill(tutorialbuttoncolor)
    rect(width/10,height/16,(width/6)*tutorialscalarone,(height/10)*tutorialscalarone) 
    fill(0)
    textSize(50*tutorialscalarone)
    text("Back",width/10,height/16+height*tutorialscalarone/50)
  
  
  }
  
}


function homepagemodifier(){
  homepager = homepager+rvel
  homepageg = homepageg+gvel
  homepageb = homepageb+bvel
  if (homepager>254||homepager<1){rvel=-rvel}
  if (homepageg>254||homepageg<1){gvel=-gvel}
  if (homepageb>254||homepageb<1){bvel=-bvel}
  
}


function loadIn(){
  loading = true
}

function loadDone(){
  homePage = false
  loading = false
}

function tutorialLoad(){
  tutorial= true
  loading = false
}
function homepageLoad(){
  tutorial = false
  loading = false
}
function trackreset(){
  trackchanger = true
}