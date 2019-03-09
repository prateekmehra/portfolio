console.log(window.location.pathname.split('/')[1]);
console.log($("#"+window.location.pathname.split('/')[1]));
$("#"+window.location.pathname.split('/')[1]).css('display', 'none');