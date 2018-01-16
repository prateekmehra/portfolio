$(function(){
	$("#head").load("nav.html"); 
	var map = {
	"about":"about",
	"personal":"personal",
	"index":"projects",
	"chronos":"projects",
	"go-classroom":"projects",
	"high-on-graphs":"projects",
	"virtual-trial-room":"projects",
	"graphic":"design", 
	"interiors":"design",
	"photography":"design",
	"portfolio":"portfolio"
}
var path = window.location.pathname;
var page = path.split("/");
$("#nav-"+map[page[page.length-2]]).addClass("active");
console.log($("#nav-"+map[page[page.length-2]]));
console.log(map[page[page.length-2]]);
});

