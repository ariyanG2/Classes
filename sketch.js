function setup() {
  createCanvas(800,400);
 box = new Box(100,59,32,38, 10)
 bow = new Box(180, 122, 65, 81, 18)
 circle = new Circle (232, 42, 19)
}

function draw() {
  background(180);  
  box.display();
  bow.display();
  box.fish();
  bow.fish();
  circle.display();
  
}
