$(function () {

    $("#slider").slick({
        arrows: true,
        prevArrow: document.querySelector(".productPrev"),
        nextArrow: $(".productNext"),
        autoplay: false,
        autoplaySpeed: 1200,
        dots: true,
    });

});