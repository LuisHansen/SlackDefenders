class ElasticBody {

	constructor(div, initialPosition, initialSpeed, width, height, mass) {
		this.div = div;
		this.position = initialPosition
		this.speed = initialSpeed;
		this.width = width;
		this.height = height;
		this.mass = mass;
		var hitbox = new SAT.Box(new SAT.Vector(initialPosition.x,initialPosition.y), width, height);
		this.hitpolygon = hitbox.toPolygon();
	}

	move(delta) {
		this.position.x += this.speed.x * delta;
		this.position.y += this.speed.y * delta;
		this.hitpolygon.pos.x += this.speed.x * delta;
		this.hitpolygon.pos.y += this.speed.y * delta;
	}

	updateUI () {
		this.div.css({'left':this.position.x});
		this.div.css({'top':this.position.y});
	}

	contact(elasticBody) {
		return SAT.testPolygonPolygon(this.hitpolygon, elasticBody.hitpolygon);
	    // return !(
	    //     ((this.position.y + this.height) < (elasticBody.position.y)) ||
	    //     (this.position.y > (elasticBody.position.y + elasticBody.height)) ||
	    //     ((this.position.x + this.width) < elasticBody.position.x) ||
	    //     (this.position.x > (elasticBody.position.x + elasticBody.width))
	    // );
	}

	collide (obstacle) {
		var aux = obstacle.speed.x; 
		obstacle.speed.x = (aux * (obstacle.mass - this.mass) + 2 * this.mass * this.speed.x) / (obstacle.mass + this.mass);
		this.speed.x = (this.speed.x * (this.mass - obstacle.mass) + 2 * obstacle.mass * aux) / (obstacle.mass + this.mass);

		aux =  obstacle.speed.y; 
		obstacle.speed.y = (aux * (obstacle.mass - this.mass) + 2 * this.mass * this.speed.y) / (obstacle.mass + this.mass);
		this.speed.y = (this.speed.y * (this.mass - obstacle.mass) + 2 * obstacle.mass * aux) / (obstacle.mass + this.mass);

	}

	collide_wall(document) {
		var top = this.position.y <= 1;
		var left = this.position.x <= 1;
		var right = this.position.x >= document.width()-this.height+1;
		var bottom = this.position.y >= document.height()-this.width+1;

		if(top || bottom) {
			this.speed.y = (-1) * this.speed.y; 
		}
		if(right || left){ 
			this.speed.x = (-1) * this.speed.x;
		}





	}
}

function start() {
	rotate();
	rotateearth();
	generateEnemies(0);
}

function generateEnemies(counter) {
	var delay = Math.random() * 1000 * 1 * Math.exp(- 0.2 * Math.pow(counter, 0.2));

	var earth = $('#terra');
	var scene = $('.scene');

	setTimeout(function() {

		var random = Math.random();

		if (random < 0.25) {
			position = {
				top : Math.random() * scene.height(),
				left: 0
			}
		} else if (random < 0.5) {
			position = {
				top : 0,
				left: Math.random() * scene.width()
			}
		} else if (random < 0.75) {
			position = {
				top : Math.random() * scene.height(),
				left: scene.width()
			}
		} else {
			position = {
				top : scene.height(),
				left: Math.random() * scene.width()
			}
		}

		var size = {
			height: Math.random() * 40 + 40,
			width: Math.random() * 40 + 40,
		}

		var div = $('.villain.template').clone();
		div.removeClass('template');
		div.css('top', position.top);
		div.css('left', position.left);
		div.height(size.height);
		div.width(size.width);
		

		scene.append(div);
		div.show();

		var enemy = new ElasticBody(div, 50, 50, 50, 50, 0.5);
		generateEnemies(counter + 1);
	}, delay);
}