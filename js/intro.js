query = window.location.search.substring(1);
var audio = new Audio('theme.mp3');

setTimeout( () => {
	audio.play();
}, 5500 );

setTimeout( () => {
	window.location = "./jogo.html?" + query;
}, 50000 );
