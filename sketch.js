var p, c, ball, edges, l;

function setup() {
  createCanvas(windowWidth,windowHeight)
  p = createSprite(width-(width/24), height/2,width/30,height/3.5);
  c = createSprite(width/24, height/2,width/30,height/3.5);
  ball = createSprite(width/2,height/2, width/30);
  l = createSprite(width/2,height/2, width/600,height)
  edges = createEdgeSprites();
}

function draw() {
  background("black");
  ball.height=ball.width
  fill('white')
  textSize(width/24)
  text('press space to serve',width/3, height/20)
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
  if(ball.isTouching(edges[1])){
    ball.y=height/2
    ball.x=width/2
    ball.velocityX=0
    ball.velocityY=0
  }
  drawSprites();
}