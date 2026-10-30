carX = 0

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
let color1=28 + (frameCount % 400)
    let color2=46 + (frameCount % 400)
    background(1,color1,color2);
    let sunHeight = 350 - (frameCount % 400)

    //sun
    fill('orange')
    circle(150, sunHeight, 100)

    residentialBuilding(color(39, 43, 43), 95, 260, 170, 40, 130, 260, 180, 220, 230, 260, color(110, 38, 14), 100, 300, 160, 500, color(171, 171, 171), 35, color(184, 222, 222), 31, 20);
    highway(750, 240, 180)

    drawRoad(255, 5, 0, 650, 500, 75, 150, 3)
    drawRoad(255, 5, 500, 650, 500, 75, 150, 3)
    


    
    store(700, 570, "BAnK", "day");
    store(900, 570, "CaR", "ON");
    cart (25, 620, 'orange', 'black', 'yellow',)
    cart (100, 620, 'orange', 'black', 'yellow',)

    trainStation(500, 620, 'teal', 40, 60, 'orange')
    store(200, 570, "RETAIL", "oFf");
    
    car(true, 0, carX, 660, 40, 150, 50)
    car(true, 0, carX-250, 660, 178, 50, 50)
     car(true, 0, carX-400, 680, 40, 50, 50)
      car(true, 0, carX-600, 700, 40, 80, 123)
       car(true, 0, carX-200, 800, 40, 80, 123)
        car(true, 0, carX, 800, 40, 80, 123)
    carX += 1



    
    
}
