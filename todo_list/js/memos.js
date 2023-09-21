window.addEventListener("load", function () {

    const memoForm = document.querySelector(".memoForm");
    const memoInput = document.querySelector(".memo");
    const memoList = document.querySelector(".memoList > ul");

    const memosKey = "memos";

    const memoId = JSON.parse(localStorage.getItem(memosKey));

    let memos = [];

    function addMemo (event) {
        event.preventDefault();

        if (memoInput.value !== "") {

            const memo = {
                text: memoInput.value,
                id: Date.now()
            }
            memoInput.value ="";

            memos.push(memo);
            memoLoad(memo);
            localStorage.setItem(memosKey, JSON.stringify(memos));
        }
    }

    function memoLoad (event) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        li.id = event.id;
        span.innerHTML = " · " + event.text + "  ";
        button.innerHTML = "X";

        button.addEventListener("click", memoDelete);

        li.append(span, button);
        memoList.append(li);
    }

    function memoDelete (event) {
        const li = event.target.parentElement;
        li.remove();

        memos = memos.filter(function (data) {
            return data.id !== Number(li.id);
        })

        localStorage.setItem(memosKey, JSON.stringify(memos));
        console.log(memos);
    }

    memoForm.addEventListener("submit", addMemo);

    if (memoId) {
        memos = memoId;
        memoId.forEach(memoLoad);
    }
})