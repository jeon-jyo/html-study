// html 로드 되기 전 실행
// document.querySelector() = $
console.log($(".wrap"));

// function() html 로드 되고 난 뒤에 실행
$(function () {

    // $(".wrap").on("첫번째 값은 이벤트 핸들러"), function() {
    //
    // })
                    // 클릭 이벤트
    $(".wrap").on("click", function (){
        // $(".box4").fadeIn();
        // $(".box4").fadeOut();
        $(".wrap").toggleClass("active");
        $(".popupMenu").stop().fadeToggle(); // stop() 즉각 반응
        // .fadeToggle()은 보이는 요소는 보이지 않게, 보이지 않는 요소는 보이게 함
    });
});