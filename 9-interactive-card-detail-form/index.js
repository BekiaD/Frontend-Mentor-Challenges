// - Fill in the form and see the card details update in real-time
// - Receive error messages when the form is submitted if:
//   - Any input field is empty
//   - The card number, expiry date, or CVC fields are in the wrong format


const cardName = document.querySelector('.card-name')
const cardNamePlaceholder = document.querySelector('.card-name-placeholder')

const cardNumber = document.querySelector('.card-number')
const cardNumberPlaceholder = document.querySelector('.card-number-placeholder')

const expiryDateMonth = document.querySelector('.expiry-date-month')
const expiryDateMonthPlaceholder = document.querySelector('.expiry-month-placeholder')

const expiryDateYear = document.querySelector('.expiry-date-year')
const expiryDateYearPlaceholder = document.querySelector('.expiry-year-placeholder')

const cvc = document.querySelector('.cvc')
const cvcPlaceholder = document.querySelector('.cvc-placeholder')

const button = document.getElementById('btn')


const cardDetails = [cardName, cardNumber, expiryDateMonth, expiryDateYear, cvc]
// const numberDetails = [cardNumber, expiryDateMonth, expiryDateYear, cvc]

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

button.addEventListener("click", function (event) {
    event.preventDefault()
    const errorClass = document.querySelectorAll('.error-msg')
    for (let element of errorClass) {
        element.remove()
    }

    if (isBlank(cardDetails)) {
        return
    }

    if (numsCheck()) {
        return
    }
    const form = document.getElementById('form')
    form.classList.add('hideform')
    const success = document.querySelector('#success')
    success.style.display = 'flex'

})

const isBlank = function (arr) {
    let wasThereBlank = false
    for (let cardinput of arr) {
        if (cardinput.value === '') {
            let span = document.createElement('span')
            span.classList.add('error-msg')
            span.textContent = "Can't be blank"
            insertAfter(cardinput, span)
            wasThereBlank = true
        }
    }
    return wasThereBlank
}

const numsCheck = function () {
    let isError = false
    if (bankNums()) {
        isError = true
    }
    if (twoNums(expiryDateMonth)) {
        isError = true
    }
    if (twoNums(expiryDateYear)) {
        isError = true
    }
    if (threeNums()) {
        isError = true
    }
    return isError
}

const bankNums = function () {
    if (cardNumber.value.length != 10) {
        let span = document.createElement('span')
        span.classList.add('error-msg')
        span.textContent = "Please enter all the 19 numbers"
        insertAfter(cardNumber, span)
        return true
    } return false
}


const twoNums = function (dateinput) {
    if (expiryDateMonth.value > 12 || dateinput.value.length > 2) {
        let span = document.createElement('span')
        span.classList.add('error-msg')
        span.textContent = "Please enter a valid date"
        insertAfter(dateinput, span)
        return true
    } return false
}

const threeNums = function () {
    if (cvc.value.length != 3) {
        let span = document.createElement('span')
        span.classList.add('error-msg')
        span.textContent = "Please enter 3 numbers"
        insertAfter(cvc, span)
        return true
    } return false
}


const fillIn = function (item, placeholder, itemdefault) {
    item.addEventListener('keyup', () => {
        placeholder.textContent = item.value
        if (placeholder.textContent === '') {
            placeholder.textContent = itemdefault
        }
    })
}

fillIn(cardName, cardNamePlaceholder, 'Jane Appleseed')
fillIn(cardNumber, cardNumberPlaceholder, '0000 0000 0000 0000')
fillIn(expiryDateMonth, expiryDateMonthPlaceholder, '00')
fillIn(expiryDateYear, expiryDateYearPlaceholder, '00')
fillIn(cvc, cvcPlaceholder, '000')





// REFACTORED CODE

// const wrongFormat = function (arr) {
//     console.log('getting called')
//     for (let cardinput of arr) {
//         if (!cardinput.value.match(/^\d+$/)) {
//             let span = document.createElement('span')
//             span.classList.add('error-msg')
//             span.textContent = "Enter numbers only"
//             insertAfter(cardinput, span)
//         }
//     }
// }

// cardName.addEventListener('keyup', () => {
//     cardNamePlaceholder.textContent = cardName.value
//     if (cardNamePlaceholder.textContent === '') {
//         cardNamePlaceholder.textContent = 'Jane Appleseed'
//     }
// })


// cardNumber.addEventListener('keyup', () => {
//     cardNumberPlaceholder.textContent = cardNumber.value
//     if (cardNumberPlaceholder.textContent === '') {
//         cardNumberPlaceholder.textContent = '1234 5678 9123 0000'
//     }
// })


// expiryDateMonth.addEventListener('keyup', () => {
//     expiryMonthPlaceholder.textContent = expiryDateMonth.value
//     if (expiryMonthPlaceholder.textContent === '') {
//         expiryMonthPlaceholder.textContent = '00'
//     }
// })


// expiryDateYear.addEventListener('keyup', () => {
//     expiryYearPlaceholder.textContent = expiryDateYear.value
//     if (expiryYearPlaceholder.textContent === '') {
//         expiryYearPlaceholder.textContent = '00'
//     }
// })


// cvc.addEventListener('keyup', () => {
//     cvcPlaceholder.textContent = cvc.value
//     if (cvcPlaceholder.textContent === '') {
//         cvcPlaceholder.textContent = '000'
//     }
// })