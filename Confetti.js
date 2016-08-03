var Confetti = function(position){
	this.position=position.copy();
	console.log(this.position);
	Particle.call(this,position);
	this.mass=2;

	//overrides parent display function
	this.display = function(){
		rectMode(CENTER);
		fill(127,this.lifespan);
		stroke(0,this.lifespan);
		strokeWeight(2);
		push();
		translate(this.position.x,this.position.y);
		var theta = map(this.position.x,0,width,0,TWO_PI*2);
		rotate(theta);
		rect(0,0,12,12);
		pop();

	}

	//Inherits from parent
	Confetti.prototype = Object.create(Particle.prototype);
	Confetti.prototype.constructor = Confetti;
}