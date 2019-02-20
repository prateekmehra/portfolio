var hovered = false;
$(document).ready(function(){
	$(".flip-container").hover(function(){
		hovered=true;
	});

	 var timerId = setInterval(function(){

       if(hovered){
           clearInterval(timerId);
       }
       else{
       		$(".flip-container").addClass('hover');
       		setTimeout(function(){
       			$(".flip-container").removeClass('hover');
       		},1000);
       }

    }, 10000);

	
});
