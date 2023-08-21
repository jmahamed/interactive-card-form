let cardNumber = document.querySelector('#card-number')
let displayCardNumber = document.querySelector('.card-number')

cardNumber.oninput = showNumber;

function showNumber() {
    displayCardNumber.textContent = this.value;
}

// spaces in credit card number
let cardNumberInput = document.getElementById("card-number");

cardNumberInput.addEventListener("input", function() {
    let cardNumber = cardNumberInput.value;

    cardNumber = cardNumber.replace(/\D/g, '');

    cardNumber = cardNumber.replace(/(.{4})/g, '$1 ');

    cardNumberInput.value = cardNumber;
});


cardNumberInput.addEventListener("blur", function() {
    let cardNumber = cardNumberInput.value;


    cardNumber = cardNumber.replace(/\s/g, '');

    cardNumberInput.value = cardNumber;
});



let cardName = document.querySelector('#name')
let displayCardName = document.querySelector('.card-name')

cardName.oninput = showName;

function showName() {
    displayCardName.textContent= this.value;
}

let expMonth = document.querySelector('#exp-datem')
let displayExpMonth = document.querySelector('.card-month')

expMonth.oninput = showMonth;

function showMonth() {
    displayExpMonth.textContent = this.value;
}

let expYear = document.querySelector('#exp-datey')
let displayExpYear = document.querySelector('.card-year')

expYear.oninput = showYear;

function showYear() {
    displayExpYear.textContent = this.value;
}

let cvc = document.querySelector('#cvc')
let displayCvc = document.querySelector('.cvc-number')

cvc.oninput = showCvc; 

function showCvc() {
    displayCvc.textContent = this.value;
}


function validated() {
    let cardErrorMessage = document.querySelector('.card-number-error');
    let expiryError = document.querySelector('.expiry-error');
    let cvcError = document.querySelector('.cvc-error');

    if (isNaN(cardNumber) || cardNumber === "") {
        cardErrorMessage.style.display = 'block';
    } else {
        cardErrorMessage.style.display = "none";
    }

    if (isNaN(expMonth) || expMonth.trim() === "" || (isNaN(expYear)) ||expYear.trim() === "" )  {
        expiryError.style.display = 'flex';

    } else {
        expiryError.style.display = "none";
    }

    if (isNaN(cvc) || cvc.trim() === "") {
        cvcError.style.display = 'block';
        
    } else {
        cvcError.style.display = "none";
    }

    return true; // All fields are valid, allow form submission
}