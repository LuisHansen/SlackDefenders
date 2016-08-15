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
	var pontos = 0;
	generateLevel(1);
}

function generateLevel(level) {
	if (level == 1){
		if (enemies.length < 5){
			timer = setTimeout(function() {
				enemies.push(generateEnemy());
				console.log(enemies);
				generateLevel(1);
			},2000);
		}
	}
}

function generateEnemy() {
	var earth = $('#terra');
	var scene = $('.scene');
	var wh = Math.random() * 80 + 40;
	var size = {
		height: wh+20,
		width: wh
	}
	var random = Math.random();
	// if (random < 0.25) {
	// 	position = {
	// 		top : Math.random() * scene.height(),
	// 		left: 0 - size.width
	// 	};
	// 	speed = {
	// 		y: earth.position().top - position.top,
	// 		x: earth.position().left
	// 	}
	// } else if (random < 0.5) {
	// 	position = {
	// 		top : 0 - size.height,
	// 		left: Math.random() * scene.width()
	// 	};
	// 	speed = {
	// 		y: earth.position().top,
	// 		x: earth.position().left - position.left
	// 	}
	// } else if (random < 0.75) {
	// 	position = {
	// 		top : Math.random() * scene.height(),
	// 		left: scene.width() + size.width
	// 	};
	// 	speed = {
	// 		y: earth.position().top * (-1),
	// 		x: earth.position().left - position.left
	// 	}
	// } else {
	// 	position = {
	// 		top : scene.height() + size.height,
	// 		left: Math.random() * scene.width()
	// 	};
	// 	speed = {
	// 		y: earth.position().top - position.top,
	// 		x: earth.position().left * (-1)
	// 	}
	// }
	position = {
		y: 100,
		x: 100
	};
	speed = {
		x: 10,
		y: 10,
	};
	var div = $('.villain.template').clone();
	div.removeClass('template');
	div.css('top', position.y);
	div.css('left', position.x);
	div.height(size.height);
	div.width(size.width);
	scene.append(div);
	div.show();
	return enemy = new ElasticBody(div, position, speed, size.width, size.height, 200);
}