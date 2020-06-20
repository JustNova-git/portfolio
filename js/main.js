function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}
ibg();
$(function () {
    $('a[href^="#"]').on('click', function (event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        dn += -100;
        // console.log(dn);
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */

        $('html, body').animate({ scrollTop: dn }, 1000);

        /*
        * 1000 скорость перехода в миллисекундах
        */
    });

    $('#toggle').on('click', function (event) {
        $('.header__list').toggleClass('active')
    })





});


/*
var button = document.getElementById("send-button");
var button2 = document.getElementById("send-button2");
var button2 = button2.classList;


button.onmouseover = function () {
    button2.add('active')
}
button.onmouseout = function () {
    button2.remove('active')
}

// SLIDER


$('.clients__slider').slick({
    infinite: true,
    swipe: true,
    dots: true,
});
*/

