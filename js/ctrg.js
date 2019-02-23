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


$(window).load(function(){

    //Video loader
    // var tag = document.createElement('script');
    // tag.src = "https://www.youtube.com/iframe_api";
    // var firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // var player;

    
    //Video loader ends 	

});

// function onYouTubeIframeAPIReady() {
//       player = new YT.Player('brainstorming', {
//         width:'1108',
//         height:'623',
//         videoId: '0O_qxTtM7qg',
//         playerVars: {
//           autoplay: 1,        // Auto-play the video on load
//           controls: 0,        // Show pause/play buttons in player
//           showinfo: 0,        // Hide the video title
//           modestbranding: 1,  // Hide the Youtube Logo
//           loop: 1,            // Run the video in a loop
//           fs: 1,              // Hide the full screen button
//           cc_load_policy: 1, // Hide closed captions
//           iv_load_policy: 3,  // Hide the Video Annotations
//           autohide: 0,         // Hide video controls when playing
//           playlist:'0O_qxTtM7qg	'
//         },
//         events: {
//           'onReady': onPlayerReady,
//         }
//       });
//     }

//     function onPlayerReady(event) {
//       player.setVolume(100);
//     }

$(document).ready(function(){
		
		$(window).scroll(function(){
			// if(!isScrolledIntoView($('#designProcess')[0])){
			// 		$("#designProcess").attr("src", "/images/ctrg/designProcess/DesignProcessT2.gif");
			// 	}

			if(isScrolledIntoView($('#donateChart')[0]) && isScrolledIntoView($('#recycleChart')[0])){
				if (isCanvasBlank($('#donateChart')[0]) && isCanvasBlank($('#recycleChart')[0])){

					var donate_canvas = $('#donateChart')[0];
					donate_canvas.width = $("#donateChartParent").width;
					donate_canvas.height = $("#donateChartParent").height;
					
					var ctx = $('#donateChart')[0].getContext('2d');

					var donate_data = { labels: ["Donate", "Don't Donate"],
						datasets: [{
							label: ["Donate", "Don't Donate"],
							backgroundColor: ['#84C0C6', '#1a1d20'],
							borderColor: ['#84C0C6', '#1a1d20'] ,
							data: [93, 7],
						}]
					};
					
					var options_donate = JSON.parse(JSON.stringify(options_dark));
					options_donate.title = {
						display: true,
						position: 'bottom',
						text: 'DONATE',
						fontColor: '#F3F5F6',
						fontFamily: "'Raleway'"
					};

					

					options_donate.animation =  {
						onComplete: function() {
								ctx = $('#donateChart')[0].getContext('2d');
							    ctx.font = "100 7rem Lato";
							    ctx.fillStyle = "#F3F5F6";
							    ctx.textBaseline = "middle";
					        	ctx.fillText( "93", donate_canvas.width/6.5 , donate_canvas.height/4.25);
					        	ctx.font = "100 2rem Lato";
					        	ctx.textBaseline = "top";
					        	ctx.fillText( "%", donate_canvas.width/3.1 , donate_canvas.height/4.25);
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
								backgroundColor: ['#84C0C6', '#1a1d20'],
								borderColor: ['#84C0C6', '#1a1d20'] ,
								data: [20, 80],
							}]
						};

					var options_recycle = JSON.parse(JSON.stringify(options_dark));
					options_recycle.title = {
							display: true,
							position: 'bottom',
							text: 'RECYCLE',
							fontColor: '#F3F5F6',
							fontFamily: "'Raleway'"
						};

					options_recycle.animation =  {
								onComplete: function() {
									ctx = $('#recycleChart')[0].getContext('2d');
								    ctx.font = "100 7rem Lato";
								    ctx.fillStyle = "#F3F5F6";
								    ctx.textBaseline = "middle";
						        	ctx.fillText( "20", recycle_canvas.width/6.5 , recycle_canvas.height/4.25);
						        	ctx.font = "100 2rem Lato";
						        	ctx.textBaseline = "top";
						        	ctx.fillText( "%", recycle_canvas.width/3.1 , recycle_canvas.height/4.25);
							    }
							}

					var chart = new Chart(ctx, {
						type: 'doughnut',
						data: recycle_data,
						options: options_recycle,

					});
				}
			}
			else {
				var ctx = $('#donateChart')[0].getContext('2d');
				ctx.clearRect(0, 0, $('#donateChart')[0].width, $('#donateChart')[0].height);
				var ctx = $('#recycleChart')[0].getContext('2d');
				ctx.clearRect(0, 0, $('#recycleChart')[0].width, $('#recycleChart')[0].height);

			}

			////////AWARENESS CHART////////
			if(isScrolledIntoView($('#awarenessChart')[0])){
				if (isCanvasBlank($('#awarenessChart')[0])){

					var options_awareness = JSON.parse(JSON.stringify(options_dark));
					var ctx = $('#awarenessChart')[0].getContext('2d');
					var awareness_data = {
							labels: ["Aware", "Unaware"],
							datasets: [{
								backgroundColor: ['#84C0C6', '#1a1d20'],
								borderColor: ['#84C0C6', '#1a1d20'] ,
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
			else {
				var ctx = $('#awarenessChart')[0].getContext('2d');
				ctx.clearRect(0, 0, $('#awarenessChart')[0].width, $('#awarenessChart')[0].height);
			}

			////////AWARENESS2 CHART////////
			if(isScrolledIntoView($('#awareness2Chart')[0])){
				if (isCanvasBlank($('#awareness2Chart')[0])){

					var options_awareness = JSON.parse(JSON.stringify(options_dark));
					var ctx = $('#awareness2Chart')[0].getContext('2d');
					var awareness_data = {
							labels: ["Aware", "Unaware"],
							datasets: [{
								backgroundColor: ['#84C0C6', '#1a1d20'],
								borderColor: ['#84C0C6', '#1a1d20'] ,
								data: [81, 19],
							}]
						}

					var awarenessChart = new Chart(ctx, {
					    type: 'bar',
					    data: awareness_data,
					    options: options_awareness
					});
				}
			}
			else {
				var ctx = $('#awareness2Chart')[0].getContext('2d');
				ctx.clearRect(0, 0, $('#awareness2Chart')[0].width, $('#awareness2Chart')[0].height);
			}

			////////MOTIVATION CHART////////
			if(isScrolledIntoView($('#motivationChart')[0])){
				if (isCanvasBlank($('#motivationChart')[0])){

					var options_motivation = JSON.parse(JSON.stringify(options_dark));
					var ctx = $('#motivationChart')[0].getContext('2d');
					var motivation_data = {
							labels: ["Convience", "Other"],
							datasets: [{
								backgroundColor: ['#84C0C6', '#1a1d20'],
								borderColor: ['#84C0C6', '#1a1d20'] ,
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
			else {
				var ctx = $('#motivationChart')[0].getContext('2d');
				ctx.clearRect(0, 0, $('#motivationChart')[0].width, $('#motivationChart')[0].height);
			}

			////////KNOWLEDGE CHART////////
			if(isScrolledIntoView($('#knowledgeChart')[0])){
				if (isCanvasBlank($('#knowledgeChart')[0])){

					var options_awareness = JSON.parse(JSON.stringify(options_dark));
					var ctx = $('#knowledgeChart')[0].getContext('2d');
					var awareness_data = {
							labels: ["Aware", "Unaware"],
							datasets: [{
								backgroundColor: ['#84C0C6', '#1a1d20'],
								borderColor: ['#84C0C6', '#1a1d20'] ,
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
			else {
				var ctx = $('#knowledgeChart')[0].getContext('2d');
				ctx.clearRect(0, 0, $('#knowledgeChart')[0].width, $('#knowledgeChart')[0].height);
			}

		});
});




$(function(){


	var src = [];
	for (var i=1;i<=3;i++)
		src.push('<img class="owl-lazy" data-src="/images/ctrg/personas/persona'+i+'.png" alt="">');

	$('#persona_slides').append(src);
	var owl = $('#persona_slides');

	owl.owlCarousel({

	animateOut: 'fadeOutUp',
    animateIn: 'fadeInUp',
	items:1,
	dots:false,
	lazyLoad:true,
	loop:true,
	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    thumbs:true,
    thumbsPrerendered: true
	});

	owl.hover(function(){
		owl.trigger('stop.owl.autoplay')
	});

	owl.on('mouseout',function(){
		owl.trigger('play.owl.autoplay',[5000]);
	});

	var src1 = [];
	for (var i=1;i<=3;i++)
		src1.push('<img class="owl-lazy" data-src="/images/ctrg/sketches/sketch'+i+'.jpeg" alt="">');

	$('#ideation_slides').append(src1);
	var owl1 = $('#ideation_slides');

	owl1.owlCarousel({

	animateOut: 'hinge',
    animateIn: 'zoomIn',
	items:1,
	dots:false,
	lazyLoad:true,
	loop:true,
	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    thumbs:true,
    thumbsPrerendered: true
	});

	owl1.hover(function(){
		owl.trigger('stop.owl.autoplay')
	});

	owl1.on('mouseout',function(){
		owl.trigger('play.owl.autoplay',[5000]);
	});

});


