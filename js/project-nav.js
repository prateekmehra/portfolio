
var sticky, project_nav;

$(document).ready(function(){
	projectNavInit();

	window.onscroll = function() {
		make_sticky();
		// if($("#project-nav").hasClass("sticky")){
		// 	hide_sticky_on_scroll();
		// }
	};

});

$(window).load(function(){
	
	updateProjectNavLinks();

	$(".nav-process").click(function(){
		$(".nav-process").parent().addClass("active-nav");
		$(".nav-details").parent().removeClass("active-nav");
		$('.dropbtn').html('Design Process <i class="fa fa-caret-down"></i>');
	});

	$(".nav-details").click(function(){
		$(".nav-details").parent().addClass("active-nav");
		$(".nav-process").parent().removeClass("active-nav");
		$('.dropbtn').html('Design Details <i class="fa fa-caret-down"></i>');
	});

	$('.dropbtn').html($('.active-nav * .text').html() + ' <i class="fa fa-caret-down"></i>');
});

$(window).resize(function(){
	$('.dropbtn').html($('.active-nav * .text').html() + ' <i class="fa fa-caret-down"></i>');
});


function make_sticky() {
	if (window.pageYOffset >= sticky - window.innerHeight * 0.04) {
		$("#project-nav").removeClass("not-sticky").addClass("sticky");
	} else {
		$("#project-nav").removeClass("sticky").addClass("not-sticky");
	}
}

function hide_sticky_on_scroll() {

	var currentScrollPos = window.pageYOffset;
	
	if (prevScrollpos > currentScrollPos) {
		if(window.innerWidth > 480){
			document.getElementById("project-nav").style.top = "0vh";
		} else {
			document.getElementById("project-nav").style.top = "0";
		}
	} else if (currentScrollPos > prevScrollpos) {
		document.getElementById("project-nav").style.top = "-10vh";
	}

	prevScrollpos = currentScrollPos;
}

function projectNavInit() {
	project_nav = $("#portfolio")[0];
	sticky = project_nav.offsetTop;
}

function updateProjectNavLinks() {
	if (projectIndex >= 2){
		$(".nav-process").parent().addClass("active-nav");
		$(".nav-details").parent().removeClass("active-nav");
		$(".nav-tldr").parent().removeClass("active-nav");
		$('.dropbtn').html('Design Process <i class="fa fa-caret-down"></i>');
	}

	else if (projectIndex <= 1){
		$(".nav-details").parent().addClass("active-nav");
		$(".nav-process").parent().removeClass("active-nav");
		$(".nav-tldr").parent().removeClass("active-nav");
		$('.dropbtn').html('Design Details <i class="fa fa-caret-down"></i>');
	}
}
