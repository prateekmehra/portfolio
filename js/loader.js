$(function(){
	$(window).ready(function(){
		setTimeout(function(){
            $('.loading-overlay').fadeOut('slow');
       		},2000);
				
			$('body').queue(function (next) { 
				$(this).css({'overflow':'visible'});	
				next();
			});
			$("#menuToggle input").prop('checked', false);
		});
});