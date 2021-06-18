const $DOMErrorsIcons = (() => {
    let elements = document.getElementsByClassName('error-icon');
    return elements;
})();

const $DOMErrorMessages = (() => {
    let elements = document.getElementsByClassName('error-message');
    return elements;
})();

const $DOMName = document.getElementById('input-name');
const $DOMLastName = document.getElementById('input-lastName');
const $DOMEmail = document.getElementById('input-email');
const $DOMPassword = document.getElementById('input-password');

const $DOMSubmit = document.getElementById('button-submit');

function checkName() {
    if ($DOMName.value === ""){
        $DOMErrorMessages[0].style.visibility = "visible";
        $DOMErrorsIcons[0].style.visibility = "visible";
        formIsOk = false;
    } else {
        $DOMErrorMessages[0].style.visibility = "hidden";
        $DOMErrorsIcons[0].style.visibility = "hidden";
    }
}

function checkLastName() {
    if ($DOMLastName.value === ""){
        $DOMErrorMessages[1].style.visibility = "visible";
        $DOMErrorsIcons[1].style.visibility = "visible";
        formIsOk = false;
    } else {
        $DOMErrorMessages[1].style.visibility = "hidden";
        $DOMErrorsIcons[1].style.visibility = "hidden";
    }
}

function checkEmail() {
    const regexPatt = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (!($DOMEmail.value === "") && $DOMEmail.value.match(regexPatt)){
        $DOMErrorMessages[2].style.visibility = "hidden";
        $DOMErrorsIcons[2].style.visibility = "hidden";
    } else {
        $DOMErrorMessages[2].style.visibility = "visible";
        $DOMErrorsIcons[2].style.visibility = "visible";
        formIsOk = false;
    }
}

function checkPassword() {
    if ($DOMPassword.value.length < 8){
        $DOMErrorMessages[3].style.visibility = "visible";
        $DOMErrorsIcons[3].style.visibility = "visible";
        formIsOk = false;
    } else {
        $DOMErrorMessages[3].style.visibility = "hidden";
        $DOMErrorsIcons[3].style.visibility = "hidden";
    }
}

let formIsok;

function checkForm() {
    formIsOk = true;
    checkName();
    checkLastName();
    checkEmail();
    checkPassword();
    if (formIsOk){
        console.log("submit sucessfull");
        resetValues();
    } else {
        console.log("submit error")
    }
}

function resetValues() {
    $DOMName.value = "";
    $DOMLastName.value = "";
    $DOMEmail.value = "";
    $DOMPassword.value = "";
}

function init() {
    $DOMSubmit.addEventListener('click', checkForm);
}

window.addEventListener('load', init);