carX = 0

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(220);
    cart (100, height/2, 'orange', 'black', 'yellow',)
    store(200, 300, "RETAIL", "oFf");
    car(true, 0, carX, 120, 40, 50, 50)
    carX += 1
    drawRoad(255, 4, 0, 650, 500, 75, 150, 3)
    drawRoad(255, 4, 500, 650, 500, 75, 150, 3)
}

