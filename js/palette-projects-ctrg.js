var colorArr = ["rgb(0,0,0)","rgb(0,0,0)"];

$(window).load(function(){
	$('#horizontal-menu-left .text').css({'color': 'white'});
});



function updatePalette(h){

	if(h>=0){
		$(".navLink").css({"color":colorArr[h%2]});
		$("#el_pDo0vxjT-X").css({"fill":colorArr[h%2], "stroke":colorArr[h%2] });
		$("#menuToggle span").css({"background":colorArr[h%2]});
		$(".arrow").css({"color":colorArr[h%2]});
		$("#go-back").css({"border":"1.5px solid " + colorArr[h%2]})
		$('#horizontal-menu-left .text').css({'color': colorArr[h%2]})
	}
	else{
		$('#horizontal-menu-left .text').css({'color': 'white'})
		$(".navLink").css({"color":colorArr[0]});
		$("#el_pDo0vxjT-X").css({"fill":colorArr[0], "stroke":colorArr[0] });
		$("#menuToggle span").css({"background":colorArr[0]});
		$(".arrow").css({"color":colorArr[0]});
		$("#go-back").css({"border":"1.5px solid " + colorArr[0]});
	}
}


