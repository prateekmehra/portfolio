$(window).load(function(){

	var selector = '.'+window.location.pathname.split('/')[1]+'-nav';
	$("#horizontal-menu").children(selector).each(function( index, element ) {
	    $(element).css('display','none');
	});
	$("#menu").children(selector).each(function( index, element ) {
	    $(element).css('display','none');
	});

});