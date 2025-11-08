function prize(){
  
  image(cam, 0, 0, width, width * cam.height / cam.width);
      noStroke()
      fill(0)
      textSize(40)
      textAlign(CENTER)
      text("Here's your prize!", width/2, height/12)
      textSize(30)
      text("Bragging rights and getting to see how tired you look", width/2, height/1.15)
      textAlign(LEFT)
    fill(homepager, homepageg,homepageb)
      stroke(2)
      textSize(40)
      text("Final Score :"+score, width/16, height/1.5)
}