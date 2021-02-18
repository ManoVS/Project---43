var hr,mn,sc;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

 noFill();
  strokeWeight(4)
  ellipse(200,200,300,300);

  strokeWeight(8);

  stroke(255,0,0);
  let end1 = map(sc, 0, 59 , 0, 360);
  arc(0,0,300,300,0,end1);

  stroke(0,0,255);
  let end2 = map(mn, 0, 59, 0, 360);
  arc(0,0,280,280,0,end2);

  stroke(0,255,0)
  let end3 = map(hr % 12, 0, 12 , 0, 360);
  arc(0,0,260,260,0,end3);
  
  //text(hr + ':' + mn + ':' + sc, 10, 200)

  push();
  rotate(end1);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(end2);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  push();
  rotate(end3);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  drawSprites();
}