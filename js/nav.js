$(function(){
	$("#head").load("nav.html"); 
});

$("#menu").ready(function(){
	console.log('ready');
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
});

