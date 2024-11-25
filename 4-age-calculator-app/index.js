const button        = document.getElementById('btn')
// inputs span
const yearsSpan     = document.getElementById('years')
const monthsSpan    = document.getElementById('months')
const daysSpan      = document.getElementById('days')

// date inputs 
const dayInput      = document.getElementById('day-input')
const monthInput    = document.getElementById('month-input')
const yearInput     = document.getElementById('year-input')

// todays date
const todaysDateObj = new Date()
const month         = todaysDateObj.getUTCMonth() + 1
const day           = todaysDateObj.getUTCDate()
const year          = todaysDateObj.getUTCFullYear()
const todaysDateRaw =`${year}-${month}-${day}`

// console.log(todaysDateObj)
// console.log(todaysDateRaw)

const pMonth        = month.toString().padStart(2,"0");
const pDay          = day.toString().padStart(2,"0");
const todaysDatePad = `${year}-${pMonth}-${pDay}`;
// console.log(todaysDatePad)


// --

button.addEventListener('click', function(e){
    e.preventDefault()

// birthdate 
    const birthMonth    = monthInput.value
    const birthDay      = dayInput.value
    const birthYear     = yearInput.value
    const birthDateRaw  =`${birthYear}-${birthMonth}-${birthDay}`

    // console.log(birthDateObj, 'hi')
    // console.log(birthDateRaw)
    
    const pBYear        = birthYear.toString()
    const pBMonth       = birthMonth.toString().padStart(2,"0")
    const pBDay         = birthDay.toString().padStart(2,"0")
    const birthDatePad  = `${pBMonth}/${pBDay}/${pBYear}`
    // console.log(birthDatePad)

    const isValidDate   = checkValidDate(birthDay, birthMonth) 

    if(!isValidDate){
        alert('Please add a valid date in format: DD/MM/YYYY')
        return
    } 

    const differenceInDays    = calculateDays(birthDatePad)

    const actualDifferenceArr = convertDays(differenceInDays)
    
    let outputDays   = actualDifferenceArr[2]
    let outputMonths = actualDifferenceArr[1]
    let outputYears  = actualDifferenceArr[0]

    console.log(outputDays, outputMonths, outputYears)

    //print age
    yearsSpan.textContent = outputYears
    monthsSpan.textContent = outputMonths
    daysSpan.textContent = outputDays

})

function convertDays (totalDays){
    let years    = 0
    let months   = 0
    let daysLeft = totalDays     // let days = 0  DAYS

    while (daysLeft >= 365){
        years++
        daysLeft = daysLeft -365  // daysleft -= 365
    } 
    // console.log('YEARS', years, daysleft)

    while (daysLeft >= 30){
        months++
        daysLeft = daysLeft - 30
    }
    // console.log('MONTHS', years, months, daysLeft)

    return [years, months, daysLeft]

}

// function to calculate age
function calculateDays(birthDate){
    let bday = new Date(birthDate) //console.log(bday)
    let today = new Date()

    // Calculating the time difference of two dates
    let differenceInTime = today.getTime() - bday.getTime()

    // Calculating the no. of days between two dates
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24))-1

    // To display the final number of days (result)
    // console.log(`Total number of days: ${differenceInDays}`)
    return differenceInDays
  }


// check if birth date exists - number of days/months
function checkValidDate(day, month){
    // console.log(day, month)
    if (
        day > 31 ||
        month > 12 ||
        (month == 2 && day > 29) ||
        (month == 4 && day > 30) ||
        (month == 6 && day > 30) ||
        (month == 9 && day > 30) ||
        (month == 11 && day > 30)
    ) {
        return false;
    }
    return true;
}