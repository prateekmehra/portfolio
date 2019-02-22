$(function(){
	$(window).ready(function(){
		setTimeout(function(){
            $('.loading-overlay').fadeOut('slow');
       		},2000);
				
			$('body').queue(function (next) { 
				$(this).css({'overflow-y':'visible'});	
				next();
			});
			console.log($("#menuToggle input").is(':checked'));
			$("#menuToggle input").prop('checked', false);
			console.log($("#menuToggle input").is(':checked'));
		});
});