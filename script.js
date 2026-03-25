var nameError = document.querySelector("#name-error");
var phoneError = document.querySelector("#phone-error");
var emailError = document.querySelector("#email-error");
var messageError = document.querySelector("#message-error");
var submitError = document.querySelector("#submit-error");


function validateName() {
    var name = document.querySelector("#contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;

}
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    // 1. Empty check
    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    // 2. Digits only check and test(phone) returns true if value has only digit otherwise give false
    if (!/^[0-9]+$/.test(phone)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    // 3. Length check
    if (phone.length !== 11) {
        phoneError.innerHTML = 'Phone no should be 11 digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;


}

function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}
function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;
    if (message.length === 0) {
        messageError.innerHTML = 'Enter some message';
        return false;
    }
    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateForm() {
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (!isNameValid || !isPhoneValid || !isEmailValid || !isMessageValid) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function () {
            submitError.style.display = 'none'
        }, 3000)
        return false;
    }
    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    return true;
};