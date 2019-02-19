var colorArr = ["rgb(17,17,17)","rgb(255,255,255)"];



function updatePalette(h){
	if(h>=0){
		$(".navLink").css({"color":colorArr[h%2]});
		$("#el_pDo0vxjT-X").css({"fill":colorArr[h%2]});
		$("#menuToggle span").css({"background":colorArr[h%2]});
		$(".arrow").css({"color":colorArr[h%2]});
		$("#go-back").css({"border":"2px solid " + colorArr[h%2]})
	}
}


