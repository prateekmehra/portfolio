$(function(){
	console.log(window.location.pathname.split('/')[1]);
	var selector = '#'+window.location.pathname.split('/')[1]+'-nav';
	console.log($(selector));
	$(selector).css('display', 'none');
});