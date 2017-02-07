planetas = [];
contadorPlanetas = 0;
const cores = ['#b72d2d', '#7daf33', '#d8bb2b', '#17a590', '#0e668e', '#9713a0'];

class Planet {
	constructor(div, velocidade) {
		this.div = div;
		this.velocidade = velocidade;
	}
}

$(document).ready( () => {
	for(i = 0; i<200; i++) {
		scene = $('.background');
		estrela = $('.estrela.pequena.template').clone();
		estrela.removeClass('template');
		estrela.css('top', Math.random() * scene.height());
		estrela.css('left', Math.random() * scene.width());
		scene.append(estrela);
		estrela.show();
		if (i < 20) {
			estrela = $('.estrela.grande.template').clone();
			estrela.removeClass('template');
			estrela.css('top', Math.random() * scene.height());
			estrela.css('left', Math.random() * scene.width());
			scene.append(estrela);
			estrela.show();
		}
		if (i < 50) {
			estrela = $('.estrela.media.template').clone();
			estrela.removeClass('template');
			estrela.css('top', Math.random() * scene.height());
			estrela.css('left', Math.random() * scene.width());
			scene.append(estrela);
			estrela.show()
		}
	}
	start();
});

function geradorDePlanetas() {
	// Deve gerar até 3 planetas aleatórios simultâneos
	if (planetas.length	 	< 4) {
		// Gera um planeta 
		scene = $('.background');
		var planeta = $('.planeta.template').clone();
		planeta.removeClass('template');
		planeta.css('left', ((Math.random() * (0.95-0.05) ) + 0.05 ) * scene.width());
		planeta.css('top', scene.height());
		planeta.css('background', cores[Math.floor(Math.random() * (5 - 0)) + 0]);
		sizeMultiplier = ( Math.random() * (0.9-0.2) ) + 0.2;
		planeta.css('width', 200*sizeMultiplier);
		planeta.css('height', 200*sizeMultiplier);
		planeta.css('border-radius', 100*sizeMultiplier);
		planeta.id = contadorPlanetas ++;
		scene.append(planeta);
		planeta.show();
		planetaObj = new Planet(planeta, 0.5/(3*sizeMultiplier));
		planetas.push(planetaObj);
	}
	setTimeout( function() { geradorDePlanetas() }, 6000 );
}

function simularPlanetas() {
	for (i=0;i<planetas.length;i++) {
		pos = planetas[i].div.css('top').split('px')[0];
		vel = planetas[i].velocidade;
		planetas[i].div.css({'top': pos-vel});
		if (pos < -200) {
			planetas[i].div.hide();
			planetas.splice(i,1);
		}
	}
	setTimeout( function() { simularPlanetas() }, 16 );
}

function start() {
	geradorDePlanetas();
	simularPlanetas();
}