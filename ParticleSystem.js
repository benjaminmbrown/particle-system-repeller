function ParticleSystem(num,position){
	this.origin = position.copy();
	this.particles = [];



	this.run = function(){
		console.log("run particle system");
		for(var i = this.particles.length-1; i>=0;i--){
			var p = this.particles[i];
			p.run();
			if(p.isDead()){
				this.particles.splice(i,1);
			}
		}
	};



	this.applyForce = function(force){
		console.log('applying force:', force);
		for(var i = 0; i < this.particles.length;i++){
			this.particles[i].applyForce(force);
		}
	}

	this.applyRepeller = function(r){
		for(var i = 0; i< this.particles.length;i++){
			this.particles[i].applyForce(r.repel(this.particles[i]));
		}
	}

	this.applyAttractor = function(r){
		for(var i = 0; i< this.particles.length;i++){
			this.particles[i].applyForce(r.attract(this.particles[i]));
			var p = this.particles[i];
			var force = r.attract(p);
			p.applyForce(force);
		}
	}

	this.addParticle = function(){
		var r = random(1);
		if(r<0.5){
			this.particles.push(new Particle(this.origin));
	
		}else{
			this.particles.push(new Confetti(this.origin));
		}
	};
}