const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

const printGreeting = (userName) => {
    greeting.innerHTML = `Hello ${userName}`;
    greeting.classList.remove('hidden');
}

const onLoginSubmit = (event) => {
    event.preventDefault();
    const username = loginInput.value;
    loginInput.value = "";

    localStorage.setItem(USERNAME_KEY, username);
    printGreeting(username);
};

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    printGreeting(savedUserName);
}

// const onlineSubmit = (event) => {
//     event.preventDefault(); // 새로고침 막음
//
//     const userName = loginInput.value;
//     loginInput.value = "";
//
//     localStorage.setItem(USERNAME_KEY, userName); // f12 application key value
//     const saveUserName = localStorage.getItem(USERNAME_KEY);
//     printGreeting(saveUserName);
// };
//
// loginForm.addEventListener("submit", onlineSubmit)
//
// printGreeting(localStorage.getItem(USERNAME_KEY));

// Arrow Function;
// const foo = a => a;