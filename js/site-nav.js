$(function(){
	var selector = '.'+window.location.pathname.split('/')[1]+'-nav';
	$("#horizontal-menu").children(selector).css('display', 'none');
	$("#menuToggle").children(selector).css('display', 'none');
});