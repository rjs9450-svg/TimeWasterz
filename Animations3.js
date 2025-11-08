// === 10 BRAND NEW ANIMATION CLASSES ===
// copy-paste directly into your game

// 1. StarSpinner – rotating star shapes
class StarSpinner {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.angle = random(TWO_PI);
    this.rotSpeed = random(-0.05, 0.05);
    this.size = 40;
    this.gold = random() < 0.03;
    this.goldchecked = false;
    this.c = this.gold ? color(255, 215, 0) : color(180, 150, 255);
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    this.angle += this.rotSpeed;
    fill(this.c);
    beginShape();
    for (let i = 0; i < 10; i++) {
      let r = i % 2 === 0 ? this.size : this.size / 2;
      let a = (TWO_PI / 10) * i;
      vertex(cos(a) * r, sin(a) * r);
    }
    endShape(CLOSE);
    pop();
  }

  solidRed() { this.c = color(255, 0, 0); this.gold = false; }
  checker() {
    if (mouseX > this.x - this.size && mouseX < this.x + this.size &&
        mouseY > this.y - this.size && mouseY < this.y + this.size &&
        this.gold && mouseIsPressed) {
      complete = true; score += scoresubtracter; background(bgcolor);
    }
  }
  clickTimer() {
    if (this.gold && !this.goldchecked) { setTimeout(() => this.solidRed(), trackpadval*750); this.goldchecked = true; }
  }
}

// 2. WaveOrb – oscillating circle along a sine wave
class WaveOrb {
  constructor() {
    this.baseY = random(height);
    this.x = random(width);
    this.size = 30;
    this.t = random(1000);
    this.gold = random() < 0.03;
    this.goldchecked = false;
    this.c = this.gold ? color(255, 230, 0) : color(100, 200, 255);
  }

  display() {
    this.t += 0.05;
    this.x += 2;
    if (this.x > width) this.x = 0;
    let y = this.baseY + sin(this.t) * 40;
    fill(this.c);
    ellipse(this.x, y, this.size);
    this.y = y;
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }
  checker(){
    if(mouseX>this.x-this.size && mouseX<this.x+this.size &&
       mouseY>this.y-this.size && mouseY<this.y+this.size &&
       this.gold && mouseIsPressed){
      complete=true; score+=scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){ setTimeout(()=>this.solidRed(),trackpadval*750); this.goldchecked=true; } }
}

// 3. NeonRipple – expanding ripples from a point
class NeonRipple {
  constructor(){
    this.x=random(width);
    this.y=random(height);
    this.radius=10;
    this.size=10;
    this.gold=random()<0.03;
    this.goldchecked=false;
    this.c=this.gold?color(255,255,150):color(100,255,200);
  }

  display(){
    noFill();
    stroke(this.c);
    strokeWeight(2);
    ellipse(this.x,this.y,this.radius);
    this.radius+=2;
    if(this.radius>200){ this.radius=10; }
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }
  checker(){
    if(dist(mouseX,mouseY,this.x,this.y)<this.size && this.gold && mouseIsPressed){
      complete=true; score+=scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){ setTimeout(()=>this.solidRed(),trackpadval*750); this.goldchecked=true; } }
}

// 4. SlidingBar – bars slide horizontally
class SlidingBar {
  constructor(){
    this.x=random(width);
    this.y=random(height);
    this.w=random(60,120);
    this.h=20;
    this.vx=random(-2,2);
    this.gold=random()<0.03;
    this.goldchecked=false;
    this.c=this.gold?color(255,230,0):color(180,100,255);
  }

  display(){
    this.x+=this.vx;
    if(this.x<0||this.x>width) this.vx*=-1;
    fill(this.c);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h,5);
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }
  checker(){
    if(mouseX>this.x-this.w/2 && mouseX<this.x+this.w/2 &&
       mouseY>this.y-this.h/2 && mouseY<this.y+this.h/2 &&
       this.gold && mouseIsPressed){
      complete=true; score+=scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){ setTimeout(()=>this.solidRed(),trackpadval*750); this.goldchecked=true; } }
}

// 5. PixelCloud – drifting pixel clusters
class PixelCloud {
  constructor(){
    this.x=random(width);
    this.y=random(height);
    this.particles=Array.from({length:8},()=>({x:random(-10,10),y:random(-10,10)}));
    this.gold=random()<0.03;
    this.goldchecked=false;
    this.c=this.gold?color(255,230,0):color(200);
  }

  display(){
    push();
    translate(this.x,this.y);
    noStroke();
    fill(this.c);
    for(let p of this.particles){
      rect(p.x+sin(frameCount*0.05)*3,p.y+cos(frameCount*0.05)*3,4,4);
    }
    pop();
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }
  checker(){
    if(mouseX>this.x-15 && mouseX<this.x+15 &&
       mouseY>this.y-15 && mouseY<this.y+15 &&
       this.gold && mouseIsPressed){
      complete=true; score+=scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){ setTimeout(()=>this.solidRed(),trackpadval*750); this.goldchecked=true; } }
}

// 6. SpiralDots – orbiting dots swirling outward
class SpiralDots {
  constructor(){
    this.angle=random(TWO_PI);
    this.radius=0;
    this.x=width/2;
    this.y=height/2;
    this.size=15;
    this.gold=random()<0.03;
    this.goldchecked=false;
    this.c=this.gold?color(255,255,100):color(150,255,200);
  }

  display(){
    this.angle+=0.1;
    this.radius+=1;
    this.x=width/2+cos(this.angle)*this.radius;
    this.y=height/2+sin(this.angle)*this.radius;
    fill(this.c);
    ellipse(this.x,this.y,this.size);
    if(this.radius>max(width,height)) this.radius=0;
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }
  checker(){
    if(mouseX>this.x-this.size && mouseX<this.x+this.size &&
       mouseY>this.y-this.size && mouseY<this.y+this.size &&
       this.gold && mouseIsPressed){
      complete=true; score+=scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){ setTimeout(()=>this.solidRed(),trackpadval*750); this.goldchecked=true; } }
}

// 7. FallingBlobs – bouncing gravity blobs
class FallingBlobs {
  constructor(){
    this.x=random(width);
    this.y=random(-100,0);
    this.vy=0;
    this.gravity=0.2;
    this.size=40;
    this.gold=random()<0.03;
    this.goldchecked=false;
    this.c=this.gold?color(255,240,100):color(100,180,255);
  }

  display(){
    this.vy+=this.gravity;
    this.y+=this.vy;
    if(this.y>height-this.size/2){ this.y=height-this.size/2; this.vy*=-0.7; }
    fill(this.c);
    ellipse(this.x,this.y,this.size);
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }
  checker(){
    if(mouseX>this.x-this.size && mouseX<this.x+this.size &&
       mouseY>this.y-this.size && mouseY<this.y+this.size &&
       this.gold && mouseIsPressed){
      complete=true; score+=scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){ setTimeout(()=>this.solidRed(),trackpadval*750); this.goldchecked=true; } }
}

// 8. ColorSwirl – rotating rainbow arcs
class ColorSwirl {
  constructor(){
    this.x=width/2;
    this.y=height/2;
    this.angle=random(TWO_PI);
    this.size=40;
    this.gold=random()<0.03;
    this.goldchecked=false;
    this.c=this.gold?color(255,255,150):color(random(255),random(255),random(255));
  }

  display(){
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    strokeWeight(6);
    stroke(this.c);
    noFill();
    arc(0,0,this.size*2,this.size*2,0,PI);
    pop();
    this.angle+=0.03;
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }
  checker(){
    if(dist(mouseX,mouseY,this.x,this.y)<this.size && this.gold && mouseIsPressed){
      complete=true; score+=scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){ setTimeout(()=>this.solidRed(),trackpadval*750); this.goldchecked=true; } }
}

// 9. GridShimmer – flickering squares on a grid
class GridShimmer {
  constructor(){
    this.x=random(width);
    this.y=random(height);
    this.gold=random()<0.03;
    this.goldchecked=false;
    this.size= this.gold ? 30 : 20;
    this.c=this.gold?color(255,230,0):color(255,random(200,255),random(200,255));
  }

  display(){
    if(frameCount%10==0 && !this.gold){
      this.c=color(random(255),random(255),random(255));
    }
    fill(this.c);
    rectMode(CENTER);
    rect(this.x,this.y,this.size,this.size);
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }
  checker(){
    if(mouseX>this.x-this.size && mouseX<this.x+this.size &&
       mouseY>this.y-this.size && mouseY<this.y+this.size &&
       this.gold && mouseIsPressed){
      complete=true; score+=scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){ setTimeout(()=>this.solidRed(),trackpadval*750); this.goldchecked=true; } }
}

// 10. HoverHalo – glowing expanding halo on hover
class HoverHalo {
  constructor(){
    this.x=random(width);
    this.y=random(height);
    this.size=35;
    this.halo=0;
    this.gold=random()<0.03;
    this.goldchecked=false;
    this.c=this.gold?color(255,240,100):color(150,200,255);
  }

  display(){
    let d = dist(mouseX,mouseY,this.x,this.y);
    this.halo = lerp(this.halo, d < 80 ? 30 : 0, 0.1);
    fill(this.c);
    ellipse(this.x,this.y,this.size);
    noFill();
    stroke(this.c);
    ellipse(this.x,this.y,this.size+this.halo);
  }

  solidRed(){ this.c=color(255,0,0); this.gold=false; }
  checker(){
    if(mouseX>this.x-this.size && mouseX<this.x+this.size &&
       mouseY>this.y-this.size && mouseY<this.y+this.size &&
       this.gold && mouseIsPressed){
      complete=true; score+=scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){ setTimeout(()=>this.solidRed(),trackpadval*750); this.goldchecked=true; } }
}
