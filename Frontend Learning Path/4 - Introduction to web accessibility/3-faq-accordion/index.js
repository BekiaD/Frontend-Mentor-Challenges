// What do i want to do?
// - Set the 'relax' state to closed accordion (step )
//grab all the section 
//for loop to iterate over the sections to have access to all elements in the section = h2, button, p
//
// - When the button or the title is clicked, open up the answer (step )
// - in the same time change the button from + - (step )
// - when clicked on the minus or the title again, fold the text up 
// - and switch the button back (step )


const sections = document.querySelectorAll('#faq-question')
// console.log(sections)

for (let section of sections) {
    const questionText = section.querySelector('#question-text')
    const iconBtn = section.querySelector('#icon-btn')
    const questionAnswer = section.querySelector('#question-answer')
    // console.log(questionText)
    // console.log(iconBtn)
    // console.log(questionAnswer)
    //now need an event listener for the h2 and button
    questionText.addEventListener('click', () => {
        switcheroo(questionAnswer, iconBtn)

        // questionAnswer.classList.contains('hidden') 
        // ? questionAnswer.classList.remove('hidden') 
        // : questionAnswer.classList.add('hidden')
    })
    iconBtn.addEventListener('click', () => {
        switcheroo(questionAnswer, iconBtn)
    })
}

function switcheroo(questionAnswer, iconBtn) { //parameters are h2 and button
    if (questionAnswer.classList.contains('hidden')) {
        questionAnswer.classList.remove('hidden')
        iconBtn.classList.remove('icon-btn-plus')
        iconBtn.classList.add('icon-btn-minus')
    } else {
        questionAnswer.classList.add('hidden')
        iconBtn.classList.remove('icon-btn-minus')
        iconBtn.classList.add('icon-btn-plus')
    }

}





































// // // --
// const buttons = document.querySelectorAll('#icon-btn')
// console.log(buttons)

// //this is an array of all buttons - i want to add an event listener to each
// // eventlistener in a for of loop

// for (let button of buttons) {
//   //  console.log(button)
//   let number = ''
//     // console.log(number)
//     button.addEventListener('click', function () {
//         console.log(`clickity click ${number}`)

//     })
//     number++
// }
