$(function(){
	$("#head").load("nav.html"); 
});

$(window).load(.load(function(){
	var map = {
	"about":"about",
	"personal":"personal",
	"projects":"projects",
	"design":"design",
	"index":"projects",
	"chronos":"projects",
	"go-classroom":"projects",
	"high-on-graphs":"projects",
	"virtual-trial-room":"projects",
	"graphic":"design", 
	"interiors":"design",
	"photography":"design",
	"portfolio":"portfolio",
	"":"portfolio"
	}
	var path = window.location.pathname;
	var page = path.split("/").pop();
	var nav_id ="#nav-"+map[page];
	$(nav_id).addClass("active");
	console.log(nav_id);
	console.log($(nav_id));
});

