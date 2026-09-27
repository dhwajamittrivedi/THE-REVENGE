let img
let fonta

async function setup() {
    fonta= await loadFont("./VFCFantomen.ttf")
  img=await loadImage("./dtr.png")
   createCanvas(400,400 );
   noSmooth()
}

function draw() {
 background(167,0,0);
  fill(0)
  fill(256,0,0)
   rect(0,270,400,130)
  img.resize(30,0)
  image(img,-300,-200,1000,1000)
  textSize(140)
  textFont(fonta)
  text("REVENGE",10,130)
 
  
}