var main = function () {
    var menu = $('#menu');
    var menuToggle = $('.toggle');
    var screen = $('body, html');
    var heightHeader,
        heightWork,
        heightAbout;


    function closeMobileMenu () {
        (menu).removeClass('active-menu');
        menuToggle.removeClass('open');
    }

//************************************** Собития **************************************
    $('.btn-down').click(function () {
        screen.animate({scrollTop: $('header').height()}, 400);
    });
    $('#btn-home').click(function () {
        screen.animate({scrollTop: 0}, 400);
        closeMobileMenu();
    });
    $('#my-work').click(function () {
        screen.animate({scrollTop:$('header').height()}, 400);
        closeMobileMenu();
    });
    $('#about').click(function () {
        heightHeader = $('header').height();
        heightWork = $('#my-works').height();
        screen.animate({scrollTop: heightHeader+heightWork});
        closeMobileMenu();
    });
    $('#contactNav').click(function () {
        heightHeader = $('header').height();
        heightWork = $('#my-works').height();
        heightAbout = $('#about-me').height();
        screen.animate({scrollTop: heightHeader+heightWork+heightAbout}, 400);
        closeMobileMenu();
    });
    $('#toTop').click(function () {
        screen.animate({scrollTop: 0}, 400);
    });



    $('.menu').click(function () {   // обработчик клика по Menu Bars
        if((menu).hasClass('active-menu')) {
            (menu).removeClass('active-menu');
        } else {
            (menu).addClass('active-menu');
        }
        if(menuToggle.hasClass('open')) {
            menuToggle.removeClass('open');
        } else {
            menuToggle.addClass('open');
        }
    });



    // обработчик собития Scroll
    $(window).scroll(function () {
        var scrollTopWindow = $(this).scrollTop();
        var position = 'relative';
        var marginTop = 0;
        var navigation = $('#navigation');

        heightHeader = $('header').height();
        heightWork = $('#my-works').height();
        heightAbout = $('#about-me').height();

        if(scrollTopWindow >= heightHeader) {
            position = 'fixed';
            marginTop = navigation.height();
        }
        navigation.css('position',position);
        $('body').css('margin-top', marginTop);

        if($(this).scrollTop() > heightHeader) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }

        if (scrollTopWindow >= heightHeader) {
            $('#my-work').addClass('active-link');
        } else {
            $('#my-work').removeClass('active-link');
        }
        if (scrollTopWindow >= heightHeader+heightWork) {
            $('#about').addClass('active-link');
            $('#my-work').removeClass('active-link');
        } else {
            $('#about').removeClass('active-link');
        }
        if (scrollTopWindow >= heightHeader+heightWork+heightAbout) {
            $('#contactNav').addClass('active-link');
            $('#about').removeClass('active-link');
            $('#my-work').removeClass('active-link');
        } else {
            $('#contactNav').removeClass('active-link');
        }

    });

};

$(document).ready(main);