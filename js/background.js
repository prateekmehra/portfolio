var backgroundArr = ["rgb(238,191,78)","rgb(248,143,101)","rgb(34, 85, 131)","rgb(93,208,255)","rgb(219, 108, 96)","rgb(0, 179, 111)","rgba(189,110,110,0.7)", "rgba(255, 127, 64, 0.7)","rgba(71, 115, 184, 0.9)"];
var colorArr = ["rgb(17,17,17)","rgb(255,255,255)"];

function addBackgroundBlur(){
	$("#palette").addClass("blurred-box");
}

function removeBackgroundBlur(){
	$("#palette").removeClass("blurred-box");
}

function updatePalette(h){
	if(h>=0){
		$("#palette").css({"background":backgroundArr[h]});
		$(".navLink").css({"color":colorArr[h%2]});
		$("#el_pDo0vxjT-X").css({"fill":colorArr[h%2]});
		$("#menuToggle span").css({"background":colorArr[h%2]});
		$(".arrow").css({"color":colorArr[h%2]});
		$("#go-back").css({"border":"2px solid " + colorArr[h%2]});
	}
	else{
		$("#palette").css({"background":"none"});
		$(".navLink").css({"color":colorArr[1]});
		$("#el_pDo0vxjT-X").css({"fill":colorArr[1]});
		$("#menuToggle span").css({"background":colorArr[1]});
		$(".arrow").css({"color":colorArr[1]});
		$("#go-back").css({"border":"2px solid " + colorArr[1]});
	}
}


