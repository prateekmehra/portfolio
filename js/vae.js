var firstTime = true;
function isScrolledIntoView(elem)
{
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return !((docViewBottom < elemTop) || ( elemBottom < docViewTop));
}

$(document).ready(function(){
	$(window).scroll(function(){
		if(!isScrolledIntoView($('#designProcess')[0]) && firstTime){
				$("#designProcess").attr("src", "/images/vae/designProcess/designProcess_colored1.gif");
				firstTime = false;
			}
	});
});