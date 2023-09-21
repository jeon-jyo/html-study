$(function () {

    const menuBtn = document.querySelectorAll(".wrap1 button");
    const coinBtnBox = document.querySelectorAll(".wrap2 button");
    const balanceBtn = document.querySelector(".balance");
    const selectedBtn = document.querySelector(".selected");

    let price = 0;

    coinBtnBox.forEach(function (item,index) {

        item.addEventListener("click", function () {

            let plusPrice = +item.children[0].innerHTML;
            price += plusPrice;
            alert(plusPrice + "원 넣었습니다.");
            confirmBtn();

            if (price >= 5000) {
                menuBtn[0].classList.add("active");
                menuBtn[1].classList.add("active");
                menuBtn[2].classList.add("active");
            } else if (price >= 4000) {
                menuBtn[0].classList.add("active");
                menuBtn[1].classList.add("active");
            } else if (price >= 3000) {
                menuBtn[0].classList.add("active");
            }

        })

    })

    menuBtn.forEach(function (item2, index2) {

        item2.addEventListener("click", function () {

            let MinusPrice = +item2.children[0].innerHTML;

            if(price >= 3000) {
                price -= MinusPrice;
                alert("구매 성공! " + MinusPrice + "원 쓰셨습니다.");
            }
            confirmBtn();

            if (price < 3000) {
                    menuBtn[2].classList.remove("active");
                    menuBtn[1].classList.remove("active");
                    menuBtn[0].classList.remove("active");
            } else if (price < 4000) {
                menuBtn[2].classList.remove("active");
                menuBtn[1].classList.remove("active");
            } else if (price < 5000) {
                menuBtn[2].classList.remove("active");
            }

        })

    })

    function confirmBtn() {
        balanceBtn.innerHTML = price;
    }

    selectedBtn.addEventListener("click", function () {
        switch (true) {
            case (price >= 5000) :
                alert("전체 음료 선택 가능합니다."); // true === price >= 5000
                break;
            case (price >= 4000) :
                alert("아메리카노, 카페라떼 선택 가능합니다.");
                break;
            case (price >= 3000) :
                alert("아메리카노 선택 가능합니다.");
                break;
            case (price >= 0) :
                alert("현재 잔액이 부족합니다.");
                break;
        }
    })

})


// $(function () {
// //  $( () => {}     // array function
//
//     let myCoin = 0;
//
//     function showMessage() {
//         const message = `${myCoin}원 넣었습니다.`
//         alert(message);
//     }
//
//     // 3.
//     // $(".wrap2 button").on("click", function () {
//     //
//     //     // console.log( $(this).hasClass('coin1') ); // true or false 반환
//     //     // console.log( $(this).children().text() ); // 500 or 1000
//     //     // $(this).children() = button 의 자식 요소인 <strong>
//     //
//     //     const price = +$(this).data('price');
//     //     myCoin += price;
//     //     showMessage();
//     //
//     // });
//     //
//     // $(".selected").on("click", function () {
//     //
//     //     if(myCoin >= 5000) {
//     //         alert("전체 음료 선택 가능합니다.");
//     //     } else if (myCoin >= 4000) {
//     //         alert("아메리카노, 카페라떼 선택 가능합니다.");
//     //     } else if (myCoin >= 3000) {
//     //         alert("아메리카노 선택 가능합니다.");
//     //     } else if (myCoin >= 0) {
//     //         alert("현재 잔액이 부족합니다.");
//     //     }
//     // })
//
//     // 2.
//     // $(".coin").on("click", function () {
//     //     myCoin += +$(this).html();
//     //     showMessage();
//     // })
//
//     // 1.
//     // $(".wrap2 button").on("click", function (event) {
//     //
//     //     let btnId = event.target.id;
//     //     console.log(btnId); // string
//     //
//     //     if (btnId === "coin1") {
//     //         myCoin = myCoin + 500;
//     //         showMessage();
//     //     } else if (btnId === "coin2") {
//     //         myCoin = myCoin + 1000;
//     //         showMessage();
//     //     } else if (btnId === "coin3") {
//     //         myCoin = myCoin + 5000;
//     //         showMessage();
//     //     }
//     //
//     // });
//
// });