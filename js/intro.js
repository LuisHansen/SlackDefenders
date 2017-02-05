query = window.location.search.substring(1);
setTimeout( () => {
	window.location = "./jogo.html?" + query;
}, 50000 );