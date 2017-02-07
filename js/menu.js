var hero = 'hero=eric';
var villain = 'villain=sales';
var link = "./intro.html?"

function play (){
	window.location = link + hero + "&" + villain;
}

function manas (){
	hero = 'hero=manas';
	$('#manas').addClass('selected');
	$('#ericseletor').removeClass('selected');
	$('#nakajo').removeClass('selected');
	return;
}

function nakajo (){
	hero = 'hero=nakajo';
	$('#nakajo').addClass('selected');
	$('#ericseletor').removeClass('selected');
	$('#manas').removeClass('selected');
	return;
}

function eric (){
	hero = 'hero=eric';
	$('#ericseletor').addClass('selected');
	$('#manas').removeClass('selected');
	$('#nakajo').removeClass('selected');
	return;
}

function customHero (){
	hero = 'hero=custom';
	return;
}

function sales () {
	villain = 'villain=sales';
	$('#sales').addClass('selected-vilao');
	$('#roma').removeClass('selected-vilao');
	return;
}

function roma () {
	villain = 'villain=roma';
	$('#roma').addClass('selected-vilao');
	$('#sales').removeClass('selected-vilao');
	return;
}

function previewFile() {
	var preview = document.getElementById('outImage');
	var file    = document.querySelector('input[type=file]').files[0];
	var reader  = new FileReader();
		reader.addEventListener("load", function () {
		preview.src = reader.result;
	}, false);

	if (file) {
		reader.readAsDataURL(file);
	}

	$('#outImage').addClass('selected');
	customHero();
}