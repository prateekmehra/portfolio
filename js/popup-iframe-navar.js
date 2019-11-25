$(window).load(function(){
    // slideshare overlay
    var $overlay = $('<div id="overlay"><div class="close"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"><polygon points="73.99 73.16 52.83 52 73.99 30.84 71.16 28.01 50 49.17 28.84 28.01 26.01 30.84 47.17 52 26.01 73.16 28.84 75.99 50 54.83 71.16 75.99 73.99 73.16"/></svg></div><div class="iframe-holder"></div></div>');
    var $iframe = $('<iframe width="1920px" height="1080px" frameborder="0" marginwidth="0" margin="0" height="0" scrolling="no" allow="autoplay; fullscreen" allowfullscreen></iframe>');

    // append iframe to overaly
    $overlay.find('.iframe-holder').append($iframe);

    // append overlay to body
    $('body').append($overlay);

    // slideshare slides - capture the click event on a link to the slide
    $('a.popup-iframe.navar').click(function(event) {
        event.preventDefault();
        $('html').addClass('noscroll');
        $('body').addClass('noscroll');
        var src = 'https://player.vimeo.com/video/375350972?title=0&color=ffffff&byline=0&autoplay=1&playsinline=0';
        // update overlay with iframe
        $iframe.attr('src', src);
        // show overlay
        $overlay.show();
    });

    $('.close').click(function(){
         // hide overlay
        $('html').removeClass('noscroll');
        $('body').removeClass('noscroll');
        $overlay.hide();
        $iframe.attr('src', '');
    })

    // when overlay is clicked
    $overlay.click(function() {
        // hide overlay
        $('html').removeClass('noscroll');
        $('body').removeClass('noscroll');
        $overlay.hide();
        $iframe.attr('src', '');
    });

});
