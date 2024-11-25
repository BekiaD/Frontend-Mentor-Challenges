const successPage = `<body class="success-message bg-lime-200  sm:bg-zinc-700 sm:flex sm:h-screen sm:justify-center sm:items-center">
<main class="bg-pink-100 px-6 h-screen flex flex-col justify-center sm:bg-white sm:rounded-lg sm:flex sm:flex-col sm:h-auto sm:justify-center sm:w-1/5 sm:rounded-lg sm:p-5">              
    <img src="images/icon-success.svg" alt="red tick sign" class="w-14 py-5 sm:py-2">
    <h1 class="py-3 sm:py-0 text-3xl sm:text-2xl font-bold text-slate-800">Thanks for subscribing!</h1>
    <p class="py-3 sm:py-2 sm:text-sm">A confirmation email has been sent to <span id="email-span"></span>. 
        Please open it and click the button inside to confirm your subscription.</p>
    <button class="dismiss-btn px-8 py-4 sm:py-3 mt-20 sm:mt-2 bg-slate-800  text-slate-200 text-md rounded-lg hover:bg-gradient-to-r from-red-500 to-orange-500">Dismiss message</button>
</main>
</body>`

const defaultFormBody = document.getElementById('default-form')
const formElements = document.getElementById('form-elements')


formElements.addEventListener('submit', function (event) {
    event.preventDefault()
    const inputEmail = document.getElementById('email-address')
    emailValue = inputEmail.value
    // console.log(emailValue)
    defaultFormBody.innerHTML = successPage
    const emailSpan = document.getElementById('email-span')
    emailSpan.textContent = emailValue
})


