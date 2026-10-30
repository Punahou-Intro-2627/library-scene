let carX = 800
let carMoving = true

function setup() {
  createCanvas(800,600);
  // bg
    background('lightblue');
for (let skyscraperX = 0; skyscraperX <= 800; skyscraperX += 55) {
    drawSkyscraper(skyscraperX, random(300, 400), 50, 1000, random(100,140), random(135,175), random(220,250),0);
}
}
function draw() {
    sun();
    // main focus
drawRoad (240, 2, 0, 510, 800, 50, 0, 1);
store(650, 430, "BANK", "on");
store(450, 430, "shoe", "off");
store(250, 430, "car", "on");
store(50, 430, "restaurant", "off")
// trainStation(300, 300, 'teal', 40, 55, 'orange');
trafficlight(40,410,100);
mph(620,410,100,50);
cart(30,475,'yellow', 'grey', 'white');
car(true, 1, carX, 590, 255, 157, 0);
carX -= 2
if (carX <= -45) {
    carX = 800
}
pigeon(550,410);
residentialBuilding(color(39, 43, 43), 95, 460, 170, 40, 130, 460, 180, 420, 230, 460, color(110, 38, 14), 100, 500, 160, 500, color(171, 171, 171), 35, color(184, 222, 222), 31, 13);
} 

function mouseClicked() {
    textSize(random(10,100))
    text('☁️',mouseX,mouseY);
}
function sun() {
    stroke('orange')
    fill('yellow')
    circle(400,150,100);
}