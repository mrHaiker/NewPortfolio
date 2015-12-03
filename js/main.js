var main = function () {


    $('.btn-down').click(function () {
        var heightHeader = $('header').height();
        $('body, html').animate({scrollTop: heightHeader}, 400);
    });
    $('#btn-home').click(function () {
        $('body, html').animate({scrollTop: 0}, 400);

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