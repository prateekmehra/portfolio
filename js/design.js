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
$(function(){

	$('#photobook').onebook(src,{skin:['light','dark'], bgDark:'#1e1c1e', flip:'soft', border:5, pageColor: 'rgb(128, 128, 128)', cesh:true});
	
	});
$("#grid").load(function() {
	console.log("boo");
	console.log($('div[id$="_icons_panel"]'));
});

var reload_photobook = function(arr){
	$("#i-menu").removeClass("large-title");
	$("#g-menu").removeClass("large-title");
	$("#p-menu").removeClass("large-title");

	if(arr=='i'){
		$('#photobook').onebook(src,{startPage: 2,skin:['light','dark'], bgDark:'#1e1c1e', flip:'soft', border:5, pageColor: 'rgb(128, 128, 128)', cesh:true});
		$("#i-menu").addClass("large-title");
	}
	if(arr=='g'){
		$('#photobook').onebook(src,{startPage: 20,skin:['light','dark'], bgDark:'#1e1c1e', flip:'soft', border:5, pageColor: 'rgb(128, 128, 128)', cesh:true});
		$("#g-menu").addClass("large-title");
	}
	if(arr=='p'){
		$('#photobook').onebook(src,{startPage: 26,skin:['light','dark'], bgDark:'#1e1c1e', flip:'soft', border:5, pageColor: 'rgb(128, 128, 128)', cesh:true});
		$("#p-menu").addClass("large-title");
	}
};



