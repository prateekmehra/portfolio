
$(function(){
	$(window).load(function(){
		$('.list-grid-toggle').click(function() {
		  $('.icon').toggleClass('icon-grid');
		})
		// $("#gridToggle").click(function(){
		// 	if ($("#gridToggle").children(':input').is(':checked')){
		// 		$("#menu-overlay").removeClass('hidden').addClass('visible');
		// 		$('body').addClass('noscroll');
		// 		$('html').addClass('noscroll');
		// 		$("#menu-overlay").show();
		// 		/* color logo and arrow white over hamburger overlay */
		// 		$("#el_pDo0vxjT-X").css({"fill":"rgb(255,255,255)", "stroke":"rgb(255,255,255)"});
		// 		$("#gridToggle span").css({"background":"rgb(255,255,255)"});
		// 		$(".arrow").css({"color":"rgb(255,255,255)"});
		// 		$("#go-back").css({"color":"rgb(255,255,255)"});
		// 	}
		// 	else{
		// 		$("#menu-overlay").removeClass('visible').addClass('hidden');
		// 		$('body').removeClass('noscroll');
		// 		$('html').removeClass('noscroll');
		// 		updatePalette(projectIndex);
		// 	}
		// });
	});
});

function rgb2hex(rgb){
 rgb = rgb.match(/^rgb((d+),s*(d+),s*(d+))$/);
 console.log(rgb);
 return "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}