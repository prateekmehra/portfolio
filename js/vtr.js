$(function(){


	var src = [];
	for (var i=1;i<=45;i++)
		src.push('<img class="owl-lazy" data-src="./images/vtr/carousel/compressed/vtr'+i+'.jpg"  style="width:500px" alt="">');

	 $('#pres').append(src);
	var owl = $('.owl-carousel.owl-theme');

	owl.owlCarousel({
	items:1,
	lazyLoad:true,
	loop:true,
	margin:10,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:true,
    dotsEach:5
	});

	owl.hover(function(){
		owl.trigger('stop.owl.autoplay')
	});

	owl.on('mouseout',function(){
		owl.trigger('play.owl.autoplay',[3000]);
	});

	// $('#main-image').owlCarousel({
	// items:1,
	// lazyLoad:true
	// });

	$('#image-tray').owlCarousel({
	items:5,
	lazyLoad:true
	});

});