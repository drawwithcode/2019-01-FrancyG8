function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  frameRate(24);
  background("blue");
}

function draw() {
  // put drawing code here

  // external border
  strokeWeight(10);
  stroke("tomato");
  noFill();
  rect(0, 0, width, height);


  if (frameCount < 180) {

  // text
  push();
    let s = 'UPSIDE';
    fill(lerpColor(color("magenta"),color("yellow"),frameCount/180));
    noStroke();
    textStyle(BOLD);
    textSize(100);
    textAlign(CENTER,CENTER);
    text(s, width/2, height/2);
  pop();

  // central animation
  translate(width/2,height/2);
  noFill();
  stroke(lerpColor(color("magenta"),color("yellow"),frameCount/180));
  strokeWeight(1);
  line(width/4, 0, cos(frameCount*2)*width/4, sin(frameCount*2)*width/4);
  line(width/4, 0, cos(frameCount*2)*width/4, -sin(frameCount*2)*width/4);

  stroke(lerpColor(color("peachpuff"),color("lightgreen"),frameCount/180));
  strokeWeight(1);
  line(-(width/4), 0, -cos(frameCount*2)*width/4, sin(frameCount*2)*width/4);
  line(-(width/4), 0, -cos(frameCount*2)*width/4, -sin(frameCount*2)*width/4);

  // background animation
  push();
  stroke("tomato");
  strokeWeight(1);
  line(width/2, 0, cos(frameCount*2)*width, sin(frameCount*2)*width);
  line(-(width/2), 0, -(cos(frameCount*2)*width), sin(frameCount*2)*width);
  pop();

  // square animations
  push();
    translate(0,0);
    rotate(frameCount*3);
    stroke("aquamarine");
    strokeWeight(1);
    square(300,0,55);
  pop();

  }

  if (frameCount == 180 ) {
  background("black");
  }

  if (frameCount > 180 ) {
  // external border
  strokeWeight(10);
  stroke("red");
  noFill();
  rect(0, 0, width, height);

  // text
  push();
    let s = 'DOWN';
    fill(lerpColor(color("black"),color("red"),frameCount/540));
    noStroke();
    textStyle(BOLD);
    textSize(100);
    textAlign(CENTER,CENTER);
    text(s, width/2, height/2);
  pop();

  push();
    let t = 'move your mouse to change your reality';
    strokeWeight(1);
    stroke("white");
    textStyle(ITALIC);
    textSize(20);
    textAlign(CENTER,CENTER);
    text(t, width/2, height/7);
  pop();

  // central animation
  translate(width/2,height/2);
  noFill();
  stroke(lerpColor(color("yellow"),color("red"),frameCount/360));
  strokeWeight(1);
  line(width/4, 0, cos(frameCount*2)*width/4, sin(frameCount*2)*width/4);
  line(width/4, 0, cos(frameCount*2)*width/4, -sin(frameCount*2)*width/4);

  stroke(lerpColor(color("lightgreen"),color("blue"),frameCount/360));
  strokeWeight(1);
  line(-(width/4), 0, -cos(frameCount*2)*width/4, sin(frameCount*2)*width/4);
  line(-(width/4), 0, -cos(frameCount*2)*width/4, -sin(frameCount*2)*width/4);


  // square animations
  push();
    translate(0,0);
    rotate(frameCount*3);
    stroke("blue");
    strokeWeight(2);
    square(50,50,mouseX,mouseY);
  pop();

  }

  if (frameCount == 540 ) {
  background("black");
  noLoop();
  }

  if (frameCount == 540 ) {
  push();
    let s = 'FIGHT THE DEMOGORGON';
    fill('red');
    noStroke();
    textStyle(BOLD);
    textSize(100);
    textAlign(CENTER,CENTER);
    text(s, 0, 0);
  pop();
  }

}
