var mt,sc,hr;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  translate(200,200);
  rotate(-90);

  hr = hour();

  mt = minute();
  // text(hr +''+ mt,200,400);
  sc = second();
  scAngle = map(sc,0,60,0,360);
  mtAngle = map(mt,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  // Draw second hand

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(5);
  line(0,0,100,0);
  
  pop();

  push();
  rotate(mtAngle);
  stroke(0,255,0);
  strokeWeight(5);
  line(0,0,85,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(5);
  line(0,0,55,0);
  pop();
 



}