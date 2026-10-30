carX = 0
car2X = 1000

function setup() {
    createCanvas(1000, 1000);
    // draws the background and skyline
    background(130, 209, 209);
    drawSkyline(0, 900, 750, 200, 150);
}

function draw() {
    // Draws the road
    drawRoad (255, 4, 0, 800, 1000, 75, 150, 3);
    // Draws stores along the sidewalk
    store(0, 720, "Retail", "off");
    store(600, 720, "Restaurant", "day");
    store(300, 720, "shoe", "on");
    store(750, 720, "car", "day");
    // Draws signs along the sidewalk
    cautionsign(200, 720, 40);
    mph(930, 760, 40, 35);
    // Draws carts along the sidewalk
    cart(240, 765, "gray", "black", "yellow");
    cart(540, 765, "blue", "black", "red");
    // Draws cars on the road
    car(true, 0, carX, 850, 230, 100, 40);
    car(true, 0, carX + 400, 860, 50, 10, 40);
    car(true, 0, carX + 750, 840, 220, 140, 40);
    car(false, 1, car2X, 925, 50, 230, 255);
    car(true, 1, car2X - 350, 935, 230);
    car(false, 1, car2X - 600, 915, 20, 230, 120);
    carX += 1
    car2X -= 1
    
}
// function for automatically drawing a randomly generated skyline using parameters and other functions
function drawSkyline(startX, heightMax, heightMin, widthMax, widthMin) {
    for(reps = 0; reps <= 1000; reps += 1) {
        let locationX = reps * widthMax + startX + 10
        let height = random(heightMin, heightMax);
        drawSkyscraper(startX + locationX, 1000 - height, random(widthMin, widthMax), 1000, random(80, 100), random(140, 180), random(220, 255), 1);
    }
}

// function drawTraffic (carStartY, direction, lights, colorR, colorG, colorB) {
//     if(direction !== 0) {
//         for (reps = 0; reps <= 140; reps += 1) {
//             if (reps % 140 == 0) {
//                 car(lights, direction, car2X, carStartY, colorR, colorG, colorB);
//             } else {
//                 // nothing happens
//             }
//         }
//     } else {
//         for (reps = 0; reps <= 140; reps += 1) {
//             if (reps % 140 == 0) {
//                 car(lights, direction, carX, carStartY, colorR, colorG, colorB);
//             } else {
//                 // nothing happens
//             }
//         }
//     }
// }