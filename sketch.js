
var cannon
var ball
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;


function setup() {
 
    var canvas = createCanvas(400,400);
cannon = new Cannon(10,360,30,90,PI/7)
this.ball = this.bodies.Rectangle(200,30,20,20)
}

function draw() {
    this.add (world, this.cannon)
    this.add (world, this.ball)
}


