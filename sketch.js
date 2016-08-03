
var particleSystems = [];
var repeller;


function setup() {
 createCanvas(640, 360);
 setFrameRate(60);
 repeller = new Repeller(width/2-30,height/2);
}

function draw(){
	background(255);
	var gravity = createVector(0.0,0.1);


	for (var i = 0; i<particleSystems.length;i++){
		particleSystems[i].applyForce(gravity);
		particleSystems[i].applyRepeller(repeller)
		particleSystems[i].addParticle();
		particleSystems[i].run();
	}
}

function mousePressed(){
	particleSystems.push(new ParticleSystem(1,createVector(mouseX,mouseY)));
}

