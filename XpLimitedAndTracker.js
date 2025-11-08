let timeoutID 

function XpGain(){
if(click == true){
    if(mouseIsPressed == true &&
      mouseX>(clickX-(1.25*clickS)) &&
      mouseY>(clickY-(2.5*clickS/3)) &&
      mouseX<(clickX+(1.25*clickS)) &&
       mouseY<(clickY+(0.5*clickS/3))
      ){
      click = false
      XP += 1
      //clickCover()
    }
   if(click==false){
     let rtime = floor(random(2000, 5000))
      timeoutID = setTimeout(clickreset, rtime)
     let aa = random(1)
     if(aa >0.8){
       background(bgcolor)
       complete = false
       animationDisplay = false
     }
    }}}

function cancelClickReset(){
  if(click == false && mouseIsPressed == true){
   clearTimeout(timeoutID)
    let rtime = floor(random(2000,5000))
    timeoutID = setTimeout(clickreset, rtime)
  }
}

function clickreset(){
  click=true
 clickdisplay=true
}
// powers the XpGain function

function XpDisplay(){
noStroke()
  fill(255,0,0)
  rectMode(CORNER)
  let XpWidth = map(XP, 0, NeededXP, 0, width/2)
  rect(width/4, (height/8)-(height/40), XpWidth, height/20)
  noFill()
stroke(0)
  rectMode(CENTER)
rect(width/2,(height/8),width/2,height/20)
}
//displays XP