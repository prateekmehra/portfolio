$(function(){
	$(window).load(function(){

		var selector = 'a.nav-'+window.location.pathname.split('/')[1];
		$("#horizontal-menu").find(selector).each(function( index, element ) {
		    $(element).addClass('active-nav');
		});
		$("#menu").find(selector).each(function( index, element ) {
		    $(element).addClass('active-nav');
		});
		

	});
});