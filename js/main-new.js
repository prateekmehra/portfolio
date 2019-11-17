var firstClick = true;

$(document).load(function(){
	// document.getElementById('music').volume = 0;

	$(".project").hover3d({
		selector: ".project__card",
		perspective: 2500,
		sensitivity: 30,
	});
});

$(document).ready(function(){
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

	$(".project").hover3d({
		selector: ".project__card",
		perspective: 2500,
		sensitivity: 30,
	});

		
	
	$('#project-box .intro-box-dimensions').hover(function(){	
			$('.project_canvas.before-scroll').hover(function(){
				if(window.pageYOffset > 1100 && window.pageYOffset < 1180){
					$(this).addClass('add-effects');
				}
			}, function(){
				$(this).removeClass('add-effects');
			});
	});

	$('.project_canvas').hover(function(){
		console.log($(this));
		if(window.pageYOffset > 1100 && window.pageYOffset < 1180){
			$('#project-box .intro-box-dimensions > *:not(:hover).before-scroll').addClass('add-blur');
		}
	}, function(){
		$('#project-box .intro-box-dimensions > .project_canvas.before-scroll').removeClass('add-blur');
	});


	
	var controller = new ScrollMagic.Controller();

	var tween = new TimelineMax();
	tween.to('.ripple', 1, {'opacity': '0'})
	    .to('#flipper', 1, {className:"-=flip-container"}, "+=5")
	    .to('#intro-text', 1, {className:"-=anim-front"})
	    .to('#intro-text-back', 1, {className:"-=anim-back"})
	    .to(".panel-1", 100, {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
	    

	var scene = new ScrollMagic.Scene({triggerElement: "#portfolio", duration: 600, offset: 700})
		.setTween(tween)
		.addTo(controller);


	var tween = new TimelineMax();
	
	tween
		.to('.project_canvas', 300, {className:"+=before-scroll"}, 0)
		
		.to('.item-1', 300, {width: $('.item-1 .screen').width() + 'px', height: $('.item-1 .screen').height() + 'px', borderRadius: '20px'}, 0)
		.to('.item-2', 300, {width: $('.item-2 .screen').width() + 'px', height: $('.item-2 .screen').height() + 'px', borderRadius: '20px'}, 0)
		.to('.item-3', 300, {width: $('.item-3 .screen').width() + 'px', height: $('.item-3 .screen').height() + 'px', borderRadius: '20px'}, 0)
		.to('.item-4', 300, {width: $('.item-4 .screen').width() + 'px', height: $('.item-4 .screen').height() + 'px', borderRadius: '9px'}, 0)
		.to('.item-5', 300, {width: $('.item-5 .screen').width() + 'px', height: $('.item-5 .screen').height() + 'px', borderRadius: '20px'}, 0)
		.to('.item-6', 300, {width: $('.item-6 .screen').width() + 'px', height: $('.item-6 .screen').height() + 'px', borderRadius: '20px'}, 0)
		.to('.project_canvas', 100, {transform: 'scale(0.5)'}, 0)
		.to('#project-box', 100, {top: "44%"}, 0)
		

		// .to('.project_canvas', 300, { width: '75vw', height: '80vh', top: '-=25%', left:'-=25%', borderRadius: '20px'}, 0);

	var scene = new ScrollMagic.Scene({triggerElement: "#portfolio", duration: 300, offset: 1100})
		.setTween(tween)
		.addTo(controller);


	var tween = new TimelineMax();
	
	tween
	.to('.hardware', 1, {display: 'block', opacity: 1}, 0)
	.to('.screen', 1, {display: 'block', opacity: 1}, 0)
	.to('project_canvas', 1, {className: "-=before-scroll"}, 0)
	.to('.item-1', 200, {left:"10vw"}, 100)
	.to('.item-2', 200, {top: "100vh", left:"10vw"}, 100)
	.to('.item-3', 200, {top: "100vh", left:"10vw"}, 100)
	.to('.item-4', 200, {top: "200vh", left:"10vw"}, 100)
	.to('.item-5', 200, {top: "300vh", left:"10vw"}, 100)
	.to('.item-6', 200, {top: "400vh", left:"10vw"}, 100)
	.to('.project_canvas', 1, {background: "rgba(255, 255, 255, 0)"}, 0)
	

	.to('.project_canvas', 1, {className:"+=after-scroll"}, 299)
	.to('.project_canvas', 200, {transform: 'scale(1)'}, 100)
	.to('.panel-1', 300, {backgroundColor: '#111'}, 0)
	
	

	var scene = new ScrollMagic.Scene({triggerElement: "#portfolio", duration: 300, offset: 1500})
		.setTween(tween)
		// .addIndicators({name: "after-scroll"})
		.addTo(controller);


	var tween = new TimelineMax();

	tween
	.to('.postimg', 1, {display: 'block', opacity: 1}, 0)
	.to('.project-intro', 1, {overflowY: 'scroll'}, 0);
	
	var scene = new ScrollMagic.Scene({triggerElement: "#portfolio", duration: 1, offset: 1700})
		.setTween(tween)
		// .addIndicators({name: "showtext"})
		.addTo(controller);

	// var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 100})
	// 	.setPin(".postimg")
	// 	.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
	// 	.addTo(controller);

	});

	


	

	// $(document).on('click', function(){
	// 	if(firstClick){
	// 		$('#no_music').toggle();
	// 		$('#yes_music').toggle();
	// 		firstClick = false;
	// 	}
	// });
	


	// $('.flip-container.intro-box-dimensions').hover(
	// 	function(){
	// 		$("#music")[0].volume = 0;
	// 		$("#music")[0].muted = false;
	// 		if($('#yes_music').is(':visible')){
	// 			$("#music")[0].play();
	// 		}

	// 		var vol_in = setInterval(function() 
	// 		{ 
	// 			if($('#music')[0].volume < 0.5){
 //   					$('#music')[0].volume += 0.01; 
 //   				}
	// 			else clearInterval(vol_in);  
	// 		}, 100);
		
	// },function(){

	// 	$("#line-animation-holder").hide();
	// 	$("#music").animate({volume: 0}, 1000);
		
	// });

	
function musicMaker(e){	
	document.getElementById('music').play();
	$(e).children('#no_music').toggle();
	$(e).children('#yes_music').toggle();
	document.getElementById('music').muted = true;
	if($(e).children('#no_music').is(':visible')){
		document.getElementById('music').volume = 0;
		document.getElementById('music').pause();
	}
}



function showHiddenProjects(){
	$('#hidden-projects-loader').css('display','inline-block');
	setTimeout(function(){
		$('#visible-projects').append($('#hidden-projects').html());
		$('#navigator').append($('#hidden-navigator').html());
		$(".project").hover3d({
			selector: ".project__card",
			perspective: 2500,
			sensitivity: 30,
		});
		scrollInit();
		navInit();
		$('#hidden-projects').remove();
		$('#hidden-navigator').remove();
		$('#hidden-projects-button').remove();
		$('#hidden-projects-loader').css('display','none');
	}, 1000);

}
