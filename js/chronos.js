var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('pres', {
    videoId: 'G7-st4Wc2aU',
    playerVars: {
      autoplay: 1,        // Auto-play the video on load
      controls: 1,        // Show pause/play buttons in player
      showinfo: 0,        // Hide the video title
      modestbranding: 0,  // Hide the Youtube Logo
      loop: 1,            // Run the video in a loop
      fs: 1,              // Hide the full screen button
      cc_load_policy: 1, // Hide closed captions
      iv_load_policy: 3,  // Hide the Video Annotations
      autohide: 0         // Hide video controls when playing

    },
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  player.setVolume(100);
}

$(function(){
	$('#image-tray').owlCarousel({
		items:1,
		lazyLoad:true,
		loop:true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		nav:true,
		dots:false
	});
});