
$(window).load(function(){
	var selector = 'a.nav-' + window.location.pathname.split('/')[1].split('.')[0];
	console.log(selector);
	$("#horizontal-menu").find(selector).each(function( index, element ) {
		console.log(selector);
	    $(element).addClass('active-nav');
	});
	$("#menu").find(selector).each(function( index, element ) {
	    $(element).addClass('active-nav');
	});

});
