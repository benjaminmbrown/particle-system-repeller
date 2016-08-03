var Attractor = function(x, y) {

    this.power = 150;
    this.position = createVector(x, y);

    this.display = function() {
    	stroke(255);
    	strokeWeight(2);
    	fill(127);
    	ellipse(this.position.x,this.position.y,40,40);

	}

	this.attract = function(p){
		var force = p5.Vector.sub(this.position,p.position);
		var distance = force.mag();
		distance = constrain(distance,5,50);
		force.normalize();
		var strength = 1 * this.power/(distance*distance);
		force.mult(strength);
		return force;
	}



}
