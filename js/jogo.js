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
}

class Collision {


	/*Retorna true se estão em contato */

	static contact (elasticBody1, elasticBody2) {
		//@TODO
		return true;
	}
	/*Os dois objetos colidem. O método atualiza as velocidades deles */
	static collision (elasticBody1, elasticBody2) {
		//@TODO 
	}
}

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
