var firstClick = true;
var tl1, tl2, tl3; 

$(document).ready(function(){

	
	$('#project-box .intro-box-dimensions').hover(function(){	
			$('.project_canvas.before-scroll').hover(function(){
				if(!$('.project_canvas').hasClass("after-scroll")){
					$(this).addClass('add-effects');
				}
			}, function(){
				$(this).removeClass('add-effects');
			});
	});

	$('.project_canvas').hover(function(){
		if(!$('.project_canvas').hasClass("after-scroll")){
			$('#project-box .intro-box-dimensions a > *:not(:hover).before-scroll').addClass('add-blur');
			$('#project-box .intro-box-dimensions > *:not(:hover).before-scroll').addClass('add-blur');
		}
	}, function(){
		$('#project-box .intro-box-dimensions > .project_canvas').removeClass('add-blur');
		$('#project-box .intro-box-dimensions a > .project_canvas').removeClass('add-blur');
	});

	tl1 = new TimelineMax();

	var panel_shift = -1 * (1680 - window.innerWidth)/5 - 503;
	
	tl1
		.set('#portfolio', {left: '50% +=' + $('.column-right').width()/6})
		.set('.project_canvas', {className:"+=before-scroll"}, 0)
		.set('.item-1', {width: $('.item-1 .screen').width() + 'px', height: $('.item-1 .screen').height() + 'px', borderRadius: '40px'})
		.set('.item-2', {width: $('.item-2 .screen').width() + 'px', height: $('.item-2 .screen').height() + 'px', borderRadius: '40px'})
		.set('.item-3', {width: $('.item-3 .screen').width() + 'px', height: $('.item-3 .screen').height() + 'px', borderRadius: '40px'})
		.set('.item-4', {width: $('.item-4 .screen').width() + 'px', height: $('.item-4 .screen').height() + 'px', borderRadius: '40px'})
		.set('.item-5', {width: $('.item-5 .screen').width() + 'px', height: $('.item-5 .screen').height() + 'px', borderRadius: '40px'})
		.set('.item-6', {width: $('.item-6 .screen').width() + 'px', height: $('.item-6 .screen').height() + 'px', borderRadius: '40px'})
		.set('.item-7', {width: $('.item-7 .screen').width()/1.1 + 'px', height: $('.item-7 .screen').height()/2 + 'px', borderRadius: '40px'})
		.set('.panel-1', {transformOrigin: 'center', transform: 'translateX(' + panel_shift + 'px) scale(0.5)', position:'absolute'})
		.set('.project-intro', {transformOrigin: 'center', transform: 'scale(0.8)'})
		.set('.project_canvas', {transform: 'scale(0.5)'})
		.set('#project-box', {top: "140px", left: "650px"})
		.set('.hardware', {display: 'block', opacity: 1})
		.set('.screen', {display: 'block', opacity: 1})

	tl1.play();

	timeline();

	var prev = window.innerHeight/2 + 700;

	$('.scroll-downs').on('click', function(){
		$(window).scrollTop(window.innerHeight/2 + 700);
	});

	$(".arrow").css({"color":"#000"});

	$(window).scroll(function(){

	if($(window).scrollTop() == 0){
		tl2.restart();
	}

	if($(window).scrollTop() == prev){
		tl2.progress(1).play();
	}

	if($('.project-intro').scrollTop() >= 5 * window.innerHeight){
		$('body').addClass('noscroll');
	}

	if($(window).scrollTop() >= window.innerHeight/2 + 700){
		$('.project-intro').scrollTop($(window).scrollTop() - prev);
	}

	$('.project-intro').scroll(function(){
		if($('.project-intro').scrollTop() == 0){
			$(window).scrollTop(prev + $('.project-intro').scrollTop())
			$('body').removeClass('noscroll');
		}
	})
})

});


$(window).resize(function(){
	timeline();
});
	


	
function timeline(){
	var controller = new ScrollMagic.Controller();

	tl2 = new TimelineMax();
	var panel_halfway = window.innerWidth / 1680 > 1 ? 1 : window.innerWidth / 1680;
	var panel_translate = (window.innerWidth - 1680) * 0.5;

	tl2
	.to('.item-7', 1, {top: '311px'}, 0)
	.to('.project_canvas', 1, {background: "rgba(255, 255, 255, 0)", boxShadow: 'none'}, 0)
	.to('#portfolio', 300, {width: window.innerWidth, height: window.innerHeight, borderRadius: 0, top: 0, left: 0, zIndex: 1, transform: 'scale(1)' , transformOrigin: 'top'}, 0)
	.to('.panel-1', 300, {transformOrigin: 'center', transform: 'translateX(' + panel_translate + 'px) scale(' + panel_halfway + ')'}, 0)
	.to('.project-intro', 300, {transformOrigin: 'center', transform: 'scale(1)'}, 0)
	.to('#project-box', 300, {top: "50%", left: "50%", marginTop: -30}, 0)

	.to('#go-back', 1, {display: 'block'}, 300)

	.to('.item-1', 200, {left:"5vw"}, 400)
	.to('.item-2', 200, {top: "100vh", left:"5vw"}, 400)
	.to('.item-3', 200, {top: "100vh", left:"5vw", display: 'none'}, 400)
	.to('.item-4', 200, {top: "200vh", left:"5vw"}, 400)
	.to('.item-5', 200, {top: "300vh", left:"5vw"}, 400)
	.to('.item-6', 200, {top: "400vh", left:"5vw"}, 400)
	.to('.item-7', 200, {top: "500vh", left:"5vw"}, 400)
	.to('.project_canvas', 1, {className: "-=before-scroll", opacity: 0}, 400)
	.to('.project_canvas', 1, {className:"+=after-scroll"}, 400)
	.to('.screen', 1, {className:"+=after-scroll"}, 400)
	.to('.hardware', 1, {className:"+=after-scroll"}, 400)
	.to('.hardware-ipad', 1, {className:"+=after-scroll"}, 400)
	.to('.panel-1', 200, {transformOrigin: 'center', transform: 'scale(1)'}, 400)

	.to('.project_canvas', 100, {
		transformOrigin: 'left',
		transform: 'scale(1.5)',
		width: window.innerWidth <= 1680 ? 0.6 * window.innerWidth : 1008,
		height: window.innerHeight <= 841 ? 0.6 * window.innerHeight : 504,
		overflow: 'hidden',
		opacity: 1,
		borderRadius: '20px',
		boxShadow: '20px 20px 60px 0px rgba(0, 0, 0, 0.11)'}, 500)
	.to('.device-container.phone', 100, {
		top: window.innerWidth <= 750 ? window.innerHeight <= 750 ? '-140px' : '-50px' : '63px',
		left: window.innerWidth <= 750 ? '-101px' : window.innerWidth < 1025 ? '40px' : window.innerWidth < 1441 ? '-23px' : '86px'}, 500)
	.to('.device-container.ipad', 100, {
		top: window.innerWidth < 1024 ? window.innerHeight <= 750 ? '60px' : '105px' : '35px',
		left: window.innerWidth <= 485 ? '-30px' : window.innerWidth <= 750 ? '0px' : window.innerWidth < 1025 ? '-221px' : window.innerWidth < 1441 ? '-364px' : '-291px', 
		transform: 'scale(0.6)'}, 600)
	.to('.item-1 .screen', 100, {'background-image': 'url("/images/home/posts/ctrg/ctrg.gif")'}, 500)
	.to('.item-2 .screen', 100, {'background-image': 'url("/images/home/posts/cbc/cbc.gif")'}, 500)
	.to('.item-4 .screen', 100, {'background-image': 'url("/images/home/posts/vae/vae.gif")'}, 500)
	.to('.item-7 .screen', 100, {'background-image': 'url("/images/home/posts/navar/navar.gif")'}, 500)
	

	if(window.innerWidth <= 750){
		tl2
		.to('.device-container.ipad', 100, {transformOrigin: 'center', transform: 'translateX (-50%)'}, 500)
		.to('.device-container.phone', 100, {transformOrigin: 'center', transform: 'scale(1) translateX(50%)'}, 500);
	}

	tl2
	.set('.panel', {display: 'block', opacity: 1}, 700)
	.set('.project-intro', {overflowY: 'scroll'}, 700);

	var scene = new ScrollMagic.Scene({triggerElement: "#top", duration: 700, offset: window.innerHeight/2})
		.setTween(tl2)
		// .addIndicators({name: "after-scroll"})
		.addTo(controller);
}

	
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
	