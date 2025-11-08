class colorcirclefullscreen {
    constructor(goldselector = false){
      this.x = random(width)
      this.y = random(height)
      this.c1 = map(this.x,0,width,0,255)
      this.c2 = map(this.y,0,height,0,255)
      this.c = (0,0,0)
      this.rn = random(1)
      this.gold = false
      this.goldchecked = false
      this.size = 50
if(this.rn>0.99){this.c = color(255,215,0); this.gold=true}
      else{this.c = color(this.c1,0,this.c2)}
    }
 display(){
   fill(this.c)
   stroke(0)
  ellipse(this.x,this.y,this.size) 
   
 }
  checker(){
    if(mouseX>(this.x-this.size)
      && mouseX<(this.x+this.size)
      && mouseY>(this.y-this.size)
      && mouseY<(this.y+this.size)
      && this.gold == true
      && mouseIsPressed == true){
      complete = true
      score= score+scoresubtracter
      background(bgcolor)
    }
  }
  clickTimer(){
    if(this.gold==true && this.goldchecked == false){
      setTimeout(() => this.solidRed(), 750)
    }
  }
  solidRed(){
    this.c = color(255,0,0)
    this.gold = false
  }
  }
  
  
  class colorSquarePulse {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.c1 = map(this.x, 0, width, 0, 255);
    this.c2 = map(this.y, 0, height, 0, 255);
    this.c = color(this.c1, this.c2, 0);
    this.size = 40;
    this.gold = false;
    this.goldchecked = false;
    this.rn = random(1);
    this.growth = random(0.5, 1.5);
    if (this.rn > 0.98) { this.c = color(255, 215, 0); this.gold = true; }
  }

  display() {
    noStroke();
    fill(this.c);
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
    this.size += sin(frameCount * 0.1) * this.growth;
  }

  checker() {
    if (mouseX > this.x - this.size &&
      mouseX < this.x + this.size &&
      mouseY > this.y - this.size &&
      mouseY < this.y + this.size &&
      this.gold && mouseIsPressed) {
      complete = true;
      score += scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer() {
    if (this.gold && !this.goldchecked) {
      setTimeout(() => this.solidRed(), 750);
      this.goldchecked = true;
    }
  }

  solidRed() {
    this.c = color(255, 0, 0);
    this.gold = false;
  }
}

class flashCircle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(50, 80);
    this.baseColor = color(random(100, 255), random(100, 255), random(255));
    this.c = this.baseColor;
    this.gold = false;
    this.goldchecked = false;
    this.rn = random(1);
    if (this.rn > 0.98) {
      this.c = color(255, 215, 0);
      this.gold = true;
    }
  }

  display() {
    noStroke();

    if (this.gold) {
      // Animated flashing gold aura
      let pulse = abs(sin(frameCount * 0.15)) * 100;
      fill(255, 215 + pulse / 4, 0, 220);
      ellipse(this.x, this.y, this.size + pulse / 2);

      // Add glow halo
      fill(255, 220, 0, 80);
      ellipse(this.x, this.y, this.size + 20 + pulse);
    } else {
      fill(this.c);
      ellipse(this.x, this.y, this.size);
    }
  }

  checker() {
    if (
      mouseX > this.x - this.size &&
      mouseX < this.x + this.size &&
      mouseY > this.y - this.size &&
      mouseY < this.y + this.size &&
      this.gold &&
      mouseIsPressed
    ) {
      complete = true;
      score += scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer() {
    if (this.gold && !this.goldchecked) {
      setTimeout(() => this.solidRed(), 750);
      this.goldchecked = true;
    }
  }

  solidRed() {
    this.c = color(255, 0, 0);
    this.gold = false;
  }
}

class electricRing {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(40, 80);
    this.c = color(random(255), random(255), random(255));
    this.gold = false;
    this.goldchecked = false;
    this.rn = random(1);
    if (this.rn > 0.985) {
      this.c = color(255, 215, 0);
      this.gold = true;
    }
  }

  display() {
    noFill();

    if (this.gold) {
      strokeWeight(5);
      stroke(255, 255, 0);
      ellipse(this.x, this.y, this.size + random(-3, 3));
      stroke(255, 215, 0, 150);
      ellipse(this.x, this.y, this.size + random(-5, 5));
    } else {
      strokeWeight(3);
      stroke(this.c);
      ellipse(this.x, this.y, this.size);
    }
  }

  checker() {
    if (
      mouseX > this.x - this.size &&
      mouseX < this.x + this.size &&
      mouseY > this.y - this.size &&
      mouseY < this.y + this.size &&
      this.gold &&
      mouseIsPressed
    ) {
      complete = true;
      score += scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer() {
    if (this.gold && !this.goldchecked) {
      setTimeout(() => this.solidRed(), 750);
      this.goldchecked = true;
    }
  }

  solidRed() {
    this.c = color(255, 0, 0);
    this.gold = false;
  }
}
class sparkGem {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(50, 70);
    this.angle = random(TWO_PI);
    this.c = color(random(255), random(255), random(255));
    this.gold = false;
    this.goldchecked = false;
    this.rn = random(1);
    if (this.rn > 0.98) {
      this.c = color(255, 215, 0);
      this.gold = true;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noStroke();

    if (this.gold) {
      let sparkle = abs(sin(frameCount * 0.3)) * 255;
      fill(255, 215, sparkle);
      beginShape();
      for (let i = 0; i < 6; i++) {
        let a = (TWO_PI / 6) * i;
        let r = this.size / 2 + sin(frameCount * 0.1 + i) * 3;
        vertex(cos(a) * r, sin(a) * r);
      }
      endShape(CLOSE);

      // Glow halo
      fill(255, 220, 0, 80);
      ellipse(0, 0, this.size * 1.5);
    } else {
      fill(this.c);
      ellipse(0, 0, this.size);
    }

    pop();
  }

  checker() {
    if (
      mouseX > this.x - this.size &&
      mouseX < this.x + this.size &&
      mouseY > this.y - this.size &&
      mouseY < this.y + this.size &&
      this.gold &&
      mouseIsPressed
    ) {
      complete = true;
      score += scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer() {
    if (this.gold && !this.goldchecked) {
      setTimeout(() => this.solidRed(), 750);
      this.goldchecked = true;
    }
  }

  solidRed() {
    this.c = color(255, 0, 0);
    this.gold = false;
  }
}
class sunPulse {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(60, 90);
    this.c = color(random(255), random(255), random(255));
    this.gold = false;
    this.goldchecked = false;
    this.rn = random(1);
    if (this.rn > 0.98) {
      this.c = color(255, 215, 0);
      this.gold = true;
    }
  }

  display() {
    noStroke();

    if (this.gold) {
      let pulse = 10 + sin(frameCount * 0.2) * 20;
      for (let i = 3; i >= 0; i--) {
        fill(255, 200, 0, 60 - i * 10);
        ellipse(this.x, this.y, this.size + pulse + i * 20);
      }
      fill(255, 230, 50);
      ellipse(this.x, this.y, this.size + pulse / 2);
    } else {
      fill(this.c);
      ellipse(this.x, this.y, this.size);
    }
  }

  checker() {
    if (
      mouseX > this.x - this.size &&
      mouseX < this.x + this.size &&
      mouseY > this.y - this.size &&
      mouseY < this.y + this.size &&
      this.gold &&
      mouseIsPressed
    ) {
      complete = true;
      score += scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer() {
    if (this.gold && !this.goldchecked) {
      setTimeout(() => this.solidRed(), 750);
      this.goldchecked = true;
    }
  }

  solidRed() {
    this.c = color(255, 0, 0);
    this.gold = false;
  }
}
class particleAura {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(50, 90);
    this.particles = [];
    for (let i = 0; i < 25; i++) {
      this.particles.push({
        angle: random(TWO_PI),
        radius: random(this.size / 2, this.size),
        speed: random(0.005, 0.02),
        size: random(2, 5)
      });
    }
    this.c = color(random(255), random(255), random(255));
    this.gold = false;
    this.goldchecked = false;
    if (random(1) > 0.98) {
      this.c = color(255, 215, 0);
      this.gold = true;
    }
  }

  display() {
    noStroke();
    // draw core
    if (this.gold) {
      fill(255, 240, 100);
      ellipse(this.x, this.y, this.size * 0.6);
      fill(255, 255, 150, 120);
      ellipse(this.x, this.y, this.size);
    } else {
      fill(this.c);
      ellipse(this.x, this.y, this.size * 0.6);
    }

    // draw orbiting particles
    for (let p of this.particles) {
      p.angle += p.speed;
      let px = this.x + cos(p.angle) * p.radius;
      let py = this.y + sin(p.angle) * p.radius;
      fill(this.gold ? color(255, random(200,255), 0, 200) : this.c);
      ellipse(px, py, p.size);
    }
  }

  checker() {
    if (
      mouseX > this.x - this.size &&
      mouseX < this.x + this.size &&
      mouseY > this.y - this.size &&
      mouseY < this.y + this.size &&
      this.gold &&
      mouseIsPressed
    ) {
      complete = true;
      score += scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer() {
    if (this.gold && !this.goldchecked) {
      setTimeout(() => this.solidRed(), 750);
      this.goldchecked = true;
    }
  }

  solidRed() {
    this.c = color(255, 0, 0);
    this.gold = false;
  }
}
class electricSpark {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(40, 80);
    this.c = color(random(100,255), random(100,255), random(255));
    this.gold = false;
    this.goldchecked = false;
    if (random(1) > 0.985) {
      this.c = color(255, 230, 100);
      this.gold = true;
    }
  }

  display() {
    if (this.gold) {
      for (let i = 0; i < 5; i++) {
        strokeWeight(random(2, 5));
        stroke(255, 230, random(100, 200));
        let x1 = this.x + random(-this.size, this.size);
        let y1 = this.y + random(-this.size, this.size);
        let x2 = this.x + random(-this.size, this.size);
        let y2 = this.y + random(-this.size, this.size);
        line(x1, y1, x2, y2);
      }
      noStroke();
      fill(255, 255, 150, 180);
      ellipse(this.x, this.y, this.size);
    } else {
      noStroke();
      fill(this.c);
      ellipse(this.x, this.y, this.size * 0.8);
    }
  }

  checker() {
    if (
      mouseX > this.x - this.size &&
      mouseX < this.x + this.size &&
      mouseY > this.y - this.size &&
      mouseY < this.y + this.size &&
      this.gold &&
      mouseIsPressed
    ) {
      complete = true;
      score += scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer() {
    if (this.gold && !this.goldchecked) {
      setTimeout(() => this.solidRed(), 750);
      this.goldchecked = true;
    }
  }

  solidRed() {
    this.c = color(255, 0, 0);
    this.gold = false;
  }
}
class fireBlaze {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(50, 80);
    this.gold = false;
    this.goldchecked = false;
    this.c = color(random(255), random(100), 0);
    if (random(1) > 0.98) {
      this.c = color(255, 215, 0);
      this.gold = true;
    }
  }

  display() {
    noStroke();
    if (this.gold) {
      for (let i = 3; i >= 0; i--) {
        fill(255, 200 - i * 40, 0, 150 - i * 30);
        ellipse(this.x, this.y - i * 10, this.size - i * 10);
      }
      fill(255, 255, 100);
      ellipse(this.x, this.y - 5, this.size / 1.5 + sin(frameCount * 0.1) * 5);
      fill(255, 200, 0, 80);
      ellipse(this.x, this.y, this.size * 1.8);
    } else {
      fill(this.c);
      ellipse(this.x, this.y, this.size);
    }
  }

  checker() {
    if (
      mouseX > this.x - this.size &&
      mouseX < this.x + this.size &&
      mouseY > this.y - this.size &&
      mouseY < this.y + this.size &&
      this.gold &&
      mouseIsPressed
    ) {
      complete = true;
      score += scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer() {
    if (this.gold && !this.goldchecked) {
      setTimeout(() => this.solidRed(), 750);
      this.goldchecked = true;
    }
  }

  solidRed() {
    this.c = color(255, 0, 0);
    this.gold = false;
  }
}
class starPortal {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(60, 100);
    this.t = random(TWO_PI);
    this.gold = false;
    this.goldchecked = false;
    this.c = color(random(100,255), random(100,255), random(255));
    if (random(1) > 0.985) {
      this.c = color(255, 240, 100);
      this.gold = true;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(frameCount * 0.02);
    noFill();

    if (this.gold) {
      for (let i = 0; i < 6; i++) {
        stroke(255, 230, random(100,255), 200);
        ellipse(0, 0, this.size + i * 10);
      }
      for (let i = 0; i < 8; i++) {
        let angle = frameCount * 0.05 + i * (PI / 4);
        let x = cos(angle) * (this.size / 2);
        let y = sin(angle) * (this.size / 2);
        fill(255, 255, 120);
        ellipse(x, y, 6 + sin(frameCount * 0.2 + i) * 2);
      }
    } else {
      stroke(this.c);
      ellipse(0, 0, this.size);
    }
    pop();
  }

  checker() {
    if (
      mouseX > this.x - this.size &&
      mouseX < this.x + this.size &&
      mouseY > this.y - this.size &&
      mouseY < this.y + this.size &&
      this.gold &&
      mouseIsPressed
    ) {
      complete = true;
      score += scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer() {
    if (this.gold && !this.goldchecked) {
      setTimeout(() => this.solidRed(), 750);
      this.goldchecked = true;
    }
  }

  solidRed() {
    this.c = color(255, 0, 0);
    this.gold = false;
  }
}



