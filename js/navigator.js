var navBar;
var navLinks = [];
var portfolio_visibility = false;

function navInit() {
    navBar = document.getElementById('navigator');
    navLinks = document.getElementsByClassName('navLink');

    updateNavLinks();
}


function updateNavigatorVisibility() {
    navBar = document.getElementById('navigator');
    if ($('#portfolio').isInViewport()){
        
        if(portfolio_visibility == false){
            $(navBar).css('display', 'inline-block');
            $("#go-back").addClass("transform-go-back");
            $("#go-back").css({display: 'block'});
            $("#line-animation-holder").css({display: 'none'});
        }

        portfolio_visibility = true;
    }else{
        if(portfolio_visibility == true){
            $(navBar).css('display', 'none');
            $("#go-back").css({display: 'none'});
            $("#line-animation-holder").css({display: 'block'});
        }
        portfolio_visibility = false;
    }

}

$.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementTop - viewportTop < 100;
};

$.fn.isIn50Viewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementTop - viewportTop < $(window).height()/2;
};

function updateNavLinks() {
    var l = navLinks.length;
    for (var i=0; i<l; i++) {
        navLinks[i].classList = 'navLink hi';
        if (i===projectIndex) {
            navLinks[i].classList += ' hello';
        }
    }
}

$(document).ready(function(){
        navInit();
    });
