$(function () {
//자바 스크립트 파일 위에 있어도 html 다 로드되고 난 후 실행

    const starInfo = [
        {
            message : "별로에요",
            imgSrc : "images/star-lv1.png"
        },
        {
            message : "그냥 그래요",
            imgSrc : "images/star-lv2.png"
        },
        {
            message : "보통이에요",
            imgSrc : "images/star-lv3.png"
        },
        {
            message : "좋아요",
            imgSrc : "images/star-lv4.png"
        },
        {
            message : "최고에요",
            imgSrc : "images/star-lv5.png"
        }
    ]

    // 2. 제이쿼리 포함 js
    const stars = document.querySelectorAll(".fa-star");
    const print = document.querySelector('.msg');

    function checkStar(index) {
        for (let i = 0; i < stars.length; i++) {
            if (i <= index) {
                stars[i].classList.add("gold");
            } else {
                stars[i].classList.remove("gold");
            }
        }
    }
    function printMessage( { message, imgSrc} ) {
        print.innerHTML = `${message} <img src="${imgSrc}" alt="">`;
    }

    for (let i = 0; i < stars.length; i++) {
        // 실행문
        stars[i].addEventListener("click",  () => {
            checkStar(i);
            printMessage(starInfo[i]);
        });
    }


    // 1. 바닐라 js
    // const starBox=
    //     document.querySelectorAll('.star > i');
    // const msg =
    //     document.querySelector('.msg');
    // const img =
    //     document.querySelector('.img');
    //
    // starBox.forEach(function (item, index) {
    //     item.addEventListener('click', function (event) {
    //         // console.log(item);
    //         // console.log(event);
    //         // console.log(typeof item);   // object
    //         // let num = Array.from(starBox).indexOf(item);
    //
    //         msg.innerHTML = starInfo[index].message;
    //         img.src = starInfo[index].imgSrc;
    //
    //         for(let i = 0; i < starBox.length; i++) {
    //             if (index >= i) {
    //                 starBox[i].style.color = "gold";
    //             } else {
    //                 starBox[i].style.color = "black";
    //             }
    //         }
    //
    //     })
    // })

    // 0. 배터리
    // $(".star > i").on("click", function () {
    //
    //     const star = +$(this).data('star');
    //
    //     $(this).nextAll().css("color", "black");
    //     $(this).prevAll().css("color", "gold");
    //     $(this).css("color", "gold");
    //
    //     if(star === 1) {
    //         $(".message > span").html("별로에요");
    //     } else if (star === 2) {
    //         $(".message > span").html("그냥 그래요");
    //         $(".message > i").attr('class', 'fa fa-battery-1');
    //     } else if (star === 3) {
    //         $(".message > span").html("보통이에요");
    //         $(".message > i").attr('class', 'fa fa-battery-half');
    //     } else if (star === 4) {
    //         $(".message > span").html("좋아요");
    //         $(".message > i").attr('class', 'fa fa-battery-3');
    //     } else if (star === 5) {
    //         $(".message > span").html("최고에요");
    //         $(".message > i").attr('class', 'fa fa-battery-4');
    //     }
    //
    // })

})