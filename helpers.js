// ==========================================
// drawRoad (from sketch.js / sketch1.js)
// ==========================================
//these are the orders of the values that you put in for this function
//I learned the following code with the default value suggested by Mrs. Berman
//I also reserached it further by using the following trustable website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

//*To the user*
//Here you might notice that in my test runs above, the last drawRoad sequence only has 5 values, this is due to my line of code below
//some values are already automatically set, so that if you don't set a value for them, then they are chosen automatically
//this way if you don't chose a roadHeight, then it will automatically be set to scale of the project we are doing
//keep in mind that you can still change these values if you want
//feel free to especially change the lanedividerShade color, I only made it a default value in case the user chose to do a road with only a single road, in which case they wouldn't need to chose a value since it wouldn't show. 
function drawRoad (roadShade, roadLanes, roadX, roadY, roadWidth, roadHeight = 50, lanedividerShade = 49, laneType = 1) {
    //the following code makes it so that the user can pick whatever number color value that they want, while still making sure that it is a shade gray no matter what they choose for a gray road
    //It gives them a choice, while also keeping the road essence 
    fill(map(roadShade, 0, 255, 0, 100))
    //this is the plain rectangle of the road using the values set by the user
    rect(roadX,roadY, roadWidth, roadLanes * roadHeight)

    //this conditional is so that the following doesn't appear unless there is more than one lane
    //this is becuase the following code contains the nested for loops for the dotted pattern
    if (roadLanes > 1) {
        if (laneType == 1) {
            //similar to the fill color used before for the basic road, this fill value allows the user to pick a color value to change the color of the dotted line
            //but no matter what value they choose, it will stick with shades of yellow to white. 
            fill(255, 250, lanedividerShade)

            //this is my nested for loop for the y value of my dotted lanedividers
            //a for loop isn't necessary if there are only 2 lanes, but it is needed if there are more than 2
            //the variable values ensures that each point is at the exact place to divide the lanes into equal parts no matter the roadHeight

            for (let lanedividerY = roadY + roadHeight; lanedividerY < roadY + roadLanes * roadHeight; lanedividerY += roadHeight) {
                //this is my nested for loop to make sure that the lane dividers repeat across the entire road
                //you might notice that for the x value as well as for the length of my lane dividers, I use numbers instead of variables
                //this is because the width should remain consistent no matter the roadWidth, its just about being repeated over and over again

                for (let lanedividerX = roadX; lanedividerX < roadWidth; lanedividerX += 30) {
                    //this is where a problem occured
                    //the last lanedivider at the end of the road would sometimes be to long and then extend off of the road
                    //this is why I made a conditional to adjust this

                    //here this conditional is making sure that the lane divider doesn't extend off of the road
                    //I chose lanedividerX + 15 because the lanedivider width is 15
                    if (lanedividerX + 15 <= roadX + roadWidth) {
                        //I kept the lanedivider length consistent no matter what, ut the roadHeight changes based on the roadHeight, so I changed that to roadHeight / 10
                        rect(lanedividerX, lanedividerY, 15, roadHeight / 10)
                    } else {
                        //the only thing changed in this else statement is shortening the last lanedivider so that it doesn't extend off of the road
                        rect(lanedividerX, lanedividerY, roadWidth - lanedividerX, roadHeight / 10)
                    }
                }
            }
        } else if (laneType == 2) {    
            for (let lanedividerY = roadY + roadHeight; lanedividerY < roadY + roadLanes * roadHeight; lanedividerY += roadHeight) {
                fill(255, 250, lanedividerShade) 
                rect (roadX, lanedividerY, roadWidth, roadHeight / 10)
            }
        } else if (laneType == 3) {
            for (let lanedividerY = roadY + roadHeight; lanedividerY < roadY + roadLanes * roadHeight; lanedividerY += roadHeight) {
                fill(255,250, lanedividerShade)
                rect (roadX, lanedividerY + roadHeight / 10, roadWidth, roadHeight / 10)
                rect (roadX, lanedividerY - roadHeight / 10, roadWidth, roadHeight / 10)
            }

        }
    }
}


// ==========================================
// cart and helper functions (from sketch3.js)
// ==========================================
//cart function
function cart (cartX, cartY, bColor, pColor, tColor,){
 console.log(typeof(bText))
     cartWheel (cartX, cartY)
     cartStop (cartX, cartY)
  
    cartBase (cartX, cartY, bColor)
   cartPillar (cartX, cartY, pColor)
   cartTop (cartX,cartY, tColor)

}





//base of cart, 50 by 30 function
function cartBase (cartX, cartY, bColor, ){
  
    noStroke ()
    fill (bColor)
    rect (cartX, cartY, 50, 30)
   
   
}

//cart pillar (2 rects on middle, left and right side) function
function cartPillar (cartX, cartY, pColor){
    for (let rep = 0; rep <= 1; rep++){
        fill (pColor)
        rect (cartX + rep * 45, cartY - 10, 5, 10 )
    }
}

//cart top (roof) function
function cartTop (cartX, cartY, tColor){
    fill (tColor)
    rect (cartX, cartY - 20, 50, 10)
}

function cartWheel (cartX, cartY){
    fill (0)
    circle (cartX + 45, cartY + 30, 10)
}

// cart stopper (rect on bottom left) function
function cartStop (cartX, cartY){
    fill (127)
    rect (cartX, cartY + 30, 5,5)


    
}


// ==========================================
// highway (from sketch4.js)
// ==========================================
function highway(highwayX, highwayY, highwayShade) {
    //you can get rid of the background if need be
    background(highwayShade + 40);

//---------STREETLIGHTS---------

    noStroke()
    fill(highwayShade - 140)
    rect(highwayX - 625, highwayY - 10, 20, -155)
    rect(highwayX - 325, highwayY - 10, 20, -155)
    rect(highwayX - 25, highwayY - 10, 20, -155)
    rect(highwayX + 235, highwayY + 40, 20, -205)

//---------HIGHWAY---------

    //highway bottom
    noStroke()
    fill(highwayShade);
    rect(highwayX - 750, highwayY, 750, 25);

    //highway ramp bottom
    quad(highwayX, highwayY, highwayX, highwayY + 25, highwayX + 255, highwayY + 75,
        highwayX + 255, highwayY + 50);

    //highway border shadow
    fill(highwayShade - 110);
    rect(highwayX - 750, highwayY, 750, 12);

    //highway ramp border shadow
    quad(highwayX, highwayY, highwayX, highwayY + 12, highwayX + 255, highwayY + 62,
        highwayX + 255, highwayY + 50);

    //highway border
    fill(highwayShade - 30);
    rect(highwayX - 750, highwayY - 15, 750, 25);

    //highway ramp border
    quad(highwayX, highwayY - 15, highwayX, highwayY + 10, highwayX + 255,
        highwayY + 60, highwayX + 255, highwayY + 35);

//---------HIGHWAY PILLARS---------

    //bottom pillars section 1
    noStroke()
    fill(highwayShade)
    rect(highwayX - 596, highwayY + 15, 52, 400);
    rect(highwayX - 201, highwayY + 15, 52, 400);
    rect(highwayX + 148, highwayY + 70, 52, 345);

    //top pillars section 2
    rect(highwayX - 616, highwayY + 15, 92, 25);
    rect(highwayX - 221, highwayY + 15, 92, 25);
    triangle(highwayX + 102, highwayY + 36, highwayX + 102, highwayY + 71,
        highwayX + 237, highwayY + 71);
    rect(highwayX + 88, highwayY + 36, 15, 20);


}


// ==========================================
// store (from sketch5.js)
// ==========================================
function store(storeX, storeY, storeType, storeLights) { 
    // Sets the top left corner of the building at (storeX, storeY)
    // .toLowerCase learned from Ms. Berman 
    if (storeType.toLowerCase() == "retail") {
        // Makes a retail store called "Mallwart"
        stroke(150, 113, 74);
        fill(235, 208, 150);
        rect(storeX, storeY, 150, 80);
        rect(storeX + 25, storeY - 25, 100, 25);
        if (storeLights.toLowerCase() == "off") {
            fill(33, 46, 46);
        } else if (storeLights.toLowerCase() == "day") {
            fill(135, 205, 222);
        } else if (storeLights.toLowerCase() == "on") {
            fill(235, 224, 91);
        }
        rect(storeX + 10, storeY + 40, 35, 25);
        rect(storeX + 105, storeY + 40, 35, 25);
        fill(94, 51, 8);
        rect(storeX + 62, storeY + 50, 26, 30);
        textSize(20);
        fill(87, 164, 186);
        text("Mallwart", storeX + 35, storeY - 5);
        rect(storeX, storeY + 10, 150, 20);
    } else if (storeType.toLowerCase() == "shoe") {
        // Makes a shoe store called "Gators"
        stroke(150, 113, 74);
        fill(224, 170, 94);
        rect(storeX, storeY, 150, 80);
        circle(storeX + 75, storeY - 30, 60);
        if (storeLights.toLowerCase() == "off") {
            fill(33, 46, 46);
        } else if (storeLights.toLowerCase() == "day") {
            fill(135, 205, 222);
        } else if (storeLights.toLowerCase() == "on") {
            fill(235, 224, 91);
        }
        rect(storeX + 10, storeY + 40, 35, 25);
        rect(storeX + 105, storeY + 40, 35, 25);
        fill(94, 51, 8);
        rect(storeX + 62, storeY + 50, 26, 30);
        fill(153, 204, 59);
        rect(storeX, storeY + 10, 150, 20);
        textSize(50);
        text("🐊", storeX + 50, storeY - 10);
        fill(255, 255, 255);
        textSize(20);
        text("Gators", storeX + 45, storeY + 27);
    } else if (storeType.toLowerCase() == "car") {
        // Makes a car dealership named "Fjord"
        stroke(150, 113, 74);
        fill(224, 170, 94);
        rect(storeX, storeY, 150, 80);
        if (storeLights.toLowerCase() == "off") {
            fill(33, 46, 46);
        } else if (storeLights.toLowerCase() == "day") {
            fill(135, 205, 222);
        } else if (storeLights.toLowerCase() == "on") {
            fill(235, 224, 91);
        }
        rect(storeX + 105, storeY + 40, 35, 25);
        fill(94, 51, 8);
        rect(storeX + 62, storeY + 50, 26, 30);
        fill(7, 79, 112);
        ellipse(storeX + 75, storeY + 5, 70, 30);
        fill(255, 255, 255);
        textSize(20);
        text("Fjord", storeX + 52, storeY + 12);
        fill(108, 110, 112);
        stroke(0, 0, 0);
        square(storeX + 5, storeY + 30, 50);
        for(lineY = storeY + 35; lineY < storeY + 50; lineY += 5) {
            line(storeX + 5, lineY, storeX + 55, lineY);
        }
        fill(0, 0, 0);
        rect(storeX + 5, storeY + 50, 50, 30);
        textSize(30);
        text("🚘", storeX + 15, storeY + 77);
    } else if (storeType.toLowerCase() == "bank") {
        // Makes a bank called "Cashino"
        stroke(150, 113, 74);
        fill(235, 208, 150);
        rect(storeX, storeY, 150, 80);
        ellipse(storeX + 75, storeY - 25, 70, 25)
        rect(storeX + 25, storeY - 25, 100, 25);
        fill(130, 133, 130);
        rect(storeX + 62, storeY + 40, 26, 40);
        if (storeLights.toLowerCase() == "off") {
            fill(33, 46, 46);
        } else if (storeLights.toLowerCase() == "day") {
            fill(135, 205, 222);
        } else if (storeLights.toLowerCase() == "on") {
            fill(235, 224, 91);
        }
        rect(storeX + 10, storeY + 40, 35, 25);
        rect(storeX + 105, storeY + 40, 35, 25);
        rect(storeX + 65, storeY + 42, 20, 35);
        textSize(20);
        fill(25, 133, 52);
        text("Cashino", storeX + 38, storeY - 5);
        rect(storeX, storeY + 10, 150, 20);
    } else if (storeType.toLowerCase() == "restaurant") {
        // Makes a restaurant called "Marios"
        stroke(150, 113, 74);
        fill(214, 177, 99);
        rect(storeX, storeY, 150, 80);
        triangle(storeX, storeY, storeX + 75, storeY - 30, storeX + 150, storeY);
        circle(storeX + 75, storeY - 30, 60);
        if (storeLights.toLowerCase() == "off") {
            fill(33, 46, 46);
        } else if (storeLights.toLowerCase() == "day") {
            fill(135, 205, 222);
        } else if (storeLights.toLowerCase() == "on") {
            fill(235, 224, 91);
        }
        rect(storeX + 10, storeY + 40, 35, 25);
        rect(storeX + 105, storeY + 40, 35, 25);
        fill(94, 51, 8);
        rect(storeX + 62, storeY + 50, 26, 30);
        for(reps = 0; reps <= 9; reps += 1) {
            let flagX = storeX + (reps * 15);
            if (reps % 3 == 0) {
                fill('green');
            } else if (reps % 3 == 1) {
                fill('white');
            } else {
                fill ('red');
            }
            rect(flagX, storeY + 10, 15, 20);
        }
        textSize(50);
        text("🍕", storeX + 48, storeY - 10);
        fill(255, 255, 255);
        textSize(15);
        text("Marios", storeX + 52, storeY + 45);
    } else {
        // Makes a store called what the store type is
        stroke(150, 113, 74);
        fill(235, 208, 150);
        rect(storeX, storeY, 150, 80);
        if (storeLights.toLowerCase() == "off") {
            fill(33, 46, 46);
        } else if (storeLights.toLowerCase() == "day") {
            fill(135, 205, 222);
        } else if (storeLights.toLowerCase() == "on") {
            fill(235, 224, 91);
        }
        rect(storeX + 10, storeY + 40, 35, 25);
        rect(storeX + 105, storeY + 40, 35, 25);
        fill(94, 51, 8);
        rect(storeX + 62, storeY + 50, 26, 30);
        textSize(15);
        fill(232, 235, 115);
        rect(storeX, storeY + 10, 150, 20);
        fill(255, 255, 255);
        text(storeType, storeX + 15, storeY + 25);

    }
}


// ==========================================
// park (from sketch6.js)
// ==========================================
function park(parkX, parkY, parkW, parkH, parkColor, treeDist, treeH, trunkW, sidewalkW) {
    /*
    This function draws a park in the shape of a rectangle. The park has trees that are randomly 
    pointy topped or round topped. You can change the X and Y coordinates of the whole park 
    (parameter 1 & 2), the width and height of the park (parameter 3 & 4), the color of the grass 
    so it can be green or even dead grass if you want (parameter 5), the horizontal distance of 
    the trees from eachother (parameter 6), the tree's height and the tree trunk's width 
    (parameters 7 & 8), and lastly, the sidewalk's thickness (parameter 9).

    Parameters overview:
    parkX - x position of the center of the park
    parkY - y position of the center of the park
    parkW - the full width of the park
    parkH - the full height of the park
    parkColor - the color of the grass (can be any color but must be a color)
    treeDist - horizontal distance between trees
    treeH - height of a tree
    trunkW - width of a trunk of a tree
    sidewalkW - width of the sidewalk
    */

    // The park's sides are the center - half the total width
    let parkLeft = parkX - (parkW/2);
    let parkTop = parkY - (parkH/2);
    let parkBottom = parkY + (parkH/2);
    let parkRight = parkX + (parkW/2);

    // Makes the tree type able to be either a pointy or round top
    let treeType = [];

    // Grass (main BG)
    noStroke();
    // makes it the color you tell it to
    fill(parkColor);
    // Puts the x and y given to be the actual center
    rectMode(CENTER);
    // Draws the park's grass
    rect(parkX, parkY, parkW, parkH);

    // Sidewalk (the order and placement changes randomly each time it is drawn)
    // Sets the sidewalk's left side to be a random Y
    let sidewalkLeft = random(parkTop, parkBottom - sidewalkW);
    // Sets the  sidewalk's left side to be a random Y
    let sidewalkRight = random(parkTop, parkBottom - sidewalkW);
    // Makes the sidewalk gray
    fill('gray');
    // The sidewalk's positions
    // Uses the side as the first x, the random y, the same side but the sidewalk's width lower, and then the same thing on the right side
    quad(parkLeft, sidewalkLeft, parkLeft, sidewalkLeft + sidewalkW, parkRight, sidewalkRight + sidewalkW, parkRight, sidewalkRight);

    // Fence
    fill('gray');
    // Left
    quad(parkLeft, parkTop, parkLeft+3, parkTop, parkLeft+3, parkBottom, parkLeft, parkBottom);
    // Right
    quad(parkRight, parkBottom, parkRight-3, parkBottom, parkRight-3, parkTop, parkRight, parkTop);
    // Top
    quad(parkLeft, parkTop, parkLeft, parkTop+3, parkRight, parkTop+3, parkRight, parkTop);
    // Bottom 
    quad(parkRight, parkBottom, parkRight, parkBottom-3, parkLeft, parkBottom-3, parkLeft, parkBottom);

    // Trees (# of trees depends on amount of park given)
    let row = 0;

    // The y coordinates of the trees
    for (let OGtreeY = parkTop + (treeH/2); OGtreeY <= parkBottom - (treeH/3) - 3; OGtreeY += treeH) {

        // Sets the stagger of the trees
        let offset = (row % 2 ===1) ? + treeDist/2 : 0;

        // The x coordinates of the trees
        for (let OGtreeX = parkLeft + trunkW + 3; OGtreeX <= parkRight - offset - 3; OGtreeX += treeDist) {
            
            // Makes the trees staggered
            let treeX = OGtreeX + offset;
            let treeY = OGtreeY;

            // Gives a location to each tree (x) to use later
            let treeLocation = (treeX - parkLeft) / (parkRight - parkLeft);
            // Uses treeLocation & lerp to find the y location
            let sidewalkTopX = lerp(sidewalkLeft, sidewalkRight, treeLocation);
            // Uses sidewalkTopX & the sidewalk's width to find the bottom's y location
            let sidewalkBottomX = sidewalkTopX + sidewalkW;

            // determines where the tree's top is
            let treeTop = treeY - treeH;
            // Determines where the tree's bottom is
            let treeBottom = treeY + (treeH/2);

            // Only draws the trees if the bottom is above the top of the sidewalk or if the top is below the bottom
            if (treeBottom < sidewalkTopX || treeTop > sidewalkBottomX) {
                // Trunk
                fill('brown');
                rect(treeX, treeY, trunkW, treeH/2);

                // Randomizes the tree type
                treeType = random(1) < 0.5 ? 'pointy' : 'round';

                // Color of leaves
                fill('darkgreen');

                // Draws a pine tree if it is pointy and a round top try if it is round
                if (treeType == 'pointy') {
                    triangle(treeX - trunkW, treeY - (treeH/4), treeX + trunkW, treeY - (treeH/4), treeX, treeY - treeH);
                } else if (treeType == 'round') {
                    ellipse(treeX, treeY - (treeH/2), trunkW*3, treeH*.75);
                }
            }
        }

        // Increases the row count to use for the stagger
        row ++;
    }
    // Stops the loop so that the shapes aren't constantly redrawn
    noLoop();
}


// ==========================================
// car (from sketch7.js)
// ==========================================
//X pos, Y pos, car color, bottom part of the car color, headlight color
function car(light, direction, carsX, carsY, r,g,b, r2 = 220,g2 = 220,b2 = 220, r3 = 150,g3 = 150,b3 = 150){

    
    
    if(direction == 0){

        let carX = carsX - 50
        let carY = carsY - 53.5

        let tireX = carX + 17


        noStroke()
        fill(r,g,b)

        rect(carX + 20, carY + 5, 30, 30)
        rect(carX + 11, carY + 17, 80, 28)
        triangle(carX + 50, carY + 5, carX + 50, carY + 17, carX + 70, carY + 17)
        //back
        triangle(carX + 20, carY + 5, carX + 5, carY + 25, carX + 25,carY + 25)
        
        triangle(carX + 6, carY + 40, carX + 5, carY + 25, carX + 30, carY + 20)
        triangle(carX + 20, carY + 6, carX + 9, carY + 8, carX + 20, carY + 15)
        //very fornt
        
        triangle(carX + 91, carY + 17, carX +91, carY + 45, carX + 97, carY + 20)
        triangle(carX + 92, carY + 30, carX + 90, carY + 37, carX + 100, carY + 35)
        triangle(carX + 97, carY + 20, carX + 92, carY + 40, carX + 95, carY + 40)
        rect(carX + 91, carY + 35, 9, 9)
        
        //rims
        fill(r2,g2,b2,)
        circle(carX + 9, carY + 40, 10)
        rect(carX + 9, carY + 36, 75, 9)
        quad(carX + 88, carY + 38, carX + 88, carY + 45, carX + 100, carY + 45, carX + 100, carY + 40)


        for(let i = 0; i < 66; i += 65){
            //reference: p5.js reference page
            //https://p5js.org/reference/p5/arc/ 
            //basically draw a half circle in this use case but can be used to draw any shape that is an ellipse with a slice taken out. 
            arc(tireX + i, carY + 45, 25, 25, PI, 0)
        }
        
        
        fill(0)
        for(let i = 0; i < 66; i += 65){   
            circle(tireX + i, carY + 45, 17)
        }



        fill(100, 0, 0)
        quad(carX + 5, carY + 25, carX + 5.3, carY + 29, carX + 12, carY + 28, carX + 15, carY + 25)
        quad(carX + 5, carY + 25, carX + 6, carY + 26, carX + 16.5, carY + 13, carX + 15, carY + 11.7)

        fill(r3,g3,b3)
        quad(carX + 95, carY + 25, carX + 96, carY + 21, carX + 83, carY + 20, carX + 88, carY + 25)

        if(light){
            fill(r3,g3,b3, 50)
            quad(carX + 95, carY + 25, carX + 96, carY + 21, carX + 150, carY - 20, carX + 150, carY + 50)
        }

        //window
        fill('black')
        quad(carX + 26, carY + 8, carX + 30, carY + 18, carX + 63, carY + 18, carX + 51, carY + 8)
        triangle(carX + 26, carY + 8, carX + 30, carY + 18, carX + 23, carY + 12)
        triangle(carX + 66, carY + 18, carX + 53, carY + 7, carX + 72, carY + 18)
    }else{

        let carX = carsX + 50
        let carY = carsY - 53.5

        let tireX = carX - 17
        
    
        noStroke()
        fill(r,g,b)

        rect(carX - 50, carY + 5, 30, 30)
        rect(carX - 91, carY + 17, 80, 28)
        triangle(carX - 50, carY + 5, carX - 50, carY + 17, carX - 70, carY + 17)
        //back
        triangle(carX - 20, carY + 5, carX - 5, carY + 25, carX - 25,carY + 25)
        
        triangle(carX - 6, carY + 40, carX - 5, carY + 25, carX - 30, carY + 20)
        triangle(carX - 20, carY + 6, carX - 9, carY + 8, carX - 20, carY + 15)
        //very fornt
        
        triangle(carX - 91, carY + 17, carX - 91, carY + 45, carX - 97, carY + 20)
        triangle(carX - 92, carY + 30, carX - 90, carY + 37, carX - 100, carY + 35)
        triangle(carX - 97, carY + 20, carX - 92, carY + 40, carX - 95, carY + 40)
        rect(carX - 100, carY + 35, 9, 9)
        
        //rims
        fill(r2,g2,b2,)
        circle(carX - 9, carY + 40, 10)
        rect(carX - 84, carY + 36, 75, 9)
        quad(carX - 88, carY + 38, carX - 88, carY + 45, carX - 100, carY + 45, carX - 100, carY + 40)


        for(let i = 65; i > -1; i -= 65){
            //reference: p5.js reference page
            //https://p5js.org/reference/p5/arc/ 
            //basically draw a half circle in this use case but can be used to draw any shape that is an ellipse with a slice taken out. 
            arc(tireX - i, carY + 45, 25, 25, PI, 0)
        }
        
        
        fill(0)
        for(let i = 65; i > -1; i -= 65){
            circle(tireX - i, carY + 45, 17)
        }



        fill(100, 0, 0)
        quad(carX - 5, carY + 25, carX - 5.3, carY + 29, carX - 12, carY + 28, carX - 15, carY + 25)
        quad(carX - 5, carY + 25, carX - 6, carY + 26, carX - 16.5, carY + 13, carX - 15, carY + 11.7)

        fill(r3,g3,b3)
        quad(carX - 95, carY + 25, carX - 96, carY + 21, carX - 83, carY + 20, carX - 88, carY + 25)

        if(light){
            fill(r3,g3,b3, 50)
            quad(carX - 95, carY + 25, carX - 96, carY + 21, carX - 150, carY - 20, carX - 150, carY + 50)
        }

        //window
        fill('black')
        quad(carX - 26, carY + 8, carX - 30, carY + 18, carX - 63, carY + 18, carX - 51, carY + 8)
        triangle(carX - 26, carY + 8, carX - 30, carY + 18, carX - 23, carY + 12)
        triangle(carX - 66, carY + 18, carX - 53, carY + 7, carX - 72, carY + 18)
}
}


// ==========================================
// residentialBuilding (from sketch8.js)
// ==========================================
/*
residentialBuilding()

the structure that houses many people in in a smaller area, often found in the center of large cities and not in urban areas.

residentialBuilding() is composed of many different parts, with each part containing their respective set of parameters.
*/
function residentialBuilding(roofS, baseX, baseY, baseW, baseH, topX, topY, topXtwo, topYtwo, topXthree, topYthree, buildingS, buildingX, buildingY, buildingW, buildingH, windowbgS, windowbgL, windowS, windowW, windowH) {

/*
the roof of the building

the roof is a part of the entire buliding, defined by baseX, baseY, baseW, baseH, topX, toptY, topXtwo, topYtwo, topXthree, and topYthree. base_ is for the bottom part of the roof (the rectangle), whlie top_ is for the top part of the roof (the triangle). roofS is the stroke of the roof.
*/
    fill(roofS);
    stroke(0);
    rect(baseX, baseY, baseW, baseH);
    triangle(topX, topY, topXtwo, topYtwo, topXthree, topYthree);

    fill(roofS);
    stroke(0);
    rect(baseX + 200, baseY, baseW, baseH);
    triangle(topX + 200, topY, topXtwo + 200, topYtwo, topXthree + 200, topYthree);

    fill(roofS);
    stroke(0);
    rect(baseX + 400, baseY, baseW, baseH);
    triangle(topX + 400, topY, topXtwo + 400, topYtwo, topXthree + 400, topYthree);

    fill(roofS);
    stroke(0);
    rect(baseX + 600, baseY, baseW, baseH);
    triangle(topX + 600, topY, topXtwo + 600, topYtwo, topXthree + 600, topYthree);

/*
the building is defined by buildingX, buildingY, buildingW, and buildingH. bulidingX and buildingY set the location of the bulidings starting point, while buildingW and buildingH determine the width and height of the building. buildingS is the stroke of the building.
*/
    fill(buildingS);
    rect(buildingX, buildingY, buildingW, buildingH);

    fill(buildingS);
    rect(buildingX + 200, buildingY, buildingW, buildingH);
    
    fill(buildingS);
    rect(buildingX + 400, buildingY, buildingW, buildingH);

    fill(buildingS);
    rect(buildingX + 600, buildingY, buildingW, buildingH);

/*
the frame of the window is defined by windowbgX, windowbgY, and windowbgL. windowbgX and windowbgY set the location of the buildings starting point, while widnowbgL is the size of the frame. for the x/y location, i also used nested loops so i could make the columns and rows of the frame more easily. windowbgS is the stroke of the frame.
*/
    fill(windowbgS);
    for(let windowbgX = 113; windowbgX <= 250; windowbgX += 50) {
        for(let windowbgY = 520; windowbgY <= 900; windowbgY += 50) {
            square(windowbgX, windowbgY, windowbgL);
        }
    }

    fill(windowbgS);
    for(let windowbgX = 113; windowbgX <= 250; windowbgX += 50) {
        for(let windowbgY = 520; windowbgY <= 900; windowbgY += 50) {
            square(windowbgX + 200, windowbgY, windowbgL);
        }
    }

     fill(windowbgS);
    for(let windowbgX = 113; windowbgX <= 250; windowbgX += 50) {
        for(let windowbgY = 520; windowbgY <= 900; windowbgY += 50) {
            square(windowbgX + 400, windowbgY, windowbgL);
        }
    }

     fill(windowbgS);
    for(let windowbgX = 113; windowbgX <= 250; windowbgX += 50) {
        for(let windowbgY = 520; windowbgY <= 900; windowbgY += 50) {
            square(windowbgX + 600, windowbgY, windowbgL);
        }
    }
    
/*
the glass part of the window is defined by windowX, windowY, windowW, and windowH. similar to the frame of the window, windowX and windowY are the starting points, and windowW and windowH indicate size. i also used nested loops to create this part of the window. widnowS is the storke of the glass.
*/
    fill(windowS)
    for(let windowX = 115; windowX <= 250; windowX += 50) {
        for(let windowY = 522; windowY <= 900; windowY += 50) {
            rect(windowX, windowY, windowW, windowH)
        }
    }

    fill(windowS)
    for(let windowXtwo = 115; windowXtwo <= 250; windowXtwo +=50) {
        for(let windowYtwo = 540; windowYtwo <= 900; windowYtwo += 50) {
            rect(windowXtwo, windowYtwo, windowW, windowH)
        }
    }

    fill(windowS)
    for(let windowX = 115; windowX <= 250; windowX += 50) {
        for(let windowY = 522; windowY <= 900; windowY += 50) {
            rect(windowX + 200, windowY, windowW, windowH)
        }
    }

    fill(windowS)
    for(let windowXtwo = 115; windowXtwo <= 250; windowXtwo +=50) {
        for(let windowYtwo = 540; windowYtwo <= 900; windowYtwo += 50) {
            rect(windowXtwo + 200, windowYtwo, windowW, windowH)
        }
    }

    fill(windowS)
    for(let windowX = 115; windowX <= 250; windowX += 50) {
        for(let windowY = 522; windowY <= 900; windowY += 50) {
            rect(windowX + 400, windowY, windowW, windowH)
        }
    }

    fill(windowS)
    for(let windowXtwo = 115; windowXtwo <= 250; windowXtwo +=50) {
        for(let windowYtwo = 540; windowYtwo <= 900; windowYtwo += 50) {
            rect(windowXtwo + 400, windowYtwo, windowW, windowH)
        }
    }

    fill(windowS)
    for(let windowX = 115; windowX <= 250; windowX += 50) {
        for(let windowY = 522; windowY <= 900; windowY += 50) {
            rect(windowX + 600, windowY, windowW, windowH)
        }
    }

    fill(windowS)
    for(let windowXtwo = 115; windowXtwo <= 250; windowXtwo +=50) {
        for(let windowYtwo = 540; windowYtwo <= 900; windowYtwo += 50) {
            rect(windowXtwo + 600, windowYtwo, windowW, windowH)
        }
    }
}


// ==========================================
// drawSkyscraper, drawWindows, drawSkyscraperQuad (from sketch9.js)
// ==========================================
// parameter one and two set x,y coordinates of upper left corner. 
// Parameter three and four sets the width and height of the structure. 
// Paremeters five, six, and seven are the color and in the order of rgb.
// Paremeter 8 is the weight of the stroke/ outline.
function drawSkyscraper(bposX, bposY, bwidth, bheight, cr, cg, cb,strW) {

    strokeWeight(strW)
    fill(cr,cg, cb)
    rect(bposX, bposY, bwidth, bheight)
}

// adds window detail
// can change size shape, use for detail 

//parameter one is 
function drawWindows(windowStartX, windowStartY, windowMaxX,windowMaxY, 
    windowPlusX, windowPlusY, windowWeight, windowR, windowG,
    windowB, windowW, windowH){
    for (let windowX = windowStartX; windowX<= windowMaxX; windowX +=windowPlusX){
        for (let windowY = windowStartY; windowY <= windowMaxY; windowY +=windowPlusY){
            strokeWeight(windowWeight)
            fill(windowR, windowG, windowB)
            rect(windowX, windowY, windowW, windowH)
        }
    }
}


function drawSkyscraperQuad(quadXone, quadYone, quadXtwo, quadYtwo, quadXthree, 
    quadYthree, quadXfour, quadYfour, 
    quadRed, quadGreen, quadBlue, quadstrokeWeight){
        strokeWeight(quadstrokeWeight)
        fill(quadRed, quadGreen, quadBlue)
        quad(quadXone, quadYone, quadXtwo, quadYtwo, quadXthree, quadYthree, 
        quadXfour, quadYfour)
}


// ==========================================
// trainStation (from sketch10.js)
// ==========================================
function trainStation(stationX, stationY, stationColor, stationSize, lightSpeed, lightcolor) {
background(220)
    //setting where human will start, where the final destination is, and how long it will take
  let startX = stationX-200;
  let endX = stationX + 80;
  let durationX = 150; // Number of frames the movement takes
  let startY = stationY+ 20
  let endY = stationY + 18
  let durationY = 200


  let progress = frameCount % durationX;


    //map monitors the 'progress' of the task and resets the human when finished
    //forX
  let currentX = map(progress, 0, durationX, startX, endX);
    //forY
  let currentY = map(progress, 0, durationY, startY, endY)

  //draw the circle
  fill(229, 190, 131)
  ellipse(currentX, currentY, 20, 20);
    //you can replace this with your own building (This is a placeholder because without it, it looks like people are appearing out of thin air)
    fill(151)
  rect(stationX-210, stationY-10, 30, 40)

     
    push()
    //making stair railing
    strokeWeight(2)
    fill('lightgray')
    line(stationX+2,stationY+7,stationX+67,stationY+17)
    pop()

    push();
    strokeWeight(0.5)

    //making row of small pillars
    for(let PillarstationX = stationX; PillarstationX <= stationX+80; PillarstationX += 10) {
        fill(stationColor)
    rect(PillarstationX, stationY, stationSize-35, stationSize-20)
    }
    pop()

    
    push()
    strokeWeight(0.5)
    
    //Two large side pillars

    fill(stationColor)
    rect(stationX-10, stationY, stationSize-30, stationSize-20)
    rect(stationX+80, stationY, stationSize-30, stationSize-20)

    //Two large top/bottom pillars

    rect(stationX-14, stationY-5, stationSize+70, stationSize-35)
    rect(stationX-14, stationY+18, stationSize+70, stationSize-26)
    pop()

    push()

    strokeWeight(0.5)
    fill(stationColor)
    //light posts
    rect(stationX-5, stationY-45, 5, stationSize)
    rect(stationX+80, stationY-45, 5, stationSize)

    //making lights
    circle(stationX-2, stationY-50, stationSize-26)
    circle(stationX+82, stationY-50, stationSize-26)


    //flashing at slightly differen't speeds
    if (frameCount % lightSpeed < 59) {
    fill(lightcolor)
} else {
    fill('black')
}

    circle(stationX-2, stationY-50, stationSize-30)

      if (frameCount % lightSpeed < 52) {
    fill(lightcolor)
} else {
    fill('black')
}
    circle(stationX+82, stationY-50, stationSize-30)

    pop()

    //making a tree
    push()

    strokeWeight(0.5)

    //trunk
    fill('brown')
    rect(stationX+135, stationY-5, stationSize-32, stationSize-10)

    //leaves
    fill('green')
    circle(stationX+140, stationY-10, stationSize)
     circle(stationX+140, stationY-30, stationSize-10)
      circle(stationX + 140, stationY-45, stationSize-15)
    pop()

  
}


// ==========================================
// drawRiver, drawDuck, drawLegs, drawBridge, drawLines (from sketch11.js)
// ==========================================
let x = 350;
let speed = -1;
let z = 370;

function drawRiver(color2){
     //Made the river go up and down
    let r = random(z, z + 5)
    strokeWeight(60)
    stroke(color2)
    line(400, r, 0, r)
}

function drawDuck(){
    textSize(30)
    text("🦆",x,350)
    x = x + speed;
   

}

function drawLegs(Legs){
//Leg one
strokeWeight(Legs)
stroke('black')
line(350, 400, 350, 280)

//Leg 2
strokeWeight(Legs)
stroke('black')
line(200, 400, 200, 280)

//Leg 3
strokeWeight(Legs)
stroke('black')
line(50, 400, 50, 280)
     
}

function drawBridge(color){
//Bridge
fill(color)
stroke(color)
rect(0, 260, 400, 40)
}

function drawLines(){
    // fill('yellow')
    stroke('yellow')
    strokeWeight(15)
    for(let x = 0; x <= 400; x+= 50){
        
        rect(x, 280, 1, 1)

    }



}