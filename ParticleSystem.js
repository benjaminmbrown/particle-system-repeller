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