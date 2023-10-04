let counter = 0;
let w = window.innerWidth;
let h = window.innerHeight;
let circNum = 50;
console.log(circNum);

var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse;

var engine = Engine.create(),
  world = engine.world;

var render = Render.create({
  element: document.querySelector("#container"),
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false,
  },
});

var leftWall = Bodies.rectangle(
  0,
  window.innerHeight * 0.5,
  1,
  window.innerHeight,
  { isStatic: true }
);

var rightWall = Bodies.rectangle(
  window.innerWidth,
  window.innerHeight * 0.5,
  1,
  window.innerHeight,
  { isStatic: true }
);
var bottomWall = Bodies.rectangle(
  window.innerWidth * 0.5,
  window.innerHeight,
  window.innerWidth * 6,
  1,
  { isStatic: true }
);

World.add(engine.world, [rightWall, leftWall, bottomWall]);

Engine.run(engine);

Render.run(render);

let sprites = [
  { texture: "../img/partner/logo_BNB_Chain.svg" },
  { texture: "../img/partner/Meitalk.svg" },
  { texture: "../img/partner/plastichero.svg" },
  { texture: "../img/partner/Real Research.svg" },
  { texture: "../img/partner/sigma.svg" },
  { texture: "../img/partner/strmcoin.png" },
  { texture: "../img/partner/angry-monkey-black.png" },
  { texture: "../img/partner/tnc group.svg" },
];

var addCircle = function (randomNumSize) {
  return Bodies.circle(Math.random() * window.innerWidth + 30, 250, 100, {
    mass: 10,
    render: {
      lineWidth: 5,
      sprite: {
        texture: sprites[Math.floor(Math.random() * sprites.length)].texture,
      },
    },
    restitution: 0,
  });
};

function createCircle() {
  engine.world.gravity.y = 0.2;
  engine.world.gravity.x = 0;
  for (i = 0; i < circNum; i++) {
    let randomNumSize = Math.random() * 50;
    counter = counter + 1;
    World.add(engine.world, addCircle(randomNumSize));
  }
}
createCircle();

// add mouse control
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

mouse.element.removeEventListener("mousewheel", mouse.mousewheel); // 스크롤 이벤트 활성화

World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;
