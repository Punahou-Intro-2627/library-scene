# Library Documentation

## 1. `drawRoad`

### Function description and parameters

drawRoad
Draws a road. Draws additional lane dividers if there is more than one lane. T
This will be the road for our cars to drive on

The first parameter, roadShade, sets the shade color for the road base.
The user can pick any number from 0 to 255, which is the color palette for light and dark
0 is for a darker shade of gray, and 255 is the lightest shade of gray

The second paramter, roadLanes, sets the number of road lanes that are drawn.
Keep in mind, that if you choose for there to only be roadLanes, the road is basically a plain rectangle
So choosing more than 1 lane is highly recommended

The third, fourth, fifth, and sixth values are the x,y,w,h of the road for you to put in. It is exactly the same as the parameters for a basic rectangle.
I gave you the choice for the dimensions on your road, but if you want your road to be to scale to the other objects that we are making, then roadWidth should be around 50
I made a default value for the roadWidth. Therefore, if you only place in 5 values, lacking a 6th for a roadWidth, it will automatically give the road a roadWidth of 50, which should be to scale of the other objects in our scene

The seventh value of this function is lanedividerShade. This value determines the color shade of the lane dividers. You may put in any number from 0 to 255.
No matter what number in this range that you choose, the lanedivider shade will be a shade of yellow or white based on the number that you choose.
The higher number that you choose, the lighter color (or closest to white) shade of yellow will appear. I gave this parameter a default parameter of 49.
The only reason why I gave it a default parameter was if the user chose to only have one lane, then it wouldn't make sense to put in a lanedivider Shade that wouldn't be drawn
Or this default parameter might help if you just want the general yellow that you normally see.

The eighth value of this function is laneType. I made three different laneTypes for our lanedividers.
laneType 1, or the default value if you don't set a number, is a dotted set of lane dividers
laneType 2 is a single line of a solid lane divider
laneType 3 is a double line set of solid lane divider.

I explained the different parts of my function in even more detail of how it works in the function below if you are interested

I have some different examples of code below in lines (47-)

### Examples

this first one at the top of the canvas is just a basic rectangle with the first basic 5 values (roadShade, roadLanes, x, y, w, h)
you can change the values to experiment if you want
As the roadLanes parameter has a value of 1, there are no lane dividers, hence, a plain rectangle
`drawRoad (300, 1, 0, 50, 1000)`

this road is slightly more complicated, and probably the most commonly seen road (this is the road second to the top)
Its roadshade color of 0 gives it its black color, with 2 road lanes
Notice this example has 8 values, as they set a value for the roadHeight, lanedividershade, and lanetype
Delete the last value given for this line of code
notice that nothing changes
this is due to the default value being set to 1, keeping the dotted line patterns
you can change the lane divider type by changing the last value to either 1, 2, or 3
`drawRoad (0, 2, 0, 200, 1000, 50, 0, 1) ;`

this one is very similar to the one above. this is the rectangle that is the 3rd from the top
This one is similar, but its just here to represent the customizations that you could make
here they changed the roadshade, how long and how wide the road was, the and the color and type of lanedivider
`drawRoad (100, 2, 0, 400, 250, 100, 100, 2);`

this one is similar to the road second from the top, but it just demonstrates the customs that you can make
this one has lanetype #3, giving it the double line pattern, as well as other different values
`drawRoad (255, 4, 0, 650, 500, 75, 150, 3);`

*[Image Placeholder: Examples for drawRoad]*

### Additional notes

*IMPORTANT USER GUIDELINES STATEMENTS LISTED BELOW FOR THE USER
One thing for the user of this library to keep in mind, is I gave them free will to make the road however big or small that they wanted
If they wanted to scale it for this particular assignment, at the scale of the other things that other people are making, then choose the default roadHeight of 50
I tried to make the order of the values as intuitive as possible based on what we have learned so far
*VERY IMPORTANT STATEMENTS LISTED ABOVE FOR THE USER*

I did 3 rows of drawRoad just to test my function out with different values to make sure it worked
It also helps demonstrate it to the user of this code

these are the orders of the values that you put in for this function
I learned the following code with the default value suggested by Mrs. Berman
I also reserached it further by using the following trustable website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

*To the user*
Here you might notice that in my test runs above, the last drawRoad sequence only has 5 values, this is due to my line of code below
some values are already automatically set, so that if you don't set a value for them, then they are chosen automatically
this way if you don't chose a roadHeight, then it will automatically be set to scale of the project we are doing
keep in mind that you can still change these values if you want
feel free to especially change the lanedividerShade color, I only made it a default value in case the user chose to do a road with only a single road, in which case they wouldn't need to chose a value since it wouldn't show.

## 2. `cart`

### Function description and parameters

cart function: cartX, cartY, cart base color, cart pillar color, cart top color

function cart()
The function cart draws a food car roughly 50 by 50 pixels
The parameters are x,y, the base color, the cartʻs pillar color and the cartʻs top/roof color
example: cart(200,200,ʻredʻ, ʻblueʻ, ʻwhiteʻ)

parameters:
cartX Number: x- coordinate of the cart
cartY Number: y- coordinate of the cart
bColor Color word from p5.js: color of the base
pColor Color word from p5.js: color of the pillars
tColor Color word from p5.js: color of the top

### Examples

`cart (width/2 - 25, height/2, 'orange', 'black', 'yellow',)`

*[Image Placeholder: Examples for cart]*

### Additional notes

base of cart, 50 by 30 function

cart pillar (2 rects on middle, left and right side) function

cart top (roof) function

cart stopper (rect on bottom left) function

## 3. `highway`

### Function description and parameters

highway()

highwayX: determines the location of the entire highway structure on the x-axis
highwayY: determines the location of the entire highway structure on the y-axis
highwayShade: determines the lighting of the highway (0-255)

having highwayX and highwayY as parameters allows you to move the entire highway
structure around the canvas without having to change every single coordinate in
the code.

having highwayShade as a parameter allows you to change the lighting of the
highway, which can work if you want the time to be during the day or night

### Examples

`highway(750, 600, 180);`

*[Image Placeholder: Examples for highway]*

### Additional notes

code below not used (i used it to map coordinates)

strokeWeight(10)
stroke('red')
point(highwayX + 237, highwayY + 71);

## 4. `store`

### Function description and parameters

store()

draws a store

Parameters:
storeX           x-coordinate of the top left corner of the main rectangle/structure of the store
storeY           y-coordinate of the top left corner of the main rectangle/structure of the store
storeType        (MAKE SURE TO USE QUOTATION MARKS) Dictates the type of store that is being made; type "retail" for a retail store; type "shoe" for a shoe store; type "car" for a car dealership; type "bank" for a bank; type "restaurant" for a restaurant; type anything else and get a store with that name.
storeLights      (MAKE SURE TO USE QUOTATION MARKS) Changes the color of the windows; type "off" to make the windows dark; type "day" to make the windows blue; type "on" to make the windows yellow.

No global variables

### Examples

Example: store(200, 200, "car", "day");        Creates a car dealership whose top left corner is at (200, 200) and has blue colored windows

`store(100, 100, "RETAIL", "oFf");`
`store(100, 250, "ReTAiL", "dAy");`
`store(100, 400, "REtaIl", "oN");`
`store(300, 100, "ShoE", "OFF");`
`store(300, 250, "ShOE", "DaY")`
`store(300, 400, "Shoe", "On")`
`store(500, 100, "cAr", "OfF");`
`store(500, 250, "CAr", "DAY");`
`store(500, 400, "CaR", "ON");`
`store(700, 100, "baNk", "off");`
`store(700, 250, "BANK", "day");`
`store(700, 400, "BAnK", "on");`
`store(200, 550, "rEstAuRant", "off");`
`store(200, 700, "RESTAURANT", "day");`
`store(200, 850, "rEsTAUrant", "oN");`
`store(600, 550, "insert name here", "off");`
`store(600, 700, "insert name there", "day");`
`store(600, 850, "insert name where", "on");`

Example images:

![mallwart image](https://github.com/Punahou-Intro-2627/library-scene/blob/main/imgs/mallwart.png)
![mario's pizza](https://github.com/Punahou-Intro-2627/library-scene/blob/Jason-documentation/imgs/Mario's%20Pizza%20Screenshot.png)
![gators store](https://github.com/Punahou-Intro-2627/library-scene/blob/Jason-documentation/imgs/Gators%20Screenshot.png)

### Additional notes

Sets the top left corner of the building at (storeX, storeY)
.toLowerCase learned from Ms. Berman

## 5. `park`

### Function description and parameters

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

### Examples

`park(200, 200, 400, 400, 'green', 80, 40, 10, 20);`

*[Image Placeholder: Examples for park]*

### Additional notes

The park's sides are the center - half the total width

Makes the tree type able to be either a pointy or round top

Grass (main BG)
makes it the color you tell it to
Puts the x and y given to be the actual center
Draws the park's grass

Sidewalk (the order and placement changes randomly each time it is drawn)
Sets the sidewalk's left side to be a random Y
Sets the  sidewalk's left side to be a random Y
Makes the sidewalk gray
The sidewalk's positions
Uses the side as the first x, the random y, the same side but the sidewalk's width lower, and then the same thing on the right side

Fence
Left
Right
Top
Bottom

Trees (# of trees depends on amount of park given)
The y coordinates of the trees
Sets the stagger of the trees
The x coordinates of the trees
Makes the trees staggered
Gives a location to each tree (x) to use later
Uses treeLocation & lerp to find the y location
Uses sidewalkTopX & the sidewalk's width to find the bottom's y location
determines where the tree's top is
Determines where the tree's bottom is
Only draws the trees if the bottom is above the top of the sidewalk or if the top is below the bottom
Trunk
Randomizes the tree type
Color of leaves
Draws a pine tree if it is pointy and a round top try if it is round
Increases the row count to use for the stagger
Stops the loop so that the shapes aren't constantly redrawn

## 6. `car`

### Function description and parameters

car()

This fuction draws a car using a collection of shapes. It is a somewhat simplistic car that is missing details such as 
side mirrors and doors. it only faces right

It is a car defined an X and Y cordinate that are in the top left corner of the car. 

the first two are if the light(true, false) is on and if it is facing left or right 0 = left, anyhting else = right
the second two are x and y. The rest are collections of rgb values. 
The first group of rgb is for the entire car, the second are for the color of the bottom part.
the final is the color for the car's lights

X pos, Y pos, car color, bottom part of the car color, headlight color

### Examples

`car(true, 0, carX, 450, 50, 14, 50)`
`car(false, 1, carX2, 400, 0, 14, 50)`

*[Image Placeholder: Examples for car]*

### Additional notes

you can use a global variable to move the car by placing it in the x position

## 7. `residentialBuilding`

### Function description and parameters

residentialBuilding()

the structure that houses many people in in a smaller area, often found in the center of large cities and not in urban areas.

residentialBuilding() is composed of many different parts, with each part containing their respective set of parameters.

the roof of the building
the roof is a part of the entire buliding, defined by baseX, baseY, baseW, baseH, topX, toptY, topXtwo, topYtwo, topXthree, and topYthree. base_ is for the bottom part of the roof (the rectangle), whlie top_ is for the top part of the roof (the triangle). roofS is the stroke of the roof.

the building is defined by buildingX, buildingY, buildingW, and buildingH. bulidingX and buildingY set the location of the bulidings starting point, while buildingW and buildingH determine the width and height of the building. buildingS is the stroke of the building.

the frame of the window is defined by windowbgX, windowbgY, and windowbgL. windowbgX and windowbgY set the location of the buildings starting point, while widnowbgL is the size of the frame. for the x/y location, i also used nested loops so i could make the columns and rows of the frame more easily. windowbgS is the stroke of the frame.

the glass part of the window is defined by windowX, windowY, windowW, and windowH. similar to the frame of the window, windowX and windowY are the starting points, and windowW and windowH indicate size. i also used nested loops to create this part of the window. widnowS is the storke of the glass.

### Examples

`residentialBuilding(color(39, 43, 43), 95, 460, 170, 40, 130, 460, 180, 420, 230, 460, color(110, 38, 14), 100, 500, 160, 500, color(171, 171, 171), 35, color(184, 222, 222), 31, 13);`

*[Image Placeholder: Examples for residentialBuilding]*

### Additional notes

call function

## 8. `drawSkyscraper`, `drawWindows`, and `drawSkyscraperQuad`

### Function description and parameters

drawSkyscraper:
parameter one and two set x,y coordinates of upper left corner. 
Parameter three and four sets the width and height of the structure. 
Paremeters five, six, and seven are the color and in the order of rgb.
Paremeter 8 is the weight of the stroke/ outline.

drawWindows:
adds window detail
can change size shape, use for detail 
parameter one is 

drawSkyscraperQuad:
parameters for quad coordinates (Xone through Yfour), quadRed, quadGreen, quadBlue, quadstrokeWeight.

### Examples

`drawSkyscraper(160, 350, 30, 650, 120,155, 240,0);`

`drawSkyscraper(240, 326, 56, 674, 90, 120, 200, 1)`
`drawWindows(240,326, 295, 980, 4, 6, 1,90, 120, 200, 4,6)`

`drawSkyscraper(400, 472, 80, 528, 60, 70, 125, 0)`
`drawWindows(400, 472, 476, 992, 4, 8, 1, 60, 70, 125, 4, 8)`

`drawSkyscraper(120, 300, 8, 700, 90, 90, 100,0)`
`drawSkyscraper(96,280, 24, 720, 90, 90, 100,0)`
`drawSkyscraper(88, 310, 12, 690, 90, 90, 100,0)`
`drawWindows(120, 296, 124, 992, 4, 8, 1, 90, 90, 100, 4, 8)`
`drawWindows(88, 320, 112, 984, 8, 16, 1, 90, 90, 100, 8, 16)`
`drawWindows(88, 304, 112, 319, 8, 16, 1, 90, 90, 100, 8, 16)`
`drawWindows(96, 280, 116, 296, 4, 8, 1, 90, 90, 100, 4, 8)`

`drawSkyscraperQuad(360, 295, 390, 310, 390, 1000, 360, 1000, 130, 190, 255, 0)`
`drawSkyscraperQuad(330, 300, 360, 270, 360, 1000, 330, 1000, 130, 190, 255, 0)`

`drawSkyscraper(600, 180, 45, 820, 80,140,220,0)`
`drawWindows(600, 176, 640, 992, 5, 8, 1, random(60,90), random(120,160), random(210,255), 5, 8)`

*[Image Placeholder: Examples for drawSkyscraper, drawWindows, and drawSkyscraperQuad]*

### Additional notes

*No additional notes provided.*

## 9. `trainStation`

### Function description and parameters

function name: trainStation
change first number to change stationX
change second number to change stationY 
change third thing to alter stationColor of railings
change fifth number to change the lightSpeed. Not that any number lower than around 55 makes the blink too fast and not visible (Lower number equals faster blink rate)

To make it modular, set stationX, stationY, stationColor, or stationSize to something
then just add the correct number so that the pieces are in the correct spots

Documentation
IMPORTANT NOTE: stationSize doesn't really work because I have to change X and Y coordinates with it and I couldn't figure out how to do so. It looks normal only when set to 40

### Examples

`trainStation(500, 400, 'teal', 40, 60, 'orange')`

*[Image Placeholder: Examples for trainStation]*

### Additional notes

setting where human will start, where the final destination is, and how long it will take
map monitors the 'progress' of the task and resets the human when finished
draw the circle
you can replace this with your own building (This is a placeholder because without it, it looks like people are appearing out of thin air)
making stair railing
making row of small pillars
Two large side pillars
Two large top/bottom pillars
light posts
making lights
flashing at slightly differen't speeds
making a tree
trunk
leaves

## 10. `drawRiver`, `drawDuck`, `drawLegs`, `drawBridge`, and `drawLines`

### Function description and parameters

Function name drawRiver
This function draws the river and makes it go up and down like the tide and uses a random variable
Uses the parameters color2 and this just makes the color of the river so you could change if you wanted to
Uses the global variable z to help make the random for the river and z is equal to 370

Function name drawDuck
This function draws the emoji duck that goes from the right side of your screen to the left
This function has no parameters

Function name drawLegs
This function draws three lines one on the right side one in the middle and one on the left of the canvas. They are the legs to the bridge
Draw legs has the parameters of how wide you want to make the legs 
You can make the legs anywhere between 15-40

Function name drawBridge
This function draws the bridge which is the rectangle on the legs 
The parameter on this one is the color you can make the bridge right now I have the color as grey but you can make it any color

Function name drawLines. 
This function makes the yellow squre dots on the road using a loop. And for some reason the stroke replaced the fill in the code of making the inside of the squares yellow
This function does not have a parameter

### Examples

`drawRiver('lightblue')`
`drawDuck()`
`drawLegs(30)`
`drawBridge('grey')`
`drawLines()`

*[Image Placeholder: Examples for bridge and river elements]*

### Additional notes

Made the river go up and down
Leg one
Leg 2
Leg 3
Bridge
fill('yellow')
