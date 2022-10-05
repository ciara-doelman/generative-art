// // drawing a line

// context.moveTo(startX, startY)
// context.lineTo(endX, endY)
// context.stroke()

// let leftToRight = Math.random() >= 0.5
// if (leftToRight) {
//   //draw top left to bottom right
// } else {
//   // draw top right to bottom left
// }

let canvas = document.getElementById('Mycanvas')
let context = canvas.getContext('2d')
let random = Math.floor(255 + Math.random() * 1)

function get_random_color() {
  let color = ''
  for (let i = 0; i < 3; i++) {
    let sub = Math.floor(Math.random() * 256).toString(16)
    color += sub.length == 1 ? '0' + sub : sub
  }
}

function setup() {
  // context.noStroke()
  for (let i = 0; i < 1000; i++) {
    context.fill(
      get_random_color(100),
      get_random_color(255),
      get_random_color(255),
      get_random_color(255)
    )
    context.ellipse(random(windowWidth), random(windowHeight), random(100))
  }
}

setup()

console.log(setup())
