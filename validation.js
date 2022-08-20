const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const plz = document.querySelector("#plz");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});


function checkInputs() {
    const lastNameValue = lastName.value.trim();
    const firstNameValue = firstName.value.trim();
    const emailValue = email.value.trim();
    const plzValue = plz.value.trim();

    if (lastNameValue === "") {
        setErrorFor(lastName, "Please fill the required field");
    } else {
        setSuccessFor(lastName);
    }

    if (firstNameValue === "") {
        setErrorFor(firstName, "Please fill the required field");
    } else {
        setSuccessFor(firstName);
    }

    if (emailValue === "") {
        setErrorFor(email, "Please fill the required field");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Please Enter a valid email");
    } else {
        setSuccessFor(email);
    }

    if (plzValue === "") {
        setErrorFor(plz, "Please fill the required field");
    } else {
        setSuccessFor(plz);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

function lettersOnly(input) {
    // correct regex to match for alphabets only.
    var regex = /^[a-zA-Z]+$/g;
    const value = input.value;
    if (!regex.test(value)) {
        input.value = value.slice(0, value.length - 1);
    }
}

function numbersOnly(input) {
    const regex = /[^0-9+]/gi;
    input.value = input.value.replace(regex, "");
}
