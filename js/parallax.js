$(window).load(function(){
    $('.parallax').paroller({
        factor: 0.3,            // multiplier for scrolling speed and offset
        factorXs: 0.1,          // multiplier for scrolling speed and offset if window width is <576px
        factorSm: 0.2,          // multiplier for scrolling speed and offset if window width is <=768px
        factorMd: 0.2,          // multiplier for scrolling speed and offset if window width is <=1024px
        factorLg: 0.3,          // multiplier for scrolling speed and offset if window width is <=1200px
        // transition: 'transform 0.2s ease-in' // CSS transition
    });

    $('.parallax-horizontal').paroller({
        factor: -1,            // multiplier for scrolling speed and offset
        factorXs: 0.1,          // multiplier for scrolling speed and offset if window width is <576px
        factorSm: 0.2,          // multiplier for scrolling speed and offset if window width is <=768px
        factorMd: 0.2,          // multiplier for scrolling speed and offset if window width is <=1024px
        factorLg: 0.3,          // multiplier for scrolling speed and offset if window width is <=1200px
        direction: 'horizontal',
        // transition: 'transform 0.2s ease-in' // CSS transition
    });

    $('.parallax-foreground').paroller({
        factor: 0.3,            // multiplier for scrolling speed and offset
        factorXs: 0.1,          // multiplier for scrolling speed and offset if window width is <576px
        factorSm: 0.2,          // multiplier for scrolling speed and offset if window width is <=768px
        factorMd: 0.2,          // multiplier for scrolling speed and offset if window width is <=1024px
        factorLg: 0.3,          // multiplier for scrolling speed and offset if window width is <=1200px
        type: 'foreground',
        transition: 'transform 0.2s ease-in' // CSS transition
    });
});