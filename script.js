var swiper = new Swiper('.swiper', {
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var paymentForm = document.getElementById('payment-form');
var creditCardInput = document.getElementById('creditCard');
var cvvInput = document.getElementById('cvv');

paymentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var errors = {};

    if (!creditCardInput.checkValidity()) {
        errors.creditCard = ["Credit card number must be a 10-digit number."];
    }

    if (!cvvInput.checkValidity()) {
        errors.cvv = ["CVV must be a 3-digit number."];
    }

    if (Object.keys(errors).length === 0) {
        clearErrors();
        alert('Form submitted successfully!');
    } else {
        displayErrors(errors);
    }
});

function displayErrors(errors) {
    var errorContainer = document.getElementById('error-container');
    errorContainer.innerHTML = '';
    Object.keys(errors).forEach(function (key) {
        errors[key].forEach(function (error) {
            errorContainer.innerHTML += '<p>' + error + '</p>';
        });
    });
}

function clearErrors() {
    var errorContainer = document.getElementById('error-container');
    errorContainer.innerHTML = '';
}
