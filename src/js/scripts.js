$(document).ready(function() {

    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('header--scroll');
        }
        else {
            $('.header').removeClass('header--scroll');
        }
    });

    $('.header-main__menu-button').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('header-main__menu-button--active');
        $('.header-top').toggleClass('header-top--active');
    });

});

