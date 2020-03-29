var slider;

function setup() {
  createCanvas(400, 400);
   slider = createSlider(0,100,50);
}

function draw() {
  background(0);
 rect(150,170,slider.value(),slider.value());
}