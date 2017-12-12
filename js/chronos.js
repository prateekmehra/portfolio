$(function(){


	var src = [];
	for (var i=1;i<=12;i++)
		src.push('<img class="owl-lazy" data-src="./images/chronos/carousel/chronos abcd-page-00'+i+'.jpg"  style="width:500px" alt="">');

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

});