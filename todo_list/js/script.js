window.addEventListener("load", function () {

    const loginForm = document.querySelector(".loginForm");
    const loginInput = document.querySelector(".login");
    const greeting = document.querySelector(".greeting");

    const loginKey = "username";
    const userName = localStorage.getItem(loginKey);

    function login (event) {
        event.preventDefault();

        if (loginInput.value !== null) {

            console.log(loginInput.value)
            localStorage.setItem(loginKey, loginInput.value);
            loginInput.value ="";

            const userName = localStorage.getItem(loginKey);
            loginLoad(userName);
        }
    }

    function loginLoad (event) {
        greeting.innerHTML= "안녕하세요 " + event + "님!";
    }

    if(userName === null) {
        loginForm.addEventListener("submit", login);
    } else {
        loginLoad(userName);
        loginForm.addEventListener("submit", login);
    }

})