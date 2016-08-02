function moveBackground(x) {
	$('.scene').css('background-position-x', x + "px");
}

$(document).ready(function() {
	$(function() {
		var x = 0;
		setInterval(function () {
			moveBackground(x -= 1);
			
		}, 10000)
	})

	var ponies = $('.pony');
	var i = 0;
	ponies.each(function() {

	})
});