function createPlates () {
    $.getJSON('json/title.json', function (data) {
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            var url = 'url("../img/'+item.name_pic+')"';
            var $plate = $('<div>').addClass('col-sm-6 col-md-4')
                .append($('<div>').addClass('plates')
                    .attr('id', item.name)
                    .css('background', 'url(img/'+item.name_pic)
                    .append($('<div>').addClass('description')
                        .append($('<p>').text(item.description),
                        $('<p>').addClass('data')
                            .text(item.date)
                            .prepend($('<i>').addClass('fa fa-clock-o')))));

            $('.windows .row').prepend($plate);
        }

    })
}

function setMarginTop (elem) {
    var $windowHeight = $(window).height();
    var $elementHeight = $(elem).height();

    $(elem).css('marginTop', ($windowHeight-$elementHeight)/2);
}
