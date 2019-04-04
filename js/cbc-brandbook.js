var src = [];

	
	for (var i=0;i<=20;i++)
		src.push('./images/cbc/brand-book/p'+i+'.png');
		
	var book, next, prev;
	
$(function(){

	$('#photobook').onebook(src,{skin:['light','dark'], bgDark:'#1A1A1A', flip:'soft', border: 0, pageColor: '#1A1A1A', cesh:true});
	
});



