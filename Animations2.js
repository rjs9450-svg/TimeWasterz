// === FULL 10 ANIMATION CLASSES WITH 3% GOLD AND SLOWED GRAY CIRCLES ===

class OrbitRings {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.angle = random(TWO_PI);
    this.radius = random(50, 250);
    this.speed = random(0.001, 0.003);
    this.size = random(15, 35);
    this.gold = random() < 0.03;
    this.goldchecked = false;
    this.c = this.gold ? color(255, 215, 0) : color(150);
  }

  display() {
    this.angle += this.speed;
    let px = width/2 + cos(this.angle) * this.radius;
    let py = height/2 + sin(this.angle) * this.radius;
    fill(this.c);
    ellipse(px, py, this.size);
    this.x = px;
    this.y = py;
  }

  solidRed() { this.c = color(255,0,0); this.gold = false; }

  checker() {
    if(mouseX > this.x - this.size && mouseX < this.x + this.size &&
       mouseY > this.y - this.size && mouseY < this.y + this.size &&
       this.gold && mouseIsPressed){
      complete = true;
      score += scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer() {
    if(this.gold && !this.goldchecked){
      setTimeout(()=>this.solidRed(),trackpadval*750);
      this.goldchecked = true;
    }
  }
}

// Slowed gray circles moving from center
class GrayCircles {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.vx = random(-1, 1); // slower than before
    this.vy = random(-1, 1);
    this.size = 25;
    this.gold = random() < 0.03;
    this.goldchecked = false;
    this.c = this.gold ? color(255, 215, 0) : color(120, 120, 120);
  }

  display() {
    this.x += this.vx;
    this.y += this.vy;
    fill(this.c);
    ellipse(this.x, this.y, this.size);
  }

  solidRed() { this.c = color(255,0,0); this.gold = false; }

  checker() {
    if(mouseX > this.x - this.size && mouseX < this.x + this.size &&
       mouseY > this.y - this.size && mouseY < this.y + this.size &&
       this.gold && mouseIsPressed){
      complete = true;
      score += scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer() {
    if(this.gold && !this.goldchecked){
      setTimeout(()=>this.solidRed(),trackpadval*750);
      this.goldchecked = true;
    }
  }
}

class SparkBurst {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = 30;
    this.gold = random() < 0.03;
    this.goldchecked = false;
    this.c = this.gold ? color(255, 255, 150) : color(100, 100, 255);
  }

  display() {
    let pulse = sin(frameCount*0.1)*5;
    fill(this.c);
    ellipse(this.x, this.y, this.size+pulse);
    if(this.gold){
      for(let i=0;i<4;i++){
        let angle = random(TWO_PI);
        let dist = random(10,30);
        ellipse(this.x+cos(angle)*dist, this.y+sin(angle)*dist,3);
      }
    }
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }

  checker(){
    if(mouseX>this.x-this.size && mouseX<this.x+this.size &&
       mouseY>this.y-this.size && mouseY<this.y+this.size &&
       this.gold && mouseIsPressed){
      complete=true;
      score+=scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer(){
    if(this.gold && !this.goldchecked){
      setTimeout(()=>this.solidRed(),trackpadval*750);
      this.goldchecked=true;
    }
  }
}

class ChaosTriangles {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.rot = random(TWO_PI);
    this.size = 40;
    this.gold = random() < 0.03;
    this.goldchecked = false;
    this.c = this.gold ? color(255, 230, 50) : color(150);
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rot);
    this.rot += random(-0.05,0.05);
    this.x += random(-2,2);
    this.y += random(-2,2);
    fill(this.c);
    triangle(-this.size/2,this.size/2,0,-this.size/2,this.size/2,this.size/2);
    pop();
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }

  checker(){
    if(mouseX>this.x-this.size && mouseX<this.x+this.size &&
       mouseY>this.y-this.size && mouseY<this.y+this.size &&
       this.gold && mouseIsPressed){
      complete=true;
      score+=scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer(){
    if(this.gold && !this.goldchecked){
      setTimeout(()=>this.solidRed(),trackpadval*750);
      this.goldchecked=true;
    }
  }
}

class FloatingSquares {
  constructor(){
    this.x=random(width);
    this.y=random(height);
    this.angle=random(TWO_PI);
    this.size=30;
    this.gold=random()<0.03;
    this.goldchecked=false;
    this.c=this.gold?color(255,230,80):color(100,200,255);
  }

  display(){
    this.angle+=0.03;
    this.y+=sin(this.angle)*0.5;
    this.x+=cos(this.angle)*0.5;
    push();
    translate(this.x,this.y);
    rotate(this.angle*0.5);
    fill(this.c);
    rectMode(CENTER);
    rect(0,0,this.size,this.size);
    pop();
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }

  checker(){
    if(mouseX>this.x-this.size && mouseX<this.x+this.size &&
       mouseY>this.y-this.size && mouseY<this.y+this.size &&
       this.gold && mouseIsPressed){
      complete=true;
      score+=scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer(){
    if(this.gold && !this.goldchecked){
      setTimeout(()=>this.solidRed(),trackpadval*750);
      this.goldchecked=true;
    }
  }
}

class ColorPulse {
  constructor(){
    this.x=random(width);
    this.y=random(height);
    this.size=40;
    this.gold=random()<0.03;
    this.goldchecked=false;
    this.c=this.gold?color(255,255,120):color(random(255),random(255),random(255));
  }

  display(){
    let fade=(sin(frameCount*0.05)+1)*127;
    this.c.setAlpha(fade);
    fill(this.c);
    ellipse(this.x,this.y,this.size);
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }

  checker(){
    if(mouseX>this.x-this.size && mouseX<this.x+this.size &&
       mouseY>this.y-this.size && mouseY<this.y+this.size &&
       this.gold && mouseIsPressed){
      complete=true;
      score+=scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer(){
    if(this.gold && !this.goldchecked){
      setTimeout(()=>this.solidRed(),trackpadval*750);
      this.goldchecked=true;
    }
  }
}

class SpiralFlow {
  constructor(){
    this.x=width/2;
    this.y=height/2;
    this.angle=random(TWO_PI);
    this.radius=0;
    this.size=25;
    this.gold=random()<0.03;
    this.goldchecked=false;
    this.c=this.gold?color(255,220,0):color(120,200,255);
  }

  display(){
    this.radius+=2;
    this.angle+=0.1;
    this.x=width/2+cos(this.angle)*this.radius;
    this.y=height/2+sin(this.angle)*this.radius;
    fill(this.c);
    ellipse(this.x,this.y,this.size);
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }

  checker(){
    if(mouseX>this.x-this.size && mouseX<this.x+this.size &&
       mouseY>this.y-this.size && mouseY<this.y+this.size &&
       this.gold && mouseIsPressed){
      complete=true;
      score+=scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer(){
    if(this.gold && !this.goldchecked){
      setTimeout(()=>this.solidRed(),trackpadval*750);
      this.goldchecked=true;
    }
  }
}

class TrailComets {
  constructor(){
    this.x=random(width);
    this.y=random(height);
    this.vx=random(1,3);
    this.size=50;
    this.trail=[];
    this.gold=random()<0.03;
    this.goldchecked=false;
    this.c=this.gold?color(255,230,100):color(150,150,255);
  }

  display(){
    this.x+=this.vx;
    if(this.x>width) this.x=0;
    this.trail.push({x:this.x, y:this.y});
    if(this.trail.length>10) this.trail.shift();
    noStroke();
    for(let i=0;i<this.trail.length;i++){
      let alpha=map(i,0,this.trail.length,50,255);
      this.c.setAlpha(alpha);
      fill(this.c);
      ellipse(this.trail[i].x,this.trail[i].y,this.size/2);
    }
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }

  checker(){
    if(mouseX>this.x-this.size && mouseX<this.x+this.size &&
       mouseY>this.y-this.size && mouseY<this.y+this.size &&
       this.gold && mouseIsPressed){
      complete=true;
      score+=scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer(){
    if(this.gold && !this.goldchecked){
      setTimeout(()=>this.solidRed(),trackpadval*750);
      this.goldchecked=true;
    }
  }
}

class MirrorMotion {
  constructor(){
    this.x=random(width/2);
    this.y=random(height);
    this.size=30;
    this.gold=random()<0.03;
    this.goldchecked=false;
    this.c=this.gold?color(255,230,0):color(180,180,255);
  }

  display(){
    fill(this.c);
    ellipse(this.x,this.y,this.size);
    ellipse(width-this.x,this.y,this.size);
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }

  checker(){
    if(mouseX>this.x-this.size && mouseX<this.x+this.size &&
       mouseY>this.y-this.size && mouseY<this.y+this.size &&
       this.gold && mouseIsPressed){
      complete=true;
      score+=scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer(){
    if(this.gold && !this.goldchecked){
      setTimeout(()=>this.solidRed(),trackpadval*750);
      this.goldchecked=true;
    }
  }
}

class BounceBeat {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.size = 50; // bigger for easier clicking
    this.vy = random(1, 2); // slower and smoother
    this.gold = random() < 0.03;
    this.goldchecked = false;
    this.c = this.gold ? color(255, 230, 0) : color(120, 200, 255);
  }

  display(){
    this.y += this.vy;
    if(this.y < this.size / 2 || this.y > height - this.size / 2){
      this.vy *= -1; // bounce smoothly at edges
    }
    let pulse = abs(sin(frameCount * 1)) * 10; // gentle pulse
    fill(this.c);
    ellipse(this.x, this.y, this.size + pulse);
  }

  solidRed(){ 
    this.c = color(255, 0, 0); 
    this.gold = false; 
  }

  checker(){
    if(mouseX > this.x - this.size && mouseX < this.x + this.size &&
       mouseY > this.y - this.size && mouseY < this.y + this.size &&
       this.gold && mouseIsPressed){
      complete = true;
      score += scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer(){
    if(this.gold && !this.goldchecked){
      setTimeout(() => this.solidRed(), trackpadval*750);
      this.goldchecked = true;
    }
  }
}
