let b1, red, blue, yellow, black, green, orange, violet, purple;

function setup() {
    createCanvas(windowWidth, windowHeight - 50);
    background(255);

    b1 = createButton("CLEAR");
    b1.style('font-size', '15px');
    b1.mousePressed(clearBackground);

    red = createButton("RED");
    red.style('background-color', "red");
    red.style('font-size', '15px');
    red.mousePressed(redLine);

    blue = createButton("BLUE");
    blue.style('font-size', '15px');
    blue.style('background-color', "blue");
    blue.mousePressed(blueLine);

    yellow = createButton("YELLOW");
    yellow.style('font-size', '15px');
    yellow.style('background-color', "yellow");
    yellow.mousePressed(yellowLine);

    green = createButton("GREEN");
    green.style('font-size', '15px');
    green.style('background-color', "green");
    green.mousePressed(greenLine);

    orange = createButton("ORANGE");
    orange.style('font-size', '15px');
    orange.style('background-color', "orange");
    orange.mousePressed(orangeLine);

    purple = createButton("PURPLE");
    purple.style('font-size', '15px');
    purple.style('background-color', "purple");
    purple.mousePressed(purpleLine);

    voilet = createButton("VIOLET");
    voilet.style('font-size', '15px');
    voilet.style('background-color', "violet");
    voilet.mousePressed(violetLine);

    black = createButton("BLACK");
    black.style('font-size', '15px');
    //black.style('background-color',color(0,0,0));
    black.mousePressed(blackLine);
}

function yellowLine() {
    stroke(255, 255, 0);
}

function purpleLine() {
    stroke(128, 0, 128);
}

function violetLine() {
    stroke(127, 0, 255);
}

function greenLine() {
    stroke(0, 255, 0);
}

function orangeLine() {
    stroke(255, 69, 0);
}

function clearBackground() {
    background(255);
}

function blackLine() {
    stroke(0);
}

function redLine() {
    stroke(255, 0, 0);
}

function blueLine() {
    stroke(0, 0, 255);
}

function draw() {
    strokeWeight(3);
    line(pmouseX, pmouseY, mouseX, mouseY);
}