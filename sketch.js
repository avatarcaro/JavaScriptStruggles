function setup() {
  createCanvas(800, 700);
  background(228, 223, 218);
  r = random(255);
  r1 = random(255);
  r2 = random(255);
  r3 = random(255);
  r4 = random(255);
  g = random(255);
  g1 = random(255);
  g2 = random(255);
  g3 = random(255);
  g4 = random(255);
  b = random(255);
  b1 = random(255);
  b2 = random(255);
  b3 = random(255);
  b4 = random(255);
  noStroke();
}

function draw() {
  background(255);
  from = color(255, 0, 0, 0.2 * 255);
  to = color(0, 0, 255, 0.2 * 255);
  c1 = lerpColor(from, to, 0.33);
  c2 = lerpColor(from, to, 0.66);
  for (let i = 0; i < 15; i++) {
    fill(r1, g1, b1, 100);
    quad(
      random(-80, 200), random(height),
      random(-20, 260), random(height),
      random(-40, 220), random(height),
      random(-40, 220), random(height)
    );
    fill(r2, g2, b2, 100);
    quad(
      random(140, 380), random(height),
      random(220, 380), random(height),
      random(195, 420), random(height),
      random(140, 380), random(height)
    );
    fill(r3, g3, b3, 100);
    quad(
      random(320, 580), random(height),
      random(320, 580), random(height),
      random(320, 580), random(height),
      random(360, 615), random(height)
    );
    fill(r4, g4, b4, 100);
    quad(
      random(500, 760), random(height),
      random(500, 760), random(height),
      random(500, 760), random(height),
      random(750, 790), random(height)
    );
    frameRate(5);
  }

  noStroke();
  fill(r, g, b, 127);
  ellipse(400, 350, 400, 400);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 400, 350);
  if (d < 210) {
    // Pick new random color values
    r = random(255);
    r1 = random(255);
    r2 = random(255);
    r3 = random(255);
    r4 = random(255);
    g = random(255);
    g1 = random(255);
    g2 = random(255);
    g3 = random(255);
    g4 = random(255);
    b = random(255);
    b1 = random(255);
    b2 = random(255);
    b3 = random(255);
    b4 = random(255);
  }
}