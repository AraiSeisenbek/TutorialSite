const apiBaseUrl = "https://jsonplaceholder.typicode.com/";

let apiRegister = async (userData) => {
    let response = await fetch(`${apiBaseUrl}users`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
    });

    if (response.status >= 200 && response.status < 300)
        alert("SUCCESS");

    var result = await response.json();
    console.log(result);
};

let email = document.getElementById("email");
let password = document.getElementById("password");
let rePassword = document.getElementById("rePassword");
let form = document.getElementById("reg-form");

let validateUserForm = () => {
    let EmailRegex = /^[a-zA-z0-9]+@[a-z]+.[a-z]{2,3}/;
    let flag = true;
    if (email.value.trim() === "") {
        email.classList.add("error");
        email.classList.remove("validated");
        email.nextElementSibling.textContent = "email cannot be empty!";
        flag = false;
    }
    else if (!EmailRegex.test(email.value)) {
        email.classList.add("error");
        email.classList.remove("validated");
        email.nextElementSibling.textContent = "invalid email";
        flag = false;
    } else {
        email.classList.add("validated");
        email.classList.remove("error");
        email.nextElementSibling.textContent = "";
    }

    if (!validatePassword(password.value)) {
        password.classList.add("error");
        password.classList.remove("validated");
        password.nextElementSibling.textContent = "password have to consist of at least 8 symbols, numbers, lowercase and uppercase letters,special symbols"
        flag = false;
    } else {
        password.classList.add("validated");
        password.classList.remove("error");
        password.nextElementSibling.textContent = "";
    }

    if (rePassword.value !== password.value || rePassword.value.trim() === "") {
        rePassword.classList.remove("validated");
        rePassword.classList.add("error");
        rePassword.nextElementSibling.textContent = "password doesn't match";
        flag = false;
    } else {
        rePassword.classList.add("validated");
        rePassword.classList.remove("error");
        rePassword.nextElementSibling.textContent = "";
    }
    return flag;
};

let validatePassword = (password) => {
    if (!/[A-Z]/.test(password))
        return false;
    if (!/[a-z]/.test(password))
        return false;
    if (!/[0-9]/.test(password))
        return false;
    if (!/[&^%$#@!~-]/.test(password))
        return false;
    if (password.length < 8)
        return false;
    return true;
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateUserForm()) {
        apiRegister({
            email: email.value,
            password: password.value,
        });
    };
});
