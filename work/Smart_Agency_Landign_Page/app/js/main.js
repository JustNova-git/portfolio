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

