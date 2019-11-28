var tl1, tl2;
var initialWidth, initialHeight; 

$(document).ready(function(){
	initialWidth = window.innerWidth;
	initialHeight = window.innerHeight;

	$('a[href^="#"]').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({scrollTop: $(hash).offset().top}, 900, 'easeInOutQuint');
        } 
    });

	$('#project-box .intro-box-dimensions').hover(function(){	
			$('.project_canvas.before-scroll.hoverable').hover(function(){
				if($('.project_canvas').hasClass("hoverable")){
					$(this).addClass('add-effects');
				}
			}, function(){
				$(this).removeClass('add-effects');
			});
	});

	$('.project_canvas').hover(function(){
		if(!$('.project_canvas').hasClass("after-scroll")){
			$('#project-box .intro-box-dimensions a > *:not(:hover).before-scroll.hoverable').addClass('add-blur');
			$('#project-box .intro-box-dimensions > *:not(:hover).before-scroll.hoverable').addClass('add-blur');
		}
	}, function(){
		$('#project-box .intro-box-dimensions > .project_canvas').removeClass('add-blur');
		$('#project-box .intro-box-dimensions a > .project_canvas').removeClass('add-blur');
	});
});

$(window).on('load', function() {

	timeline();

	var prev = window.innerHeight/2 + 800;

	$('.scroll-downs').on('click', function(){
		$(window).scrollTop(window.innerHeight/2 + 800);
	});

	$(".arrow").css({"color":"#000"});

	$(window).scroll(function(){
		if($('.project-intro').scrollTop() >= 5 * window.innerHeight){
			$('body').addClass('noscroll');
		}

		if($(window).scrollTop() >= window.innerHeight/2 + 800 && $('.project-intro').scrollTop() < 5 * window.innerHeight){
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
	if(initialWidth != window.innerWidth || window.innerWidth > 480){
		tl1.kill();
		tl2.kill();
		timeline();
		initialWidth = window.innerWidth;
	}
});
	
function timeline(){
	var controller = new ScrollMagic.Controller({container: "#hey"});

	tl1 = new TimelineMax();

	var panel_shift = -1 * (1680 - window.innerWidth)/5 - 443;
	
	tl1
		.set('#portfolio', {
			width: '465px', height: '465px',
			backgroundColor: '#f9f9f9', borderRadius: '15%', overflow: 'hidden', boxShadow: 'inset 0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
			position: 'fixed'
		});
		

	if(window.innerWidth <= 750){
		tl1.set('#portfolio', {top: 'calc(10vh + 192px)', left: '50%', transform: 'scale(0.7) translateX(-50%)'})
	}
	else if (window.innerWidth <= 1024){
		tl1.set('#portfolio', { top: '44%', transform: 'perspective(1px) scale(0.8) translateY(-50%)', left: window.innerWidth/2 - 50})
	}
	else if (window.innerWidth <= 1440){
		tl1.set('#portfolio', { top: '50%', transform: 'perspective(1px) translateY(-50%)', left: window.innerWidth/2 + $('#portfolio-holder').width()/8 - 30})
	}
	else {
		tl1.set('#portfolio', { top: '50%', transform: 'perspective(1px) translateY(-50%)', left: window.innerWidth/2 + $('#portfolio-holder').width()/5 })
	}
			
		
		//pre-reqs
		tl1
		.set('.panel', {opacity: 0})
		.set('.panel-1', {top: '0px', display: 'block', width: '1680px', height: '100%', margin: 'auto'})
		.set('.project-intro', {overflowY: 'visible'})
		.set('#project-box', {zIndex: 1, position: 'absolute', display: 'block', marginTop: 0})
		.set('#project-box', {top: '140px', left: '650px'}, 0)
		.set('.project_canvas', {
			background: '#fff',
			borderRadius: '15%',
			boxShadow: '20px 20px 60px 0px rgba(0, 0, 0, 0.11)', 
			position: 'absolute', 
			overflow: 'visible',
		})
		.set('.project_canvas.phone', {height:' 568px', width:'262px',  transformOrigin:' center', borderRadius: '40px'})
		.set('.project_canvas.ipad', {width:' 862px' , height: '647px', transformOrigin: 'center', borderRadius: '40px'})
		.set('.project_canvas.ipad.glasses', {width:  '784px', height: '324px', borderRadius: '40px'})
		.set('.device-container', {position: 'relative', top: '-27px', left: '-29px', transform: 'none', transformOrigin: 'center'})
		.set('.hardware', {className: "-=after-scroll"})
		.set('.project_canvas', {className: "-=after-scroll"})
		.set('.project_canvas', {transformOrigin: 'center'})
		.set('.screen', {className: "-=after-scroll"})
		.set('.item-3', {display: 'block'})
		.set('.scroll-downs', {display: 'block', opacity: 1})
		.set('.scroll-downs-text', {display: 'block', opacity: 1})
		.set('.screen', {clearProps: 'background-image'})
		

		tl1
		.set('.project_canvas', {className:"+=before-scroll"})
		.set('.project_canvas', {transform: 'scale(0.5)'})
		.set('.panel-1', {transformOrigin: 'center', transform: 'translateX(' + panel_shift + 'px) scale(0.5)', position:'absolute'})
		.set('.project-intro', {transformOrigin: 'center', transform: 'scale(0.8)', width: '100vw', position: 'fixed'})
		.set('.hardware', {display: 'block', opacity: 1})
		.set('.screen', {display: 'block', opacity: 1});

	tl2 = new TimelineMax();
	var panel_halfway = window.innerWidth / 1680 > 1 ? 1 : window.innerWidth / 1680;
	var panel_translate = (window.innerWidth - 1680) * 0.5;

	tl2
	.set('.project_canvas', {className: "+=hoverable"}, 270)
	.to('.item-7', 1, {top: '311px'}, 0)
	.to('.project_canvas', 1, {background: "rgba(255, 255, 255, 0)", boxShadow: 'none'}, 0)
	.to('#portfolio', 300, {width: window.innerWidth, height: window.innerHeight, borderRadius: 0, top: 0, left: 0, zIndex: 1, transform: 'scale(1)' , transformOrigin: 'top'}, 0)
	
	.to('.scroll-downs', 300, {opacity: 0, display: 'none'}, 0)
	.to('.scroll-downs-text', 300, {opacity: 0, display: 'none'}, 0)
	.to('.panel-1', 300, {transformOrigin: 'center', transform: 'translateX(' + panel_translate + 'px) scale(' + panel_halfway + ')'}, 0)
	.to('.project-intro', 300, {transformOrigin: 'center', transform: 'scale(1)'}, 0)
	.to('#project-box', 300, {top: "50%", left: "50%", marginTop: -30}, 0)

	.to('#go-back', 1, {display: window.innerWidth < 481 ? 'block': 'none'}, 300)
	.set('.project_canvas', {className: "-=hoverable"}, 390)
	.to('.item-1', 100, {left:"5vw"}, 300)
	.to('.item-2', 100, {top: "100vh", left:"5vw"}, 300)
	.to('.item-3', 100, {top: "100vh", left:"5vw", display: 'none'}, 300)
	.to('.item-4', 100, {top: "200vh", left:"5vw"}, 300)
	.to('.item-5', 100, {top: "300vh", left:"5vw"}, 300)
	.to('.item-6', 100, {top: "500vh", left:"5vw"}, 300)
	.to('.item-7', 100, {top: "400vh", left:"5vw"}, 300)
	.set('.project_canvas', {className: "-=before-scroll"}, 300)
	.to('.project_canvas', 1, {className:"+=after-scroll"}, 300)
	.to('.screen', 1, {className:"+=after-scroll"}, 300)
	.to('.hardware', 1, {className:"+=after-scroll"}, 300)
	.to('.hardware-ipad', 1, {className:"+=after-scroll"}, 300)
	.to('.panel-1', 100, {transformOrigin: 'center', transform: 'scale(1)'}, 300)

	.to('.project_canvas', 100, {
		transformOrigin: 'left',
		transform: 'scale(1.5)',
		width: window.innerWidth <= 1680 ? 0.6 * window.innerWidth : 1008,
		height: window.innerHeight <= 841 ? 0.6 * window.innerHeight : 504,
		overflow: 'hidden',
		opacity: 1,
		borderRadius: '20px',
		boxShadow: '20px 20px 60px 0px rgba(0, 0, 0, 0.11)'}, 400)
	.to('.device-container.phone', 100, {
		top: window.innerWidth <= 750 ? window.innerHeight <= 750 ? '-140px' : '-50px' : '63px',
		left: window.innerWidth <= 750 ? '-101px' : window.innerWidth < 1025 ? '40px' : window.innerWidth < 1441 ? '-23px' : '86px'}, 400)
	.to('.device-container.ipad', 100, {
		top: window.innerWidth < 1024 ? window.innerHeight <= 750 ? '60px' : '105px' : '35px',
		left: window.innerWidth <= 485 ? '-30px' : window.innerWidth <= 750 ? '0px' : window.innerWidth < 1025 ? '-221px' : window.innerWidth < 1441 ? '-364px' : '-291px', 
		transform: 'scale(0.6)'}, 400)
	.to('.item-1 .screen', 100, {'background-image': 'url("/images/home/posts/ctrg/ctrg.gif")'}, 400)
	.to('.item-2 .screen', 100, {'background-image': 'url("/images/home/posts/cbc/cbc.gif")'}, 400)
	.to('.item-4 .screen', 100, {'background-image': 'url("/images/home/posts/vae/vae.gif")'}, 400)
	.to('.item-7 .screen', 100, {'background-image': 'url("/images/home/posts/navar/navar.gif")'}, 400)
	

	if(window.innerWidth <= 750){
		tl2
		.to('.device-container.ipad', 100, {transformOrigin: 'center', transform: 'translateX (-50%)'}, 400)
		.to('.device-container.phone', 100, {transformOrigin: 'center', transform: 'scale(1) translateX(50%)'}, 400);
	}
	else {
		tl2
		.to('.device-container.ipad', 100, {transformOrigin: 'center', transform: 'translateX (0)'}, 400)
		.to('.device-container.phone', 100, {transformOrigin: 'center', transform: 'scale(1) translateX(0)'}, 400);
	}

	tl2
	.set('.panel', {display: 'block', opacity: 1}, 500)
	.set('.project-intro', {overflowY: 'scroll'}, 500)
	.set('.item-1', {left:"5vw"}, 500)
	.set('.item-2', {top: "100vh", left:"5vw"}, 500)
	.set('.item-3', {top: "100vh", left:"5vw", display: 'none'}, 500)
	.set('.item-4', {top: "200vh", left:"5vw"}, 500)
	.set('.item-5', {top: "300vh", left:"5vw"}, 500)
	.set('.item-6', {top: "500vh", left:"5vw"}, 500)
	.set('.item-7', {top: "400vh", left:"5vw"}, 500)

	var scene = new ScrollMagic.Scene({triggerElement: "#top", duration: 600, offset: window.innerHeight/2 + 100})
		.setTween(tl2)
		// .addIndicators({name: "after-scroll"})
		.addTo(controller);


	var isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);

	if (isMobile) {
		var myScroll = new IScroll('#hey',
					{
					
						scrollX: false,
						scrollY: true,
						scrollbars: true,
						// deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
						// if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
						useTransform: true,
						useTransition: false,
						probeType: 3,
						click: true 
					}
				);
		
		// overwrite scroll position calculation to use child's offset instead of container's scrollTop();
		controller.scrollPos(function () {
			return -myScroll.y;
		});

		myScroll.on("scroll", function () {
			controller.update(true);
		});

		// add indicators to scrollcontent so they will be moved with it.
		// scene.addIndicators({parent: ".scrollContent"});
	} 
	else {
		// add indicators (requires plugin)
		// scene.addIndicators();						
	}
}
	