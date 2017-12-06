$(function(){
	for (var i=0;i<=11;i++)
		src.push('./images/photography/p'+i+'.jpg');		
							
	$('#photobook').onebook(src,{skin:['light','dark'], bgDark:'#1e1c1e', flip:'soft', border:5, pageColor: 'rgb(128, 128, 128)', cesh:true});
});