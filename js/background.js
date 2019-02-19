var backgroundArr = ["rgb(238,191,78)","rgb(34, 85, 131)","rgb(93,208,255)","rgb(219, 108, 96)","rgb(0, 179, 111)","rgba(189,110,110,0.7)", "rgba(255, 127, 64, 0.7)","rgba(71, 115, 184, 0.9)"];

function addBackgroundBlur(){
	$("#palette").addClass("blurred-box");
}

function removeBackgroundBlur(){
	$("#palette").removeClass("blurred-box");
}

function updatePalette(h){
	if(h>=0){
		$("#palette").css({"background":backgroundArr[h]});
	}
	else{
		$("#palette").css({"background":"none"});
	}
}


