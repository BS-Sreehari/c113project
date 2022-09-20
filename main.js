function preload() {
    
}

function setup() {
    canvas = createCanvas(1000, 500);
    canvas.center();
    canvas.position(500, 250);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw() {
  
    rect(30, 20, 500, 300);
    stroke(0, 128, 0);
    strokeWeight(10); 
    image(video, 100, 50, 350, 250);
}

function music() {
    p = document.getElementById("happy");
    p.play();
}

function save() {
    save("birthdayimage.png");
}

