var options_dark = {
		cutoutPercentage: 70,
		responsive: true,
		legend: {
			display: false
		}
	};

var options_light = {
		cutoutPercentage: 70,
		responsive: true,
		legend: {
			display: false
		},
		scales: {
        xAxes: [{
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            gridLines: {
                display:false
            }   
        }]
    }
	};

function isCanvasBlank(canvas) {
	var blank = document.createElement('canvas');
	blank.width = canvas.width;
	blank.height = canvas.height;

	return canvas.toDataURL() == blank.toDataURL();
}

function isScrolledIntoView(elem)
{
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return !((docViewBottom < elemTop) || ( elemBottom < docViewTop));
}

function pausevid(b){
	$(b).parent().find("video")[0].pause();
	$(b).parent().find(".play-icon").css('display','inline-block');
	$(b).css('display','none');
}

function playvid(b){
	$(b).parent().find("video")[0].play();
	$(b).parent().find(".pause-icon").css('display','inline-block');
	$(b).css('display','none');
}




var prevScrollpos;
var resolution;
var scrollLock; 
var scene;

$(window).load(function(){
	prevScrollpos = window.pageYOffset;


});

$(window).resize(function(){
	scrollLock = Math.floor(0.8 * window.innerHeight);

	$(".sticky-container").css({'width': window.innerWidth});

	resolution = window.innerWidth / 1650 * 6.8215;
	resolution = resolution > 6.8215 ? resolution : 6.8215;

	$(".hero-device").css({'transform': 'matrix(' + resolution + ', 0, 0,' + resolution + ', 0, 0)'});
	$(".device-anchor").css({'transform': 'matrix(' + resolution + ', 0, 0,' + resolution + ', 0, 0)'});
});


var fontBase = 424/300,                   // selected default width for canvas
    fontSizeBig = 84,                    // default size for font
    fontSizeSmall = 24;

function getFont(canvas, fontSize) {
    var ratio = fontSize / fontBase; 
    var size = canvas.width / canvas.height * ratio;   

    return "100 " + (size|0) + "pt 'CeraPro-Thin'"; // set font
}

$.fn.inView = function(){
    var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(this).offset().top;
	var elemBottom = elemTop + $(this).height();

	return !((docViewBottom < elemTop) || ( elemBottom < docViewTop));

};

$(document).ready(function(){
	scrollLock = Math.floor(0.8 * window.innerHeight);

	var ceraProRegular = new FontFace('CeraPro-Thin', 'url(/css/webfonts/CeraPro-Thin.woff2)', {
	    style: 'normal',
	    weight: 'normal'
	});

	document.fonts.add(ceraProRegular);
	ceraProRegular.load();

	$(window).bind('mousewheel', function(event) {
				
				
			    if (event.originalEvent.wheelDelta >= 0) {
			    	$('.content-container').show();
			        $('body').removeClass('noscroll');
			    }
			    else if ($(window).scrollTop() >= scrollLock && $( "#passcode" ).val() != "correctpassword"){
			    	$(window).scrollTop(scrollLock);
			    	
			    	$('.content-container').hide();
			        $('body').addClass('noscroll')
			    }
			    // else if(window.innerWidth > 1800 && $(window).scrollTop() >= 800 && $( "#passcode" ).val() != "correctpassword"){
			    // 	$(window).scrollTop(800);
			    // 	$('.content-container').hide();
			    //     $('body').addClass('noscroll')
			    // }
			});

	$( "#secure" ).submit(function( event ) {
		event.preventDefault();
	  if ( $( "#passcode" ).val() === "correctpassword" ) {
	  		$("#wrong-passcode").css('display','none');
	  		$('.vertical.device').css('display','block');
		    $('body').removeClass('noscroll');
		    $('html, body').animate({scrollTop:0.9* window.innerHeight}, 1000, 'easeInOutQuint');
		}

	  else{
	  	$("#wrong-passcode").css('display','block');
	  }
	  
	});

	resolution = window.innerWidth / 1650 * 6.8215;
	resolution = resolution > 6.8215 ? resolution : 6.8215;

	$(".hero-device").css({'transform': 'matrix(' + resolution + ', 0, 0,' + resolution + ', 0, 0)'});
	$(".device-anchor").css({'transform': 'matrix(' + resolution + ', 0, 0,' + resolution + ', 0, 0)'});
		
	$(window).scroll(function(){

		// $('video').each(function(){
		// 	if($(this)[0].id != 'preview-video'){
		// 	    if ($(this).inView()) {
		// 	        $(this)[0].play();
		// 	    } else {
		// 	        $(this)[0].pause();
		// 	    }
		// 	}
		// })

		if ($(window).scrollTop() >= scrollLock && $( "#passcode" ).val() != "correctpassword"){
	    	$(window).scrollTop(scrollLock);
	        $('body').addClass('noscroll')
	        $('.content-container').hide();
	    }
	    else{
	    	$('body').removeClass('noscroll');
	    	$('.content-container').show();
	    }

		// //only the class elements in view
		// $('.focus-border').filter(function(){
		//     return $(this).inView();
		// }).removeClass('no-shadow').addClass('img-shadow');

		// //only the class elements not in view
		// $('.focus-border').filter(function(){
		//     return !$(this).inView();
		// }).removeClass('img-shadow').addClass('no-shadow');
			
		if(isScrolledIntoView($('#timeChart')[0]) && isScrolledIntoView($('#categoryChart')[0])){
			if (isCanvasBlank($('#timeChart')[0]) && isCanvasBlank($('#categoryChart')[0])){

				var time_canvas = $('#timeChart')[0];
				time_canvas.width = $("#timeChartParent").width;
				time_canvas.height = $("#timeChartParent").height;
				var ctx = $('#timeChart')[0].getContext('2d');

				var time_data = { labels: ["While Booking", "Before Checking-in Online", "While Checking-in Online", "At The Airport"],
					datasets: [{
						label: ["While Booking", "Before Checking-in Online", "While Checking-in Online", "At The Airport"],
						backgroundColor: ['#11172b', '#003366', '#839ABE', '#E01933'],
						borderColor: ['#11172b', '#003366', '#839ABE', '#E01933'] ,
						data: [21, 5, 2, 3],
					}]
				};
				
				var options_time = JSON.parse(JSON.stringify(options_dark));
				options_time.title = {
					display: true,
					position: 'bottom',
					text: 'BAGGAGE INFO TIMING',
					fontColor: '#101646',
					fontFamily: "'Cera Pro'"
				};

				

				options_time.animation =  {
					onComplete: function() {
						var ppi = 1;

						if(window.devicePixelRatio == 1)
							ppi = 2;

						if(window.innerWidth > 480 && window.innerWidth > window.innerHeight){
							ctx = $('#timeChart')[0].getContext('2d');
						    ctx.font = getFont(time_canvas, fontSizeBig);
						    ctx.fillStyle = "#101646";
						    ctx.textBaseline = "middle";
				        	ctx.fillText( "65", ppi * time_canvas.width/6, ppi * time_canvas.height/4.25);
				        	ctx.textAlign = "center"; 
				        	ctx.font = getFont(time_canvas, fontSizeSmall);
				        	ctx.textBaseline = "top";
				        	ctx.fillText( "%", ppi * time_canvas.width/3.1, ppi * time_canvas.height/4.25);
				        	ctx.textAlign = "center"; 
				        }
				    }
				}

				var chart = new Chart(ctx, {
					type: 'doughnut',

					data: time_data,

					options: options_time
				});


				var category_canvas = $('#categoryChart')[0];
				category_canvas.width = $("#categoryChartParent").width;
				category_canvas.height = $("#categoryChartParent").height;

				var ctx = $('#categoryChart')[0].getContext('2d');
				var category_data = {
						labels: ["Luggage", "Sports Equipment", "Music Equipment", "Boxes/ Other Consignment"],
						datasets: [{
							label: ["Luggage", "Sports Equipment", "Music Equipment", "Boxes/ Other Consignment"],
							backgroundColor: ['#11172b', '#003366', '#839ABE', '#E01933'],
							borderColor: ['#11172b', '#003366', '#839ABE', '#E01933'] ,
							data: [7, 16, 6, 11],
						}]
					};

				var options_category = JSON.parse(JSON.stringify(options_dark));
				options_category.title = {
						display: true,
						position: 'bottom',
						text: 'TOP BAG CATEGORIES',
						fontColor: '#101646',
						fontFamily: "'Cera Pro'"
					};

				options_category.animation =  {
					onComplete: function() {
						var ppi = 1;

						if(window.devicePixelRatio == 1)
							ppi = 2;

						if(window.innerWidth > 480 && window.innerWidth > window.innerHeight){
							document.fonts.load('100pt "Cera Pro"').then(function(){
								ctx = $('#categoryChart')[0].getContext('2d');
							    ctx.font = getFont(category_canvas, fontSizeBig);
							    ctx.fillStyle = "#101646";
							    ctx.textBaseline = "middle";
					        	ctx.fillText( "4", ppi * category_canvas.width/4.75, ppi * category_canvas.height/4.25);
					        	// ctx.font = getFont(category_canvas, fontSizeSmall);
					        	// ctx.textBaseline = "top";
					        	// ctx.fillText( "", ppi * category_canvas.width/3.2, ppi * category_canvas.height/4.25);
					        });
				        }
				    }
				}

				var chart = new Chart(ctx, {
					type: 'doughnut',
					data: category_data,
					options: options_category,

				});
			}
		}


		
	});
});




$(function(){
	

	$(".screen.video-container.waiting-to-start").hide();
	

	/* Responsive Video Source */
	var video_size; 
	if (window.innerWidth > 480){

		if(window.innerWidth >= 1024){
			video_size = "_large.mp4";
		}

		else{
			video_size = "_medium.mp4";
		}

		$('.video > video').toArray().forEach(modify_video_source);
	}

	function modify_video_source(vid){
		vid.src = vid.src.split("_")[0] + video_size; 
	}
	


	var src = [];
	for (var i=1;i<=3;i++){
		if(window.innerWidth < 735){
			src.push('<img class="owl-lazy" data-src="/images/ctrg/personas/persona_'+i+'_small.jpg" alt="">');
		}
		else if(window.innerWidth < 1068){
			src.push('<img class="owl-lazy" data-src="/images/ctrg/personas/persona_'+i+'_medium.jpg" alt="">');
		}
		else{
			src.push('<img class="owl-lazy" data-src="/images/ctrg/personas/persona_'+i+'_large.jpg" alt="">');
		}

	}

	$('#persona_slides').append(src);
	var owl = $('#persona_slides');

	owl.owlCarousel({

	animateOut: 'fadeOutUp',
    animateIn: 'fadeInUp',
	items:1,
	dots:false,
	lazyLoad:true,
	// loop:true,
	
 //    autoplayTimeout:5000,
 //    autoplayHoverPause:true,
    thumbs:true,
    thumbsPrerendered: true
	});

	owl.hover(function(){
		owl.trigger('stop.owl.autoplay')
	});

	// owl.on('mouseout',function(){
	// 	owl.trigger('play.owl.autoplay',[5000]);
	// });

	var src1 = [];
	for (var i=1;i<=3;i++)
		{
		if(window.innerWidth < 735){
			src1.push('<img class="owl-lazy" data-src="/images/ctrg/sketches/sketch_'+i+'_small.jpg" alt="">');
		}
		else if(window.innerWidth < 1068){
			src1.push('<img class="owl-lazy" data-src="/images/ctrg/sketches/sketch_'+i+'_medium.jpg" alt="">');
		}
		else{
			src1.push('<img class="owl-lazy" data-src="/images/ctrg/sketches/sketch_'+i+'_large.jpg" alt="">');
		}

	}

	$('#ideation_slides').append(src1);
	var owl1 = $('#ideation_slides');

	owl1.owlCarousel({

	animateOut: 'fadeOutUp',
    animateIn: 'fadeInUp',
	items:1,
	dots:false,
	lazyLoad:true,
	// loop:true,
	// autoplayTimeout:5000,
	// autoplayHoverPause:true,
    thumbs:true,
    thumbsPrerendered: true
	});

	owl.hover(function(){
		owl.trigger('stop.owl.autoplay')
	});


	var tl1 = new TimelineLite( {paused: true, onReverseComplete: pause_tl1, onComplete: pause_tl1} ),
	tl2 = new TimelineLite( {paused: true, onReverseComplete: pause_tl2, onComplete: pause_tl2} ),
	tl3 = new TimelineLite ( {paused: true, onReverseComplete: pause_tl3, onComplete: pause_tl3} );﻿
	tl4 = new TimelineLite ( {paused: true, onReverseComplete: pause_tl4, onComplete: pause_tl4} );﻿

	tl4.to(".vertical.device", 1, { "opacity": 1});
	
	var play_video = 0;
	var play_rewards_vid = 0;
	
	$(window).scroll( function(){
	 	
	 	var st = $(this).scrollTop();
		var ht = window.innerHeight;

	   if( st < ht && st > 0 ){
	        windowScroll = st/ht;
	        tl1.progress( windowScroll );
	        tl2.progress( windowScroll );
	        tl3.progress( windowScroll * 2 );
	    }
	   else if(st <= 0){
	    	tl1.reverse();
	    	tl2.reverse();
	    	tl3.reverse();
	    	
	    }
	    else{
	    	tl1.play();
	        tl2.play();
	        tl3.play();
	    }

	    if (st > 0.8 * window.innerHeight){
	    	$(".sticky-content.light").removeClass("light").stop(true,true).addClass("dark", 1000);
	    	$(".screen.video-container.waiting-to-start").show();
	    	
	    	if (play_video == 0){
	    		$('#preview-video').get(0).play();
	    		play_video = 1;
	    	}
	    	tl4.play(); 
	    }
	    else{
	    	tl4.reverse();
	    	play_video = 0;
	    	$(".screen.video-container.waiting-to-start").hide();
	    	$('#preview-video').get(0).currentTime = 0;
	    	$(".sticky-content.dark").removeClass("dark").stop(true,true).addClass("light", 1000);
	    }
		
	});

	function pause_tl1(){
    	tl1.pause();
	}
	
	function pause_tl2(){
    	tl2.pause();
	}

	function pause_tl3(){
    	tl3.pause();
	}

	function pause_tl4(){
    	tl4.pause();
	}

	tl1.to(".hero-device", 1, { "transform": "matrix(0.5, 0, 0, 0.5, 0, 0)"})

	tl2.to(".device-anchor", 1, {"transform": "matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5)"});
	tl3.to(".content-container", 1, { "opacity": 0, display: 'none'});

	var controller = new ScrollMagic.Controller({refreshInterval: 1});

	scene = new ScrollMagic.Scene({triggerElement: ".pace-done", duration: (window.innerHeight < 2000) ? ((window.innerHeight < 1000) ? 1000 : 1200) : 2000 })
						.setPin(".sticky-container", {pushFollowers: false})
						.addTo(controller);

	});	

	




