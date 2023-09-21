$(function () {

    const wrap1Box = document.querySelectorAll(".wrap1 div");
    const wrap2Box = document.querySelectorAll(".wrap2 button");
    // const prevBtn = document.querySelector(".prev");
    // const nextBtn = document.querySelector(".next");

    let boxIndex = 0;

    wrap1Box[boxIndex].classList.add("active");

    wrap1Box.forEach(function (item, index) {

        item.addEventListener("click", function () {

            wrap1Box[boxIndex].classList.remove("active");
            boxIndex = index;
            wrap1Box[boxIndex].classList.add("active");

        })

    })

    wrap2Box.forEach(function (item,index) {

        item.addEventListener("click", function () {

            if (index) {
                wrap1Box[boxIndex].classList.remove("active");

                // next 버튼을 누르면 오른쪽 박스로 색깔이 이동한다
                // 단 4번째 (끝) 박스에서 next 버튼을 눌렀을 때 첫번째 박스로 이동한다
                if (boxIndex === wrap1Box.length -1) {
                    boxIndex = 0;
                } else {
                    boxIndex ++;
                }
                wrap1Box[boxIndex].classList.add("active");
            } else {
                wrap1Box[boxIndex].classList.remove("active");

                if (boxIndex === 0) {
                    boxIndex = wrap1Box.length -1;
                } else {
                    boxIndex--;
                }
                wrap1Box[boxIndex].classList.add("active");
            }

        })

    })

})

// 바닐라 자바스크립트 로딩
// window.addEventListener("load", function () {
//
//     const boxes = document.querySelectorAll(".box");
//     const buttons = document.querySelectorAll(".wrap2 button");
//     let counter = 0;
//     let hasCounter = 0;
//
//     if (!counter) {
//         boxes[counter].classList.add("active");
//     }
//
//     buttons.forEach(function (item) {
//         item.addEventListener("click", clickButtonHandler(item.dataset.btn));
//         // data-btn="prev . data-btn="next"
//     });
//
//     function clickButtonHandler(type) {
//         return function () {
//             if (type === "prev") {
//                 if (counter) {
//                     counter--;
//                 } else {
//                     counter = boxes.length - 1;
//                 }
//                 boxes[hasCounter].classList.remove("active");
//                 boxes[counter].classList.add("active");
//                 hasCounter = counter;
//             } else {
//                 if (counter < boxes.length - 1) {
//                     counter++;
//                 } else {
//                     counter = 0;
//                 }
//                 boxes[hasCounter].classList.remove("active");
//                 boxes[counter].classList.add("active");
//                 hasCounter = counter;
//             }
//         }
//     }
//
// });