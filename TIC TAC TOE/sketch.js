let winner = 0
let box1 = 0
let box2 = 0
let box3 = 0
let box4 = 0
let box5 = 0
let box6 = 0
let box7 = 0
let box8 = 0
let box9 = 0
let img1
let img2



// i assigned boxes as zeroes
let gameover = false
let turn = 1
// two turns
function preload() {
  img1= loadImage("a.png")
  img2=loadImage("b.png")}
function setup() {
  createCanvas(600, 600)
}

function draw() {
  background(256)
  
  

  stroke(0)
  strokeWeight(8)

  line(200, 0, 200, 600)
  line(400, 0, 400, 600)
  line(0, 200, 600, 200)
  line(0, 400, 600, 400)

  if (box1 == 1) {
    fill(0)
    rect(0, 0, 200, 200)
      image(img1,0,0,200,200)
  }

  if (box1 == 2) {
    fill(256)
    rect(0, 0, 200, 200)
    image(img2,0,0,200,200)
  }

  if (box2 == 1) {
    fill(0)
    rect(200, 0, 200, 200)
      image(img1,200, 0, 200, 200)
  }

  if (box2 == 2) {
    fill(256)
    rect(200, 0, 200, 200)
    image(img2,200, 0, 200, 200)
  }

  if (box3 == 1) {
    fill(0)
    rect(400, 0, 200, 200)
     image(img1,400, 0, 200, 200)
  }

  if (box3 == 2) {
    fill(256)
    rect(400, 0, 200, 200)
    image(img2,400, 0, 200, 200)
  }

  if (box4 == 1) {
    fill(0 )
    rect(0, 200, 200, 200)
     image(img1,0, 200, 200, 200)
  }

  if (box4 == 2) {
    fill(256)
    rect(0, 200, 200, 200)
    image(img2,0, 200, 200, 200)
  }

  if (box5 == 1) {
    fill(0)
    rect(200, 200, 200, 200)
     image(img1,200, 200, 200, 200)
  }

  if (box5 == 2) {
    fill(256)
    rect(200, 200, 200, 200)
    image(img2,200, 200, 200, 200)
  }

  if (box6 == 1) {
    fill(0)
    rect(400, 200, 200, 200)
     image(img1,400, 200, 200, 200)
  
  }

  if (box6 == 2) {
    fill(256)
    rect(400, 200, 200, 200)
    image(img2,400, 200, 200, 200)
  }

  if (box7 == 1) {
    fill(0 )
    rect(0, 400, 200, 200)
     image(img1,0, 400, 200, 200)
  }

  if (box7 == 2) {
    fill(256)
    rect(0, 400, 200, 200)
    image(img2,0, 400, 200, 200)
  }

  if (box8 == 1) {
    fill(0)
    rect(200, 400, 200, 200)
    image(img1,200, 400, 200, 200)
  }

  if (box8 == 2) {
      fill(256)
    rect(200, 400, 200, 200)
    image(img2,200, 400, 200, 200)
  }

  if (box9 == 1) {
    fill(0)
    rect(400, 400, 200, 200)
     image(img1,400, 400, 200, 200)
  }

  if (box9 == 2) {
    fill(256)
    rect(400, 400, 200, 200)
    image(img2,400, 400, 200, 200)
  }

  //box different colors and places
  fill(256)
if (winner == 1){
    textSize(32)
  text("Player 1 has won the match, Rematch?", 25, 300)
  }  
  if (winner == 2){
    textSize(32)
  text("Player 2 has won the match, Rematch?", 25, 300)
  }  
  //else
   
    textSize(32)
 // text("It is a tie, Rematch?", 150, 300)
  }  
  
  

function mousePressed() {

  if (gameover == true) {
    return
  }

  if (mouseX < 200 && mouseY < 200 && box1 == 0) {
    box1 = turn

    if (turn == 1) {
      turn = 2
    } else {
      turn = 1
    }
  }

  else if (mouseX >= 200 && mouseX < 400 && mouseY < 200 && box2 == 0) {
    box2 = turn

    if (turn == 1) {
      turn = 2
    } else {
      turn = 1
    }
  }

  else if (mouseX >= 400 && mouseY < 200 && box3 == 0) {
    box3 = turn

    if (turn == 1) {
      turn = 2
    } else {
      turn = 1
    }
  }

  else if (mouseX < 200 && mouseY >= 200 && mouseY < 400 && box4 == 0) {
    box4 = turn

    if (turn == 1) {
      turn = 2
    } else {
      turn = 1
    }
  }

  else if (mouseX >= 200 && mouseX < 400 && mouseY >= 200 && mouseY < 400 && box5 == 0) {
    box5 = turn

    if (turn == 1) {
      turn = 2
    } else {
      turn = 1
    }
  }

  else if (mouseX >= 400 && mouseY >= 200 && mouseY < 400 && box6 == 0) {
    box6 = turn

    if (turn == 1) {
      turn = 2
    } else {
      turn = 1
    }
  }

  else if (mouseX < 200 && mouseY >= 400 && box7 == 0) {
    box7 = turn

    if (turn == 1) {
      turn = 2
    } else {
      turn = 1
    }
  }

  else if (mouseX >= 200 && mouseX < 400 && mouseY >= 400 && box8 == 0) {
    box8 = turn

    if (turn == 1) {
      turn = 2
    } else {
      turn = 1
    }
  }

  else if (mouseX >= 400 && mouseY >= 400 && box9 == 0) {
    box9 = turn

    if (turn == 1) {
      turn = 2
    } else {
      turn = 1
    }
  }

  if (
    (box1 == 1 && box2 == 1 && box3 == 1) ||
    (box4 == 1 && box5 == 1 && box6 == 1) ||
    (box7 == 1 && box8 == 1 && box9 == 1) ||
    (box1 == 1 && box5 == 1 && box9 == 1) ||
    (box3 == 1 && box5 == 1 && box7 == 1) ||
    (box1 == 1 && box4 == 1 && box7 == 1) ||
    (box2 == 1 && box5 == 1 && box8 == 1) ||
    (box3 == 1 && box6 == 1 && box9 == 1)
  ) {
    
    gameover= true
     winner = 1
  }

  else if (
    (box1 == 2 && box2 == 2 && box3 == 2) ||
    (box4 == 2 && box5 == 2 && box6 == 2) ||
    (box7 == 2 && box8 == 2 && box9 == 2) ||
    (box1 == 2 && box5 == 2 && box9 == 2) ||
    (box3 == 2 && box5 == 2 && box7 == 2) ||
    (box1 == 2 && box4 == 2 && box7 == 2) ||
    (box2 == 2 && box5 == 2 && box8 == 2) ||
    (box3 == 2 && box6 == 2 && box9 == 2)
  ) {
    
    gameover = true
    winner = 2
  }
 
  }

  
