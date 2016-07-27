class ElasticBody {

	//@TODO Dimensões - Supor divs retangulares
	//@TODO massa


	constructor(div, initialPosition, initialSpeed, width, height) {
		this.x = initialPosition
		this.speed = initialSpeed;
		this.width = width;
		this.height = height;
		this.div = div;
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
	static collision (elasticBody1, elasticBody2) {
		//@TODO 
	}
}
/*
elasticBody1 = new ElasticBody(0,0);
elasticBody2 = new ElasticBody(1,0);
elasticBody3 = new ElasticBody(2,0);
elasticBody4 = new ElasticBody(3,0);

divBattle = [
	elasticBody1,
	elasticBody2,
	elasticBody3,
	elasticBody4,
]; 
*/