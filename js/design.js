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
	var book, next, prev;
	
$(function(){

	$('#photobook').onebook(src,{skin:['light','dark'], bgDark:'#1e1c1e', flip:'soft', border:5, pageColor: 'rgb(128, 128, 128)', cesh:true});
	$(document).ready(setTimeout(create_event_listeners,1000));
	
});

var create_event_listeners = function(){
		book =  $("div[id$='_stage']")[0];
		next = 	$("div[title='Next']").parent()[0];
		prev = 	$("div[title='Prev']").parent()[0];
		book.addEventListener("click", update_section_name);
		book.addEventListener("wheel", update_section_name);
		next.addEventListener("mouseup", update_section_name);
		prev.addEventListener("mouseup", update_section_name);
	}
var update_section_name = function(){
		if (Number($("[id$='_page_numbers'] span").text().split("/")[0]) >= 13){
			$("#i-menu").removeClass("large-title");
			$("#g-menu").removeClass("large-title");
			$("#p-menu").removeClass("large-title");
			$("#p-menu").addClass("large-title");
		}
		else if (Number($("[id$='_page_numbers'] span").text().split("/")[0]) >= 10){
			$("#i-menu").removeClass("large-title");
			$("#g-menu").removeClass("large-title");
			$("#p-menu").removeClass("large-title");
			$("#g-menu").addClass("large-title");
		}
		else if (Number($("[id$='_page_numbers'] span").text().split("/")[0]) >= 1){
			$("#i-menu").removeClass("large-title");
			$("#g-menu").removeClass("large-title");
			$("#p-menu").removeClass("large-title");
			$("#i-menu").addClass("large-title");
		}
		else{
			$("#i-menu").removeClass("large-title");
			$("#g-menu").removeClass("large-title");
			$("#p-menu").removeClass("large-title");
		}
	};

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

	setTimeout(create_event_listeners,1000);
};



