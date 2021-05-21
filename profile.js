let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

// Color Button
function colorFun() {
    colorBtn.textContent = alert('My favorite color is green!')
}

colorBtn.addEventListener('click', colorFun)

// Place Button
function placeFun() {
    placeBtn.textContent = alert('My favorite place is wherever my family is.')
}

placeBtn.addEventListener('click', placeFun)

// Ritual Button
function ritualFun() {
    ritualBtn.textContent = alert('My favorite ritual is exercising and walking my dog in the morning.')
}

ritualBtn.addEventListener('click', ritualFun)