$(window).scroll(function(){
    $('header').toggleClass('scrolled', $(this).scrollTop()>0);
})

$(window).scroll(function(){
    $('header').toggleClass('fixed-top', $(this).scrollTop()>0);
})
