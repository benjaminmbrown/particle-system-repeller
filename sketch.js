
var particleSystems = [];


function setup() {
 createCanvas(640, 360);
 setFrameRate(60);
}

function draw(){
	background(51);
	var gravity = createVector(0.1,0.1);


	for (var i = 0; i<particleSystems.length;i++){
		particleSystems[i].applyForce(gravity);
		particleSystems[i].addParticle();
		particleSystems[i].run();
	}
}

function mousePressed(){
	particleSystems.push(new ParticleSystem(1,createVector(mouseX,mouseY)));
}

