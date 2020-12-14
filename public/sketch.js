let socket = io();
let myColor = "white";

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);
socket.on("newPlayer", newPlayer);

function newPlayer(newPlayerColor){
  console.log(newPlayerColor);

  push();
  fill("lightblue");
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height / 2, windowWidth, 50);

  textSize(30)
  fill(newPlayerColor);
  text("New player joined: " + newPlayerColor, width / 2, height / 2);
  pop();
}

function setColor(assignedColor){
  myColor = assignedColor;
}

function newConnection(){
  console.log("your id: " + socket.id);
}

function drawOtherMouse(data){
 push();
 fill(data.color);
  ellipse(data.x, data.y, 10);
 pop();
}

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background("lightblue");
   //welconme
   push()
   textSize(30);
   textAlign("center");
   fill(myColor);
   text("welcome" + myColor, width / 2, height / 2);
   pop();
}

function draw() {
  // put drawing code here
}

function mouseMoved(){
  push();
  fill("myColor");
  ellipse(mouseX, mouseY, 10);
  pop();

  //create message
  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
  }

  //send to server
  socket.emit("mouse", message);
}
