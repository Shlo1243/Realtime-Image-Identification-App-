function preload() {

}

function setup() {
Canvas=createCanvas(500,400);
video=createCapture(VIDEO);
video.hide();
}

function draw() {
image(video,0,0,500,400);
}