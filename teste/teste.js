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
});