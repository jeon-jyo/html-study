$(function () {
    $("#imgSlider").slick({
        speed: 500,
        dots: true, // 슬라이드 페이지 번호

        infinite: true, // true 는 rolling 무한반복
        slidesToShow: 1,
        slidesToScroll: 1, // 한 번에 넘기는 갯수
        autoplay: true,

        // centerMode: true,

        arrows: true,
        prevArrow: $("#imgSlider_prev"),
        nextArrow: $("#imgSlider_next")
    })
});