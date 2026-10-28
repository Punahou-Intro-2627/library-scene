carX = 0

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(220)
    highway(750, 240, 180)
    trainStation(500, 620, 'teal', 40, 60, 'orange')

    drawRoad(255, 4, 0, 650, 500, 75, 150, 3)
    drawRoad(255, 4, 500, 650, 500, 75, 150, 3)

    
    store(200, 570, "RETAIL", "oFf");
    store(700, 570, "BAnK", "day");
    cart (25, 620, 'orange', 'black', 'yellow',)
    cart (100, 620, 'orange', 'black', 'yellow',)
    
    car(true, 0, carX, 660, 40, 150, 50)
    car(true, 0, carX-250, 660, 178, 50, 50)
     car(true, 0, carX-400, 680, 40, 50, 50)
      car(true, 0, carX-600, 700, 40, 80, 123)
    carX += 1
    
    
}
