
var particleSystems = [];
var repeller, attractor;


function setup() {
 createCanvas(640, 360);
 setFrameRate(60);
 repeller = new Repeller(width/2-30,height/2);
 attractor = new Attractor(width/2+50, height/2);
}

function draw(){
	background(255);
	var gravity = createVector(0.0,0.1);


	for (var i = 0; i<particleSystems.length;i++){
		particleSystems[i].applyForce(gravity);
		particleSystems[i].applyRepeller(repeller);
		particleSystems[i].applyAttractor(attractor);
		particleSystems[i].addParticle();
		particleSystems[i].run();
	}
}

function mousePressed(){
	particleSystems.push(new ParticleSystem(1,createVector(mouseX,mouseY)));
}

