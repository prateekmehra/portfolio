
$(function(){
	$(window).load(function(){
		$("#menuToggle").click(function(){
			if ($("#menuToggle").children(':input').is(':checked')){
				$("#menu-overlay").removeClass('hidden').addClass('visible');
				$("#menu-overlay").show();
				/* color logo and arrow white over hamburger overlay */
				$("#el_pDo0vxjT-X").css({"fill":"rgb(255,255,255)"});
				$("#menuToggle span").css({"background":"rgb(255,255,255)"});
				$(".arrow").css({"color":"rgb(255,255,255)"});
				$("#go-back").css({"color":"rgb(255,255,255)"});
			}
			else{
				$("#menu-overlay").removeClass('visible').addClass('hidden');
				updatePalette(projectIndex);
			}
		});
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