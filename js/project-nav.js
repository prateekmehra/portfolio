$(document).ready(function(){
	window.onscroll = function() {
		make_sticky();
		if($("#project-nav").hasClass("sticky")){
			hide_sticky_on_scroll();
		}
	};

	var project_nav = $("#portfolio")[0];

	var sticky = project_nav.offsetTop;

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
				document.getElementById("project-nav").style.top = "4vh";
			} else {
				document.getElementById("project-nav").style.top = "0";
			}
		} else if (currentScrollPos > prevScrollpos) {
			document.getElementById("project-nav").style.top = "-10vh";
		}
		prevScrollpos = currentScrollPos;
	}
});

$(window).load(function(){
	$(".nav-process").click(function(){
			$(".nav-process").addClass("active-nav");
			$(".nav-details").removeClass("active-nav");
	});

	$(".nav-details").click(function(){
			console.log('hey');
			$(".nav-details").addClass("active-nav");
			$(".nav-process").removeClass("active-nav");
	});
});