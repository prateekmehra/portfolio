console.log(window.location.pathname.split('/')[1]);
var selector = '#'+window.location.pathname.split('/')[1]+'-nav';
$(selector).css('display', 'none');