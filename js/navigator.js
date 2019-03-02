var navBar;
var navLinks = [];
var portfolio_visibility = false;

var hamburger, horizontal_menu;
var hamburger_visibility = false;

function navInit() {
    navBar = document.getElementById('navigator');
    navLinks = $('#navigator > .navLink');
    updateNavLinks();
}

function updateHamburgerVisibility() {
    horizontal_menu = document.getElementById('horizontal-menu');
    hamburger = document.getElementById('menuToggle');

    if ($('#portfolio').isIn50Viewport()){
        if(!$(hamburger).hasClass('hamburger-enter')){
            $(hamburger).removeClass('hamburger-exit').addClass('hamburger-enter');
            $(horizontal_menu).removeClass('horizontal-enter').addClass('horizontal-exit');
            $(hamburger).css('display', 'block');
            
        }

        hamburger_visibility = true;
    }else{
        if(hamburger_visibility == true){
            $(hamburger).addClass('hamburger-exit').removeClass('hamburger-enter');
            $(horizontal_menu).addClass('horizontal-enter').removeClass('horizontal-exit');
            $(hamburger).css('display', 'none');
            $(horizontal_menu).css('display', 'block'); 
        }
        hamburger_visibility = false;
    }

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
    return viewportBottom - elementTop >= $(window).height()/100;
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


$(window).load(function(){
        updateHamburgerVisibility();
    });
