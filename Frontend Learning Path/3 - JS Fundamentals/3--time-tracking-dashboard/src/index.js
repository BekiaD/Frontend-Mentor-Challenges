import data from './data.json' with { type: 'json' }

const dailyBtn = document.getElementById('dailybtn')
const weeklyBtn = document.getElementById('weeklybtn')
const monthlyBtn = document.getElementById('monthlybtn')

const btnWork = document.getElementById('btn-work')
const btnPlay = document.getElementById('btn-play')
const btnStudy = document.getElementById('btn-study')
const btnExercise = document.getElementById('btn-exercise')
const btnSocial = document.getElementById('btn-social')
const btnSelfCare = document.getElementById('btn-selfcare')

const workHrs = document.getElementById('work-hrs')
const playHrs = document.getElementById('play-hrs')
const studyHrs = document.getElementById('study-hrs')
const exerciseHrs = document.getElementById('exercise-hrs')
const socialHrs = document.getElementById('social-hrs')
const selfcareHrs = document.getElementById('selfcare-hrs')

const oppWorkHrs = document.getElementById('opp-work-hrs')
const oppPlaykHrs = document.getElementById('opp-play-hrs')
const oppStudyHrs = document.getElementById('opp-study-hrs')
const oppExerciseHrs = document.getElementById('opp-exercise-hrs')
const oppSocialHrs = document.getElementById('opp-social-hrs')
const oppSelfcareHrs = document.getElementById('opp-selfcare-hrs')

//REFACTOR TO LOOP THE INDEX - also the dialy/weekly/monthly?
const hrsArr = [workHrs, playHrs, studyHrs, exerciseHrs, socialHrs, selfcareHrs]
const oppHrsArr = [oppWorkHrs, oppPlaykHrs, oppStudyHrs, oppExerciseHrs, oppSocialHrs, oppSelfcareHrs]

// document.addEventListener('DOMContentLoaded', defaultDisplay )

const defaultDisplay = function () {
    for (let i = 0; i < data.length; i++) {
        const dailyCurrentHrs = data[i].timeframes.daily.current
        const dailyPreviousHrs = data[i].timeframes.daily.previous
        hrsArr[i].textContent = dailyCurrentHrs
        oppHrsArr[i].textContent = dailyPreviousHrs
    }
    // OR
    // |
    // v
    // workHrs.textContent = data[0].timeframes.daily.current
    // playHrs.textContent = data[1].timeframes.daily.current
    // studyHrs.textContent = data[2].timeframes.daily.current
    // exerciseHrs.textContent = data[3].timeframes.daily.current
    // socialHrs.textContent = data[4].timeframes.daily.current
    // selfcareHrs.textContent = data[5].timeframes.daily.current

    // oppWorkHrs.textContent = data[0].timeframes.daily.previous
    // oppPlaykHrs.textContent = data[1].timeframes.daily.previous
    // oppStudyHrs.textContent = data[2].timeframes.daily.previous
    // oppExerciseHrs.textContent = data[3].timeframes.daily.previous
    // oppSocialHrs.textContent = data[4].timeframes.daily.previous
    // oppSelfcareHrs.textContent = data[5].timeframes.daily.previous

    dailyBtn.classList.add('text-white')
    weeklyBtn.classList.remove('text-white')
    monthlyBtn.classList.remove('text-white')

    const dynamicTime = document.querySelectorAll('.dynamic-time')
    for (let span of dynamicTime) {
        span.textContent = 'Day'
    }
}

defaultDisplay()

dailyBtn.addEventListener('click', defaultDisplay)

weeklyBtn.addEventListener('click', () => {
    // workHrs.classList.add('animate-jump') for some reason it doesn't work
    for (let i = 0; i < data.length; i++) {
        const weeklyCurrentHrs = data[i].timeframes.weekly.current
        const weeklyPreviousHrs = data[i].timeframes.weekly.previous
        hrsArr[i].textContent = weeklyCurrentHrs
        oppHrsArr[i].textContent = weeklyPreviousHrs
    }

    const dynamicTime = document.querySelectorAll('.dynamic-time')
    for (let span of dynamicTime) {
        span.textContent = 'Week'
    }

    dailyBtn.classList.remove('text-white')
    weeklyBtn.classList.add('text-white')
    monthlyBtn.classList.remove('text-white')
})

monthlyBtn.addEventListener('click', () => {
    for (let i = 0; i < data.length; i++) {
        const monthlyCurrentHrs = data[i].timeframes.monthly.current
        const monthlyPreviousHrs = data[i].timeframes.monthly.previous
        hrsArr[i].textContent = monthlyCurrentHrs
        oppHrsArr[i].textContent = monthlyPreviousHrs
    }

    dailyBtn.classList.remove('text-white')
    weeklyBtn.classList.remove('text-white')
    monthlyBtn.classList.add('text-white')

    const dynamicTime = document.querySelectorAll('.dynamic-time')
    for (let span of dynamicTime) {
        span.textContent = 'Month'
    }
})

const selectDivWork = document.getElementById('select-div-work')
const selectDivPlay = document.getElementById('select-div-play')
const selectDivStudy = document.getElementById('select-div-study')
const selectDivExercise = document.getElementById('select-div-exercise')
const selectDivSocial = document.getElementById('select-div-social')
const selectDivSelfCare = document.getElementById('select-div-selfcare')


// const createnewBtns = function (selectdiv) {
//     // check if btnCurrent exists
//     // if yes, delete
    
//     //    Button Current
//     const btnCurrent = document.createElement('button')
//     const node1 = document.createTextNode('Share')
//     btnCurrent.appendChild(node1)
//     btnCurrent.classList.add('newBtnCurrent', 'hover:bg-dark', 'w-20', 'py-1', 'rounded-xl')
//     console.log(btnCurrent)


//     selectdiv.appendChild(btnCurrent)
// }

// btnWork.addEventListener('mouseover', () => {
//     createnewBtns(selectDivWork)

// })

