function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  // for (let i = 0; i < 1000; i++) {
  //   fill(random(100), random (255), random(255), random(255));
  //   ellipse(random(windowWidth), random(windowHeight), random(100))
  // }
}

function draw() {
  if (mouseIsPressed) {
    fill(random(100), random(255), random(255), random(255))
  } else {
    noFill()
  }
  ellipse(mouseX, mouseY, 80, 80)
}
