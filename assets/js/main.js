$(document).ready(function () {
    var triger = $('.triger .li-container');
    var clonlimin = $('.li-min').clone();
    var clonlimax = $('.li-max').clone();


    if ($(window).width() > 991) {
        $('.li-max').css('display', 'list-item');
        triger.empty();
        triger.prepend(clonlimin);
        var count_li = $(triger).children().length;
        $('.count-li').text(count_li);
    } else {
        $('.li-max').css('display', 'none');
        triger.empty();
        triger.prepend(clonlimin);
        triger.prepend(clonlimax);
        $('.li-container .li-max').css('display', 'list-item');
        var count_li = $(triger).children().length;
        $('.count-li').text(count_li);
    }

    $(window).on('resize', function () {
        if ($(window).width() > 991) {
            $('.li-max').css('display', 'list-item');
            triger.empty();
            triger.prepend(clonlimin);
            var count_li = $(triger).children().length;
            $('.count-li').text(count_li);
        } else {
            $('.li-max').css('display', 'none');
            triger.empty();
            triger.prepend(clonlimin);
            triger.prepend(clonlimax);
            $('.li-container .li-max').css('display', 'list-item');
            var count_li = $(triger).children().length;
            $('.count-li').text(count_li);
        }
    });






});