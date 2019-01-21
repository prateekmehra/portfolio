$(function(){
$(window).load(function(){
		$('.loading-overlay').delay(200).fadeOut('slow');	
		$('body').delay(2000).queue(function (next) { 
			$(this).css({'overflow':'visible'});	
			next();
		});
	});
});