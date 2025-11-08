// ====================================================
//  UNIVERSAL GOLD HELPER
// ====================================================
function goldHighlight(x, y, size) {
  push();
  noStroke();
  fill(255, 240, 100, 180);
  ellipse(x, y, size * 1.6);
  fill(255, 255, 200, 90);
  ellipse(x, y, size * 2.2);
  pop();
}

// ====================================================
//  ANIMATION CLASSES
// ====================================================

// --- 1. orbitMouse ---
class orbitMouse {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.angle = random(TWO_PI);
    this.radius = random(60, 180);
    this.size = random(35, 60);
    this.c = color(random(255), random(255), random(255));
    this.gold = random(1) > 0.985;
    this.goldchecked = false;
  }

  display() {
    this.angle += 0.02;
    let targetX = mouseX + cos(this.angle) * this.radius;
    let targetY = mouseY + sin(this.angle) * this.radius;
    this.x = lerp(this.x, targetX, 0.1);
    this.y = lerp(this.y, targetY, 0.1);

    noStroke();
    if (this.gold) {
      goldHighlight(this.x, this.y, this.size);
      fill(255, 220, 60);
    } else fill(this.c);
    ellipse(this.x, this.y, this.size);
  }

  checker() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.size * 1.2 && this.gold && mouseIsPressed) {
      complete = true; score += scoresubtracter; background(bgcolor);
    }
  }
  clickTimer() { if (this.gold && !this.goldchecked) { setTimeout(()=>this.solidRed(),750); this.goldchecked=true; } }
  solidRed() { this.c=color(255,0,0); this.gold=false; }
}

// --- 2. waveSweep ---
// --- FIXED waveSweep (gold waits until visible before timer starts) ---
class waveSweep {
  constructor() {
    this.y = random(height);
    this.speed = random(1.5, 3);
    this.x = -200;
    this.hue = random(255);
    this.gold = random(1) > 0.985;
    this.goldchecked = false;
    this.visible = false; // new flag
  }

  display() {
    colorMode(HSB);
    this.hue = (this.hue + 0.5) % 255;
    this.x += this.speed;

    // determine when object becomes visible
    if (this.x > -50 && this.x < width + 200) {
      this.visible = true;
    }

    noStroke();

    if (this.gold) {
      fill(50, 255, 255);
      rect(this.x, this.y, 140, 70, 15);
      goldHighlight(this.x + 60, this.y + 30, 90);
    } else {
      fill(this.hue, 200, 255);
      rect(this.x, this.y, 120, 60, 10);
    }

    // reset once fully past the screen
    if (this.x > width + 250) {
      this.reset();
    }

    colorMode(RGB);
  }

  checker() {
    if (
      mouseX > this.x - 80 &&
      mouseX < this.x + 160 &&
      mouseY > this.y - 40 &&
      mouseY < this.y + 100 &&
      this.gold &&
      mouseIsPressed
    ) {
      complete = true;
      score += scoresubtracter;
      background(bgcolor);
    }
  }

  clickTimer() {
    // only start countdown *after* gold object is visible
    if (this.gold && !this.goldchecked && this.visible) {
      setTimeout(() => this.solidRed(), 750);
      this.goldchecked = true;
    }
  }

  solidRed() {
    this.gold = false;
  }

  reset() {
    this.x = -200;
    this.y = random(height);
    this.hue = random(255);
    this.gold = random(1) > 0.985;
    this.goldchecked = false;
    this.visible = false;
  }
}

// --- 3. followerGlow ---
class followerGlow {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = 40;
    this.c = color(random(255), random(255), random(255));
    this.gold = random(1) > 0.985;
    this.goldchecked = false;
  }

  display() {
    this.x = lerp(this.x, mouseX, 0.05);
    this.y = lerp(this.y, mouseY, 0.05);
    let shimmer = abs(sin(frameCount * 0.1)) * 15;

    noStroke();
    if (this.gold) {
      goldHighlight(this.x, this.y, this.size + shimmer);
      fill(255, 230, 60);
    } else fill(this.c);
    ellipse(this.x, this.y, this.size + shimmer);
  }

  checker() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.size * 1.3 && this.gold && mouseIsPressed) {
      complete = true; score += scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){setTimeout(()=>this.solidRed(),750);this.goldchecked=true;} }
  solidRed(){ this.c=color(255,0,0); this.gold=false; }
}

// --- 4. chaosTriangles ---
class chaosTriangles {
  constructor() {
    this.cx = random(width);
    this.cy = random(height);
    this.angle = random(TWO_PI);
    this.rotSpeed = random(0.01, 0.03);
    this.triangles = [];
    for (let i = 0; i < 10; i++) {
      this.triangles.push({
        radius: random(40, 100),
        size: random(20, 40),
        hue: random(255),
        phase: random(TWO_PI)
      });
    }
    this.gold = random(1) > 0.985;
    this.goldchecked = false;
  }

  display() {
    push();
    translate(this.cx, this.cy);
    rotate(this.angle);
    this.angle += this.rotSpeed;
    if (this.gold) goldHighlight(0, 0, 120);
    for (let t of this.triangles) {
      let x = cos(t.phase + frameCount * 0.02) * t.radius;
      let y = sin(t.phase + frameCount * 0.02) * t.radius;
      noStroke();
      if (this.gold) fill(255, 230, 60);
      else fill((t.hue + frameCount) % 255, 150, 200);
      triangle(x, y, x + t.size / 2, y - t.size, x - t.size / 2, y - t.size);
    }
    pop();
  }

  checker() {
    if (dist(mouseX, mouseY, this.cx, this.cy) < 120 && this.gold && mouseIsPressed) {
      complete = true; score += scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){setTimeout(()=>this.solidRed(),750);this.goldchecked=true;} }
  solidRed(){ this.triangles.forEach(t=>t.hue=0); this.gold=false; }
}

// --- 5. laserGrid ---
class laserGrid {
  constructor() {
    this.offset = random(1000);
    this.gold = random(1) > 0.99;
    this.goldchecked = false;
    this.cx = width / 2;
    this.cy = height / 2;
  }

  display() {
    strokeWeight(2);
    for (let i = 0; i < width; i += 40) {
      stroke((i * 2 + frameCount) % 255, 100, 255);
      line(i, 0, i + sin(frameCount * 0.03 + i * 0.1) * 20, height);
    }

    if (this.gold) {
      let gx = this.cx + sin(frameCount * 0.05) * 100;
      let gy = this.cy;
      goldHighlight(gx, gy, 120);
      noStroke();
      fill(255, 230, 60);
      ellipse(gx, gy, 80);
    }
  }

  checker() {
    let gx = this.cx + sin(frameCount * 0.05) * 100;
    let gy = this.cy;
    if (dist(mouseX, mouseY, gx, gy) < 80 && this.gold && mouseIsPressed) {
      complete = true; score += scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){setTimeout(()=>this.solidRed(),750);this.goldchecked=true;} }
  solidRed(){ this.gold=false; }
}

// --- 6. bouncingComet ---
class bouncingComet {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.vx = random(-4, 4);
    this.vy = random(-4, 4);
    this.size = random(40, 70);
    this.c = color(random(255), random(255), random(255));
    this.gold = random(1) > 0.985;
    this.goldchecked = false;
  }

  display() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;

    noStroke();
    if (this.gold) {
      goldHighlight(this.x, this.y, this.size);
      fill(255, 230, 80);
    } else fill(this.c);
    ellipse(this.x, this.y, this.size);
  }

  checker() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.size * 1.2 && this.gold && mouseIsPressed) {
      complete = true; score += scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){setTimeout(()=>this.solidRed(),750);this.goldchecked=true;} }
  solidRed(){ this.c=color(255,0,0); this.gold=false; }
}

// --- 7. rippleExplosion ---
class rippleExplosion {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.radius = 0;
    this.expanding = true;
    this.gold = random(1) > 0.985;
    this.goldchecked = false;
  }

  display() {
    if (this.expanding) this.radius += 2;
    if (this.radius > 200) { this.radius = 0; this.x=random(width); this.y=random(height); }

    noFill();
    strokeWeight(3);
    if (this.gold) {
      goldHighlight(this.x, this.y, this.radius / 2);
      stroke(255, 230, 60);
    } else stroke(100, 200, 255);
    ellipse(this.x, this.y, this.radius);
  }

  checker() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.radius / 2 && this.gold && mouseIsPressed) {
      complete = true; score += scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){setTimeout(()=>this.solidRed(),750);this.goldchecked=true;} }
  solidRed(){ this.gold=false; }
}

// --- 8. spiralBloom ---
class spiralBloom {
  constructor() {
    this.cx = random(width);
    this.cy = random(height);
    this.size = random(40, 70);
    this.gold = random(1) > 0.985;
    this.goldchecked = false;
  }

  display() {
    push();
    translate(this.cx, this.cy);
    noFill();
    strokeWeight(2);
    for (let i = 0; i < 15; i++) {
      let angle = i * 0.4 + frameCount * 0.03;
      let r = i * 8;
      if (this.gold) stroke(255, 230, 80);
      else stroke((i * 15 + frameCount) % 255, 150, 200);
      ellipse(cos(angle) * r, sin(angle) * r, this.size / 3);
    }
    if (this.gold) goldHighlight(0, 0, this.size * 1.5);
    pop();
  }

  checker() {
    if (dist(mouseX, mouseY, this.cx, this.cy) < this.size * 1.3 && this.gold && mouseIsPressed) {
      complete = true; score += scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){setTimeout(()=>this.solidRed(),750);this.goldchecked=true;} }
  solidRed(){ this.gold=false; }
}

// --- 9. gravitySwirl ---
class gravitySwirl {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.angle = random(TWO_PI);
    this.gold = random(1) > 0.985;
    this.goldchecked = false;
  }

  display() {
    push();
    translate(this.x, this.y);
    for (let i = 0; i < 10; i++) {
      let r = 10 + i * 10;
      let a = this.angle + i * 0.4;
      if (this.gold) stroke(255, 230, 60, 200);
      else stroke(150, 200, 255, 150);
      noFill();
      ellipse(cos(a) * r, sin(a) * r, r);
    }
    if (this.gold) goldHighlight(0, 0, 100);
    this.angle += 0.02;
    pop();
  }

  checker() {
    if (dist(mouseX, mouseY, this.x, this.y) < 100 && this.gold && mouseIsPressed) {
      complete = true; score += scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){setTimeout(()=>this.solidRed(),750);this.goldchecked=true;} }
  solidRed(){ this.gold=false; }
}

// --- 10. rainbowPulse ---
class rainbowPulse {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(50, 90);
    this.hue = random(255);
    this.gold = random(1) > 0.985;
    this.goldchecked = false;
  }

  display() {
    colorMode(HSB);
    this.hue = (this.hue + 1) % 255;
    let pulse = sin(frameCount * 0.1) * 10;
    noStroke();
    if (this.gold) {
      fill(50, 255, 255);
      ellipse(this.x, this.y, this.size + pulse);
      goldHighlight(this.x, this.y, this.size);
    } else {
      fill(this.hue, 255, 255);
      ellipse(this.x, this.y, this.size + pulse);
    }
    colorMode(RGB);
  }

  checker() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.size * 1.2 && this.gold && mouseIsPressed) {
      complete = true; score += scoresubtracter; background(bgcolor);
    }
  }
  clickTimer(){ if(this.gold&&!this.goldchecked){setTimeout(()=>this.solidRed(),750);this.goldchecked=true;} }
  solidRed(){ this.gold=false; }
}
