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

$(window).load(function(){
	prevScrollpos = window.pageYOffset;
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
	var ceraProRegular = new FontFace('CeraPro-Thin', 'url(/css/webfonts/CeraPro-Thin.woff2)', {
	    style: 'normal',
	    weight: 'normal'
	});

	document.fonts.add(ceraProRegular);
	ceraProRegular.load();
		
	$(window).scroll(function(){

		//only the class elements in view
		$('.focus-border').filter(function(){
		    return $(this).inView();
		}).removeClass('no-shadow').addClass('img-shadow');

		//only the class elements not in view
		$('.focus-border').filter(function(){
		    return !$(this).inView();
		}).removeClass('img-shadow').addClass('no-shadow');
			
		if(isScrolledIntoView($('#donateChart')[0]) && isScrolledIntoView($('#recycleChart')[0])){
			if (isCanvasBlank($('#donateChart')[0]) && isCanvasBlank($('#recycleChart')[0])){

				var donate_canvas = $('#donateChart')[0];
				donate_canvas.width = $("#donateChartParent").width;
				donate_canvas.height = $("#donateChartParent").height;
				var ctx = $('#donateChart')[0].getContext('2d');

				var donate_data = { labels: ["Donate", "Don't Donate"],
					datasets: [{
						label: ["Donate", "Don't Donate"],
						backgroundColor: ['#5F72C9', '#A8B4E7'],
						borderColor: ['#5F72C9', '#A8B4E7'] ,
						data: [93, 7],
					}]
				};
				
				var options_donate = JSON.parse(JSON.stringify(options_dark));
				options_donate.title = {
					display: true,
					position: 'bottom',
					text: 'DONATE',
					fontColor: '#101646',
					fontFamily: "'Cera Pro'"
				};

				

				options_donate.animation =  {
					onComplete: function() {
						if(window.innerWidth > 480 && window.innerWidth > window.innerHeight){
							ctx = $('#donateChart')[0].getContext('2d');
						    ctx.font = getFont(donate_canvas, fontSizeBig);
						    ctx.fillStyle = "#101646";
						    ctx.textBaseline = "middle";
				        	ctx.fillText( "93", donate_canvas.width/6, donate_canvas.height/4.25);
				        	ctx.textAlign = "center"; 
				        	ctx.font = getFont(donate_canvas, fontSizeSmall);
				        	ctx.textBaseline = "top";
				        	ctx.fillText( "%", donate_canvas.width/3.1, donate_canvas.height/4.25);
				        	ctx.textAlign = "center"; 
				        }
				    }
				}

				var chart = new Chart(ctx, {
					type: 'doughnut',

					data: donate_data,

					options: options_donate
				});


				var recycle_canvas = $('#recycleChart')[0];
				recycle_canvas.width = $("#recycleChartParent").width;
				recycle_canvas.height = $("#recycleChartParent").height;

				var ctx = $('#recycleChart')[0].getContext('2d');
				var recycle_data = {
						labels: ["Recycle", "Don't Recycle"],
						datasets: [{
							label: ["Recycle", "Don't Recycle"],
							backgroundColor: ['#5F72C9', '#A8B4E7'],
							borderColor: ['#5F72C9', '#A8B4E7'] ,
							data: [20, 80],
						}]
					};

				var options_recycle = JSON.parse(JSON.stringify(options_dark));
				options_recycle.title = {
						display: true,
						position: 'bottom',
						text: 'RECYCLE',
						fontColor: '#101646',
						fontFamily: "'Cera Pro'"
					};

				options_recycle.animation =  {
					onComplete: function() {
						if(window.innerWidth > 480 && window.innerWidth > window.innerHeight){
							document.fonts.load('100pt "Cera Pro"').then(function(){
								console.log('hey');
								ctx = $('#recycleChart')[0].getContext('2d');
							    ctx.font = getFont(recycle_canvas, fontSizeBig);
							    ctx.fillStyle = "#101646";
							    ctx.textBaseline = "middle";
					        	ctx.fillText( "20", recycle_canvas.width/6, recycle_canvas.height/4.25);
					        	ctx.font = getFont(recycle_canvas, fontSizeSmall);
					        	ctx.textBaseline = "top";
					        	ctx.fillText( "%", recycle_canvas.width/3.2, recycle_canvas.height/4.25);
					        });
				        }
				    }
				}

				var chart = new Chart(ctx, {
					type: 'doughnut',
					data: recycle_data,
					options: options_recycle,

				});
			}
		}
		// else {
		// 	var ctx = $('#donateChart')[0].getContext('2d');
		// 	ctx.clearRect(0, 0, $('#donateChart')[0].width, $('#donateChart')[0].height);
		// 	var ctx = $('#recycleChart')[0].getContext('2d');
		// 	ctx.clearRect(0, 0, $('#recycleChart')[0].width, $('#recycleChart')[0].height);

		// }

		////////AWARENESS CHART////////
		if(isScrolledIntoView($('#awarenessChart')[0])){
			if (isCanvasBlank($('#awarenessChart')[0])){

				var options_awareness = JSON.parse(JSON.stringify(options_light));
				var ctx = $('#awarenessChart')[0].getContext('2d');
				var awareness_data = {
						labels: ["Aware", "Unaware"],
						datasets: [{
							backgroundColor: ['#5F72C9', '#A8B4E7'],
							borderColor: ['#5F72C9', '#A8B4E7'] ,
							data: [50, 50],
						}]
					}

				var awarenessChart = new Chart(ctx, {
				    type: 'bar',
				    data: awareness_data,
				    options: options_awareness
				});
			}
		}
		// else {
		// 	var ctx = $('#awarenessChart')[0].getContext('2d');
		// 	ctx.clearRect(0, 0, $('#awarenessChart')[0].width, $('#awarenessChart')[0].height);
		// }

		////////AWARENESS2 CHART////////
		if(isScrolledIntoView($('#awareness2Chart')[0])){
			if (isCanvasBlank($('#awareness2Chart')[0])){

				var options_awareness = JSON.parse(JSON.stringify(options_light));
				var ctx = $('#awareness2Chart')[0].getContext('2d');
				var awareness_data = {
						labels: ["Aware", "Unaware"],
						datasets: [{
							backgroundColor: ['#5F72C9', '#A8B4E7'],
							borderColor: ['#5F72C9', '#A8B4E7'] ,
							data: [19, 81],
						}]
					}

				var awarenessChart = new Chart(ctx, {
				    type: 'bar',
				    data: awareness_data,
				    options: options_awareness
				});
			}
		}
		// else {
		// 	var ctx = $('#awareness2Chart')[0].getContext('2d');
		// 	ctx.clearRect(0, 0, $('#awareness2Chart')[0].width, $('#awareness2Chart')[0].height);
		// }

		////////MOTIVATION CHART////////
		if(isScrolledIntoView($('#motivationChart')[0])){
			if (isCanvasBlank($('#motivationChart')[0])){

				var options_motivation = JSON.parse(JSON.stringify(options_light));
				var ctx = $('#motivationChart')[0].getContext('2d');
				var motivation_data = {
						labels: ["Convience", "Other"],
						datasets: [{
							backgroundColor: ['#5F72C9', '#A8B4E7'],
							borderColor: ['#5F72C9', '#A8B4E7'] ,
							data: [77, 23],
						}]
					}

				var awarenessChart = new Chart(ctx, {
				    type: 'bar',
				    data: motivation_data,
				    options: options_motivation
				});
			}
		}
		// else {
		// 	var ctx = $('#motivationChart')[0].getContext('2d');
		// 	ctx.clearRect(0, 0, $('#motivationChart')[0].width, $('#motivationChart')[0].height);
		// }

		////////KNOWLEDGE CHART////////
		if(isScrolledIntoView($('#knowledgeChart')[0])){
			if (isCanvasBlank($('#knowledgeChart')[0])){

				var options_awareness = JSON.parse(JSON.stringify(options_light));
				var ctx = $('#knowledgeChart')[0].getContext('2d');
				var awareness_data = {
						labels: ["Aware", "Unaware"],
						datasets: [{
							backgroundColor: ['#5F72C9', '#A8B4E7'],
							borderColor: ['#5F72C9', '#A8B4E7'] ,
							data: [22, 78],
						}]
					}

				var awarenessChart = new Chart(ctx, {
				    type: 'bar',
				    data: awareness_data,
				    options: options_awareness
				});
			}
		}
		// else {
		// 	var ctx = $('#knowledgeChart')[0].getContext('2d');
		// 	ctx.clearRect(0, 0, $('#knowledgeChart')[0].width, $('#knowledgeChart')[0].height);
		// }

	});
});




$(function(){
	

	$(".screen.video-container.waiting-to-start").hide();

	/* Responsive Video Source */

	// var video_size = window.innerWidth > 768 ? "_large.mp4" : window.innerWidth > 480 ? "_medium.mp4" : "_medium.mp4";
	// console.log($('.video > video').toArray());
	// $('.video > video').toArray().forEach(modify_video_source);

	// function modify_video_source(vid){
	// 	vid.src += video_size; 
	// }

	


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
	
 //    autoplayTimeout:5000,
 //    autoplayHoverPause:true,
    thumbs:true,
    thumbsPrerendered: true
	});

	owl.hover(function(){
		owl.trigger('stop.owl.autoplay')
	});

	var tl1 = new TimelineLite( {paused: true, onReverseComplete: pause_tl1, onComplete: pause_tl1} ),
	tl2 = new TimelineLite( {paused: true, onReverseComplete: pause_tl2, onComplete: pause_tl2} ),
	tl3 = new TimelineLite ( {paused: true, onReverseComplete: pause_tl3, onComplete: pause_tl3} );﻿
	
	var play_video = 0;
	var play_rewards_vid = 0;
	
	$(window).scroll( function(){

	 	$('#rewards_reflection').each(function(){
		    if ($(this).inView() && play_rewards_vid==0) {
		        $(this)[0].play();
		        play_rewards_vid = 1;

		        $('.count').each(function () {
		            $(this).prop('Counter',0).animate({
		                Counter: 410
		            }, {

		                duration: 1000,
		                easing: 'easeOutQuart',
		                step: function (now) {
		                    $(this).text(Math.ceil(now));
		                }
		            });
		        });
		     }
		    else if (!$(this).inView()){
				play_rewards_vid = 0;
				$(this)[0].pause();
				$(this)[0].currentTime = 0;
		    	}
			})
	  
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

		    if (st > 900){
		    	$(".sticky-content.light").removeClass("light").stop(true,true).addClass("dark", 1000);
		    	$(".screen.video-container.waiting-to-start").show();

		    	

		    	if (play_video == 0){
		    		$('#preview-video').get(0).play();
		    		play_video = 1;
		    	}
		    }
		    else{
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

	tl1.to(".hero-device", 1, { "transform": "matrix(1, 0, 0, 1, 0, 0)"});
	tl2.to(".device-anchor", 1, {"transform": "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"});
	tl3.to(".content-container", 1, { "opacity": 0});

	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({triggerElement: ".pace-done", duration: (window.innerHeight < 2000) ? ((window.innerHeight < 1000) ? 1000 : 1200) : 2000 })
						.setPin(".sticky-container", {pushFollowers: false})
						.addTo(controller);

	});	





