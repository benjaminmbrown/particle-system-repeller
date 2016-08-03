var Attractor = function(x, y) {

    this.power = 150;
    this.position = createVector(x, y);

    this.display = function() {
    	stroke(0);
    	strokeWeight(2);
    	fill(127);
    	ellipse(this.position.x,this.position.y,40,40);

	}

	this.attract = function(p){
		var force = p5.Vector.sub(this.position,p.position);
		var distance = force.mag();
		distance = constrain(distance,5,35);
		force.normalize();
		var strength = 1 * this.power/(distance*distance);
		force.mult(strength);
		return force;
	}



}
