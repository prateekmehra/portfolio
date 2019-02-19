$(function(){
	var src = [];
	src.push('./images/cover.jpg');
	src.push('./images/blank.jpg');
	
	for (var i=0;i<=17;i++)
		src.push('./images/interiors/i'+i+'.jpg');
		
	for (var i=0;i<=4;i++)
		src.push('./images/graphic/g'+i+'.jpg');

	src.push('./images/blank.jpg');				
				
	for (var i=0;i<=11;i++)
		src.push('./images/photography/p'+i+'.jpg');

	src.push('./images/logo.jpg');		

	// $('#photobook').onebook(src,{skin:['light','dark'], bgDark:'#1e1c1e', flip:'soft', border:5, pageColor: 'rgb(128, 128, 128)', cesh:true});

	$(document).ready(function(){

		$(".project").hover3d({
			selector: ".project__card",
			perspective: 2500,
			sensitivity: 30,
		});
});
});
	
