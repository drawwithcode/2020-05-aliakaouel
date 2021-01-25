let socket = io();
let myColor = "pink";
let myworld;

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on("color", setColor);
socket.on("newPlayer", newPlayer);

//text newPlayer
function newPlayer(newPlayerColor){
  console.log(newPlayerColor);

  // push();
  // fill("lightblue");
  // noStroke();
  // rectMode(CENTER);
  // rect(width / 2, height / 2, windowWidth, 50);
  //
  // textSize(30)
  // fill(newPlayerColor);
  // text("New player joined: " + newPlayerColor, width / 2, height / 2);
  // pop();
}

function setColor(assignedColor){
  myColor = assignedColor;
}

function newConnection(){
  console.log("your id: " + socket.id);
}

function drawOtherMouse(data){
 push();
 noStroke();
 fill(data.color);
  ellipse(data.x, data.y, 10);
 pop();
}

function preload(){
  // put preload code here
  myworld = loadImage('myworld.png');

  thisH1 =createElement("h1", 'Color the world,<br> create a dream <br> together');
  thisH1.position(50, 0);
  thisH1.style('font-family', 'mittwoch, serif')
  thisH1.style('font-size', '50px')
  thisH1.style('height', '10px')
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
  background("white");
   //welconme
   // push()
   // textSize(30);
   // textAlign("center");
   // fill(myColor);
   // text("welcome" + myColor, width / 2, height / 2);
   // pop();

  imageMode(CENTER);
   image(myworld, width/2, height/2, width/1.2 ,height/1.2);

}

function draw() {
  // put drawing code here

}

function mouseDragged(){
  push();
  noStroke();
  fill("pink");
  ellipse(mouseX, mouseY, 5);
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
