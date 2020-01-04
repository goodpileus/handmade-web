var font;
var vehicles = [];
let slider;
let val;

function preload() {
  font = loadFont('VTF victorianna thin.otf')

}

function setup() {

  resetSketch();

  var button = createButton("reset");
  button.mousePressed(resetSketch);
  button.position(windowWidth / 2 - 34, windowHeight - 50);
  button.style("font-family", "arial");
  button.style("font-size", "14px");
  button.size(68, 26);
  button.style("background-color", "white");
  button.style("color", "black");
  button.style("border", "none");
  button.style("border-radius", "18px");
  button.style("z-index", "5");
}

function windowResized() {
  resetSketch();
}


function resetSketch() {
  vehicles = [];
  createCanvas(windowWidth, windowHeight);
  background(0);

  var points = font.textToPoints('Thankful', windowWidth / 2, windowHeight / 2, 180, {
    sampleFactor: 0.25
  });
  console.log(points);

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];

    var vehicle = new Vehicle(pt.x, pt.y, val);
    vehicles.push(vehicle);
  }
}

function draw() {
  background("black");
  let val = 2;
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }


}
