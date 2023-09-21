window.addEventListener("load", function () {

    let boxInfo = [
        {
            price : 10000,
            count : 0,
            sum : 0
        },
        {
            price : 22000,
            count : 0,
            sum : 0
        },
        {
            price : 12000,
            count : 0,
            sum : 0
        }
    ]

    const btnBoxes = document.querySelectorAll(".box div.box_sub button");
    const countBoxes = document.querySelectorAll(".box_sub div");
    const sumBoxes = document.querySelectorAll(".box div span.sum");
    const totalBoxes = document.querySelectorAll(".box3 div span");

    btnBoxes.forEach(function (item, index) {

        item.addEventListener("click", function () {

            if (index === 0) {
                if(boxInfo[index].count !== 0) {
                    boxInfo[index].sum -= boxInfo[index].price;
                    boxInfo[index].count--;
                    Calculate(index);
                }
            } else if (index === 1) {
                boxInfo[0].sum += boxInfo[0].price;
                boxInfo[0].count++;
                Calculate(0);
            } else if (index === 2) {
                if(boxInfo[1].count !== 0) {
                    boxInfo[1].sum -= boxInfo[1].price;
                    boxInfo[1].count--;
                    Calculate(1);
                }
            } else if (index === 3) {
                boxInfo[1].sum += boxInfo[1].price;
                boxInfo[1].count++;
                Calculate(1);
            } else if (index === 4) {
                if(boxInfo[2].count !== 0) {
                    boxInfo[2].sum -= boxInfo[2].price;
                    boxInfo[2].count--;
                    Calculate(2);
                }
            } else if (index === 5) {
                boxInfo[2].sum += boxInfo[2].price;
                boxInfo[2].count++;
                Calculate(2);
            }

        })

    })

    function Calculate(index) {

        countBoxes[index].innerHTML = boxInfo[index].count;
        sumBoxes[index].innerHTML = boxInfo[index].sum;

        totalBoxes[0].innerHTML = String(boxInfo[0].sum + boxInfo[1].sum + boxInfo[2].sum);
        totalBoxes[1].innerHTML =
            String(((boxInfo[0].price * 0.05) * boxInfo[0].count) + ((boxInfo[1].price * 0.05) * boxInfo[1].count)
            + ((boxInfo[2].price * 0.05) * boxInfo[2].count));


        console.log(totalBoxes[0].innerHTML);
        console.log(totalBoxes[1].innerHTML);
        console.log(totalBoxes[2].innerHTML);

        totalBoxes[3].innerHTML =
            String((totalBoxes[0].innerHTML) - (totalBoxes[1].innerHTML) + +(totalBoxes[2].innerHTML));
        console.log(totalBoxes[3].innerHTML);
    }

})