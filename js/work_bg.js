var backgroundArr = ["rgb(238,191,78)","rgb(248,143,101)","rgb(34, 85, 131)","rgb(93,208,255)", "rgb(0,0,0)"];

function updatePalette(h){
	if(h>=0){
		$("#palette").css("background", backgroundArr[h]);	
	}
	else{
		$("#palette").css("background", "#000");
	}
}
