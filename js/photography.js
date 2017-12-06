$(function(){
var src = [ './images/photography/p0.jpg',
				'./images/photography/p1.jpg', 
				'./images/photography/p2.jpg',
				'./images/photography/p3.jpg', 
				'./images/photography/p4.jpg',
				'./images/photography/p5.jpg', 
				'./images/photography/p6.jpg',
				'./images/photography/p7.jpg', 
				'./images/photography/p8.jpg',
				'./images/photography/p9.jpg', 
				'./images/photography/p10.jpg',
				'./images/photography/p11.jpg'
				];				
						
			
$('#photobook').onebook(src,{skin:['light','dark'], bgDark:'#1e1c1e', flip:'soft', border:5, pageColor: 'rgb(128, 128, 128)', cesh:true});
});