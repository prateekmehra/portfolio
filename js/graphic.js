$(function(){
	var src = [ './images/graphic/g0.jpg',
		'./images/graphic/g1.jpg', 
		'./images/graphic/g2.jpg',
		'./images/graphic/g3.jpg', 
		'./images/graphic/g4.jpg'
		];				
				
	
	
	$('#photobook').onebook(src,{skin:['light','dark'], bgDark:'#1e1c1e', flip:'soft', border:5, pageColor: 'rgb(128, 128, 128)', cesh:true});
	
});
