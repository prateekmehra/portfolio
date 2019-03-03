var firstClick = true;
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

	$(document).load(function(){
		document.getElementById('music').volume = 0;
	});

	$(document).ready(function(){
		

		$(".project").hover3d({
			selector: ".project__card",
			perspective: 2500,
			sensitivity: 30,
		});

	$(document).on('click', function(){
		if(firstClick){
			$('#no_music').toggle();
			$('#yes_music').toggle();
			firstClick = false;
		}
	});
		

		
		$('.flip-container.intro-box-dimensions').hover(
			function(){
				$("#music")[0].volume = 0;
				$("#music")[0].muted = false;
				if($('#yes_music').is(':visible')){
					$("#music")[0].play();
				}

				var vol_in = setInterval(function() 
				{ 
					if($('#music')[0].volume < 0.5){
	   					$('#music')[0].volume += 0.01; 
	   				}
					else clearInterval(vol_in);  
				}, 100);
				
				$('#el_bsZm_3-afd').attr("class", "hover");	
				$('svg#el_bsZm_3-afd:hover *, svg#el_bsZm_3-afd.hover *')
				.css({"animation-duration":"9s", "animation-play-state": "running", "animation-iteration-count":"infinite"});
			
				addLines($('.h-line.above.scroll-X'), $('.h-line.below.scroll-XR'), $('.line-hidden-x'), 'margin-top');	
				addLines($('.v-line.left.scroll-Y'), $('.v-line.right.scroll-YR'), $('.line-hidden-y'), 'margin-left');	
				
				$(".scroll-X").css({
					'WebkitAnimationDuration':'30s',
					  '-moz-animation-duration':'30s',
					  'animation-duration':'30s'
				});
				$(".scroll-Y").css({
					'-webkit-animation-duration':'30s',
					  '-moz-animation-duration':'30s',
					  'animation-duration':'30s'
				});
				$(".scroll-XR").css({
					'-webkit-animation-duration':'30s',
					  '-moz-animation-duration':'30s',
					  'animation-duration':'30s'
				});
				$(".scroll-YR").css({
					'-webkit-animation-duration':'30s',
					  '-moz-animation-duration':'30s',
					  'animation-duration':'30s'
				});
				$(".intro-out-scroll").css({
					'-webkit-animation-duration':'30s',
					  '-moz-animation-duration':'30s',
					  'animation-duration':'30s'
				});

				$.each($('.line-hidden-x'), function(){
					$(this).fadeIn();
				});

				$.each($('.line-hidden-y'), function(){
					$(this).fadeIn();
				});
				
			
		},function(){
			$("#music").animate({volume: 0}, 1000);
			
			
			$(".scroll-X").css({
				'-webkit-animation-duration':'5s',
				  '-moz-animation-duration':'5s',
				  'animation-duration':'5s'
			});
			$(".scroll-XR").css({
				'-webkit-animation-duration':'5s',
				  '-moz-animation-duration':'5s',
				  'animation-duration':'5s'
			});
			$(".scroll-Y").css({
				'-webkit-animation-duration':'5s',
				  '-moz-animation-duration':'5s',
				  'animation-duration':'5s'
			});
			$(".scroll-YR").css({
				'-webkit-animation-duration':'5s',
				  '-moz-animation-duration':'5s',
				  'animation-duration':'5s'
			});
			$(".intro-out-scroll").css({
				'-webkit-animation-duration':'4s',
				  '-moz-animation-duration':'4s',
				  'animation-duration':'4s'
			});

			

			
			$('svg#el_bsZm_3-afd:hover *, svg#el_bsZm_3-afd.hover *')
			.css({"animation-duration":"3s", "animation-play-state": "running", "animation-iteration-count":"infinite"})
			.delay(10)
			.queue(function(next) { 
				document.getElementById('music').muted = true;
				$(this).removeAttr("style");
				
				$.each($('.line-hidden-x'), function(){
					$(this).fadeOut();
				});

				$.each($('.line-hidden-y'), function(){
					$(this).fadeOut();
				});

				next(); 
				});
			
			$('#el_bsZm_3-afd').removeAttr("class");	
		});
	});
});
	
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

function addLines(firstEle, secondEle, allLines, cssProp){
	var min_height = parseFloat(firstEle.css(cssProp));
	var max_height = parseFloat(secondEle.css(cssProp));
	var _height = ( max_height - min_height )/6;
	
	var i = 1;
	$.each(allLines, function(){
		var margin_top = $(this).css(cssProp);
		$(this).css(cssProp, (min_height + (_height * i)));
		i = i + 1;
	});
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
