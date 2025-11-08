let animationHolder=[]
let animation_one = [colorcirclefullscreen, colorSquarePulse, flashCircle, electricRing, sparkGem, sunPulse,particleAura, electricSpark, fireBlaze, starPortal]
let animation_two = [OrbitRings, GrayCircles, SparkBurst, ChaosTriangles, FloatingSquares, ColorPulse, SpiralFlow, TrailComets, MirrorMotion, BounceBeat];

let animation_three = [StarSpinner, WaveOrb, NeonRipple, SlidingBar, PixelCloud, SpiralDots, FallingBlobs, ColorSwirl, GridShimmer, HoverHalo]
let levelanimation = [animation_one, animation_two, animation_three]
let animationpicker
let generator = 0
let animationnumber = 10
// animation number is the number of animations available for each page
// each page needs to have the same amount of animations available

function AnimationSelection(){
  
  animationpicker = floor(random(animationnumber-0.01))
 print(animationpicker)
  
  generator = 0
  for(i=0; i<(1000);i++){
    animationHolder[i]=0
    
  }
}
function AnimationCreation(){
  //animationHolder[generator] = new animation[animationpicker]()
 
  
  animationHolder[generator] = new levelanimation[level][animationpicker]()
   generator++
}

function AnimationDisplayer(){
  background(bgcolor)
  for(i=0; i<floor(generator-0.01);i++){
    animationHolder[i].checker()
    animationHolder[i].display()

    animationHolder[i].clickTimer()
  }
}

  
  
