let levelArray = ["Level One","Level Two","Level Three","Level Four"]
let level = 0

let blueval = 0
let greenval = 0


let score = 0
let scoresubtracter= 100

let homescale =1
let onelevelscale =1
let twolevelscale = 1
let threelevelscale = 1




function LevelDisplay() {
  textAlign(CENTER)
  if(level < 2){blueval = 255}
  else{blueval = 0}
  if(level > 0){greenval = 255}
  else{greenval = 0}
  fill(0,greenval,blueval)
  stroke(0)
  textSize(40)
  text(levelArray[level],width/2,height/12)
}

function ScoreDisplay(){
  textAlign(LEFT)
  fill(blueval,0,greenval)
  stroke(0)
  textSize(30)
  text('Score : '+ score,width/20,height/12)
  
}

function ScoreAddReset(){
  scoresubtracter = 1000
}

function ScoreCounter(){
  scoresubtracter --
  if(scoresubtracter<-499){
    score += scoresubtracter
    complete = true
  }
  
}

function LevelUP(){
  if(XP>=NeededXP){level= level+1; NeededXP = floor(10**(level+1.4)); }
}

function LevelSwitch(lvl){
  XP = 0
  level = lvl
  NeededXP = floor(10**(level+1.4))
  score = 0
}

function LevelClick(){
  rectMode(CENTER)
  textAlign(CENTER)
  fill(0,255,0)
  rect(width-width/200-width/100,height/50,threelevelscale*width/50)
  fill(0,255,255)
  rect(width-width/200-width/100-width/50,height/50,twolevelscale*width/50)
  fill(0,0,255)
  rect(width-width/200-width/100-width/50-width/50,height/50,onelevelscale*width/50)
  fill(homepager,homepageg,homepageb)
  rect(width-width/200-width/100-width/50-width/50-width/50,height/50,homescale*width/50)
  
  if(mouseX<width-width/200-width/100+width/100 && mouseX>width-width/200-width/100-width/100&& mouseY<height/50+width/100&&mouseY>height/50-width/100){threelevelscale = 0.9 
  if(mouseIsPressed==true){LevelSwitch(2)}}
  else{threelevelscale = 1}
  
  if(mouseX<width-width/200-width/50-width/100+width/100 && mouseX>width-width/100-width/100-width/200-width/100-width/100&& mouseY<height/50+width/100&&mouseY>height/50-width/100){twolevelscale = 0.9 
  if(mouseIsPressed==true){LevelSwitch(1)}}
  else{twolevelscale = 1}
  
   if(mouseX<width-width/200-width/50-width/50-width/100+width/100 && mouseX>width-width/50-width/100-width/100-width/200-width/100-width/100&& mouseY<height/50+width/100&&mouseY>height/50-width/100){onelevelscale = 0.9 
  if(mouseIsPressed==true){LevelSwitch(0)}}
  else{onelevelscale = 1}
  
  if(mouseX<width-width/200-width/50-width/50-width/50-width/100+width/100 && mouseX>width-width/50-width/50-width/100-width/100-width/200-width/100-width/100&& mouseY<height/50+width/100&&mouseY>height/50-width/100){homescale = 0.9 
  if(mouseIsPressed==true){loadIn()
                          homePage = true
                           setTimeout(homepageLoad,750)
                          }
  }
  else{homescale = 1}
}