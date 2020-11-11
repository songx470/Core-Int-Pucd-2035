/*
 * @name Animation
 * @description The circle moves.
 */
// Where is the circle
let x, y;

function setup() {
  createCanvas(800, 800);
  // Starts in the middle
  x = width / 4;
  y = height;
}

function draw() {
  background(95, 141, 252);
  
  // Draw a circle
  stroke(000);
  fill(254, 255, 254);
  ellipse(x, y, 24, 24);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

