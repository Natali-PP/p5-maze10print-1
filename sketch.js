let x = 0;
let y = 0;
let spacing = 30;
let counter = 0
function setup() {
  const canv =  createCanvas(windowWidth, windowHeight);
  canv.style('display', 'block');
  background(0);
}

function draw() {
  stroke(255);
  strokeWeight(3)
  noFill()
  
  if (random(1) <= 0.5) {
    //rect(x, y, x + spacing, y + spacing);
    stroke(spacing*13,0, y)
    line(x, y, x + spacing, y + spacing)
    line(x + spacing, y, x + spacing, y - spacing)
    arc(x, y + spacing, spacing, spacing, PI/2, PI)
    stroke(x, y, spacing)
  } else {
    stroke(0,y, spacing*10)
    line(x, y + spacing, x + spacing, y);
    line(x, y + spacing, x + spacing, y + spacing);
    arc(x, y + spacing, spacing, spacing, 3*PI/2, TWO_PI)
    /* stroke(0)
    strokeWeight(4)
    rect(x, y, x + spacing, y + spacing) */
  }
  x += spacing;
  if (x > windowWidth) {
    x = 0;
    y +=spacing;
  }


  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ------------ 10 PRINT MAZE ORIGINAL ------------------
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* stroke(255);
if (random(1) < 0.5) {
  line(x, y, x + spacing, y + spacing);
} else {
  line(x, y + spacing, x + spacing, y);
}
x = x + spacing;
if (x > width) {
  x = 0;
  y = y + spacing;
} */