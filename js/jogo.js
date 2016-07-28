class ElasticBody {

	//@TODO Dimensões - Supor divs retangulares
	//@TODO massa


	constructor(div, initialPosition, initialSpeed, width, height, mass) {
		this.div = div;
		this.x = initialPosition
		this.speed = initialSpeed;
		this.width = width;
		this.height = height;
		this.mass = mass;
	}

	move(delta) {
		this.x += this.speed * delta;
	}

	updateUI () {
		this.div.css({'left':this.x});
	}	

	/*Retorna true se estão em contato 
	@FIXME 1 dimensao apenas por enquanto
	*/
	contact (elasticBody) {
		var distanceX = Math.abs(this.x - elasticBody.x);
		//distanceY = abs(this.y - elasticBody.y);
		return distanceX <= (this.width+elasticBody.width)/2;		
	}

	/*Os dois objetos colidem. O método atualiza as velocidades deles */
	collide (obstacle) {
		//var energy = (1 * this.speed ** 2 + 1 * obstacle.speed ** 2) / 2;
		//var momentum = (1 * this.speed + 1 * obstacle.speed );
		var aux = obstacle.speed; 
		obstacle.speed = (aux * (obstacle.mass - this.mass) + 2 * this.mass * this.speed) / (obstacle.mass + this.mass);
		this.speed = (this.speed * (this.mass - obstacle.mass) + 2 * obstacle.mass * aux) / (obstacle.mass + this.mass);
	}
}
