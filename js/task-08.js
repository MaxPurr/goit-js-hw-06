const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let email = loginForm.elements.email;
    let password = loginForm.elements.password;
    if (email.value === "" || password.value === "") {
        alert("All fields must be completed");
    }
    else {
        const data = {};
        data[email.name] = email.value;
        data[password.name] = password.value;

        console.log(data);

        loginForm.reset();
    }
});

