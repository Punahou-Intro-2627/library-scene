carX = 0

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    cart (100, height/2, 'blue', 'black', 'yellow',)
    store(200, 300, "RETAIL", "oFf");
    car(true, 0, carX, 120, 50, 14, 50)
    carX += 1

}