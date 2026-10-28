carX = 0
carX2 = 1000

function setup() {
    createCanvas(1000, 1000);
}

function draw() {

    background(220);
    for(let pH = 0; pH < 100; pH++){
        drawSkyscraper(pH * 30, random(50, 200), 30, 650, 120,155, 240, 0)
    }
    
    fill(125)
    rect(0, 500, 1000, 500)

    if(carX < 1100){
        carX += 3
    }else{
        carX = random(-100, -30)
    }
    if(carX2 > -100){
        carX2 -= 3
    }else{
        carX2 = random(1100, 1500)
    }
    drawRoad (300, 2, 0, 680, 1000, 75, 100); 

    cart (100, 625, 'orange', 'black', 'yellow',)
    store(200, 580, "cAr", "DAY");
    store(400, 580, "retail", "DAY");
    store(200, 800, "shoe", "DAY");
    store(400, 800, "resturant", "DAY");
    store(600, 580, "bank", "DAY");
    car(false, 0, carX, 745, 50, 14, 50)
    car(false, 1, carX2, 800, 50, 14, 50)
} 