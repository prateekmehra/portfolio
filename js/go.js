function isScrolledIntoView(elem)
{
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return !((docViewBottom < elemTop) || ( elemBottom < docViewTop));
}


$(window).load(function(){
    $('.storyboard-video').on({
      click:  function(e){
       e.currentTarget.play();
      },
      mouseenter:  function(e){
       e.currentTarget.muted = false;
      },
      mouseout:  function(e){
        e.currentTarget.muted = true;
      }
  });

});



$(document).ready(function(){
    
    // $(window).scroll(function(){
    //   if(!isScrolledIntoView($('#designProcess')[0])){
    //       $("#designProcess").attr("src", "/images/go/designProcess/designProcess.gif");
    //     }
    // });
});





