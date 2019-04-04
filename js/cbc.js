$(function(){


	var src = [];
	for (var i=1;i<=3;i++)
		src.push('<img class="owl-lazy" data-src="/images/cbc/web-design/wireframes/wireframe-v'+i+'.png" alt="">');

	$('#wireframe-v').append(src);
	var owl = $('#wireframe-v');

	owl.owlCarousel({
	animateIn: 'fadeIn',
	animateOut: 'fadeOut',
	items:1,
	dots:false,
	lazyLoad:true,
	loop:true,
	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    thumbs:true,
    thumbsPrerendered: true,
    nav: true
	});

	owl.hover(function(){
		owl.trigger('stop.owl.autoplay')
	});

	owl.on('mouseout',function(){
		owl.trigger('play.owl.autoplay',[5000]);
	});



	var src = [];
	for (var i=0;i<=7;i++)
		src.push('<img class="owl-lazy" data-src="/images/cbc/web-design/logo/logo-v'+i+'.png" alt="">');

	$('#logo-v').append(src);
	var owl = $('#logo-v');

	owl.owlCarousel({
	animateIn: 'fadeIn',
	animateOut: 'fadeOut',
	items:1,
	dots:false,
	lazyLoad:true,
	loop:true,
	autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    thumbs:true,
    thumbsPrerendered: true,
    // nav: true
	});

	owl.hover(function(){
		owl.trigger('stop.owl.autoplay')
	});

	owl.on('mouseout',function(){
		owl.trigger('play.owl.autoplay',[1000]);
	});

});