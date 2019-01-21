$(function(){
   $('a[href^="#"]').on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, 'easeInOutQuint', function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;

            scrollCalculate();
            });
        } // End if
    });
 

    posts = $('a[href^="#"]');
    document.addEventListener('scroll',function(e){scrollCheck(e);},false);
    scrollCalculate();


});

var posts = [];
var projectIndex = -1;
var lastProjectIndex = projectIndex;
var projectChanged = false;
var debounceCounter = [];





function scrollCheck(e) {
    var screen = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (screen<1) {
        scrollCalculate();
    } else {
        debounce(0, scrollCalculate, 4);
    }
}

function scrollCalculate() {
    updateNavigatorVisibility();
    getCurrentProject();
    if (projectChanged) {
        updateNavLinks();

        projectChanged = false;
    }
}




function getCurrentProject() {
    projectIndex = -1;
    var screen = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    for (var h = 0; h<posts.length; h++) {
        var top = posts[h].offsetTop;
        top -= screen * 0.4;

        if (screen>=top) {
            projectIndex = h;
        }
    }

    if (lastProjectIndex !== projectIndex) {
        projectChanged = true;
        lastProjectIndex = projectIndex;
    }
}




function debounce(index, callback, delay) {

    // reset a counter //
    if (!debounceCounter[index]) debounceCounter[index] = 0;

    // countdown & execute //
    debounceCounter[index] --;
    if (debounceCounter[index] < 0) {
        debounceCounter[index] = delay;
        callback();
    }
}

