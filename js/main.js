var main = function () {


    $('.btn-down').click(function () {
        var heightHeader = $('header').height();
        $('body, html').animate({scrollTop: heightHeader}, 400);
    });
    $('#btn-home').click(function () {
        $('body, html').animate({scrollTop: 0}, 400);

    });
    $('.menuBtn').click(function () {   // обработчик клика по Menu Bars
        if($('#menu').hasClass('active-menu')) {
            $('#menu').removeClass('active-menu');
        } else {
            $('#menu').addClass('active-menu');
        }
        if($(this).hasClass('open')) {
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        }
    });
    $(window).scroll(function () {
        var scrollTopWindow = $(this).scrollTop();
        var heightHeader = $('header').height();
        var heightAbout = $('#my-works').height();
        // CSS variable
        var position = 'relative';
        var marginTop = 0;

        console.info(scrollTopWindow);

        if(scrollTopWindow >= heightHeader) {
            position = 'fixed';
            marginTop = $('#navigation').height();
        }
        $('#navigation').css('position',position);
        $('body').css('margin-top', marginTop);

        if (scrollTopWindow >= heightHeader) {
            $('#my-work').addClass('active-link');
        } else {
            $('#my-work').removeClass('active-link');
            $('#about').removeClass('active-link');
        }
        console.log(heightAbout);
        if (scrollTopWindow >= heightHeader+heightAbout) {
            $('#about').addClass('active-link');
            $('#my-work').removeClass('active-link');
        } else {
            $('#about').removeClass('active-link');
        }

    });

};

$(document).ready(main);