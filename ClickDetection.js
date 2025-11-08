let clickX =0
let clickY =0
let clickS=0

function clickFalse(){
  clickX = random(width)
  clickY = random(height)
  clickS = random(10,100)
 // textSize(clickS)
 // textAlign(CENTER)
 // noFill()
  //stroke(0)
  //strokeWeight(2)
  //rectMode(CORNER)
  //rect(clickX-(1.25*clickS),clickY-(2.5*clickS/3),clickS*2.5,clickS)
  //text("Click!",clickX, clickY)
  //when its time to click this function will run
}

function ClickDisplay(){
  textSize(clickS)
  textAlign(CENTER)
  noFill()
  stroke(0)
  strokeWeight(2)
  //rectMode(CORNER)
  //rect(clickX-(1.25*clickS),clickY-(2.5*clickS/3),clickS*2.5,clickS)
  text("Click!",clickX, clickY)
  
}