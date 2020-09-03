var p, c, ball, edges, l;

function setup() {
  createCanvas(600, 475)
  p = createSprite(575, 250, 20, 150);
  c = createSprite(25, 250, 20, 150);
  ball = createSprite(300, 250, 20, 20);
  l = createSprite(300, 250, 1, 500)
  edges = createEdgeSprites();
}

function draw() {
  background("black");
  fill('white')
  textSize(25)
  text('press space to serve', 200, 25)
  ball.bounceOff(edges[3])
  ball.bounceOff(edges[2])
  ball.bounceOff(p)
  ball.bounceOff(c)
  p.bounceOff(edges[3])
  p.bounceOff(edges[2])
  if (keyDown('up')) {
    p.y = p.y - 10
  }
  if (keyDown('down')) {
    p.y = p.y + 10
  }
  c.y = ball.y
  if (keyDown('space')) {
    ball.velocityY = 6
    ball.velocityX = 6
  }
  if (ball.x > 599) {
    ball.x = 300
    ball.y = 250
    ball.velocityX = 0
    ball.velocityY = 0
  }
  drawSprites();
}