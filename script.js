const screens = document.querySelector(".screen")
const clear = document.querySelector("#clear")
const calc = document.querySelectorAll(".calc")
const equals = document.querySelector("#equals")

let first 
let second 
let operator 

// if operater == null and input is numeric make first
// if operator == !null amd input is numeric make second
// if operator == null and input is !numeric and not . make operator

const text = document.createElement("div")

function addEventByClass(className, event, fn) {
    let list = document.getElementsByClassName(className)
    for (i = 0; i < list.length; i++) {
        list[i].addEventListener(event, fn, false)
    }
}


function addToScreen(e) {
    if (operator == null && typeof Number(e.target.id) === 'number') {
        let first = e.target.id
        text.textContent += `${first}`
        screens.append(text) 
    }
    
}

addEventByClass("calc", "click", addToScreen)

clear.addEventListener("click", () => {
    text.textContent = ''
    first = 0
    second = 0
    operator = null
    screens.append(text)
})

function equate() {
    let answer = first * second
    text.textContent = `${answer}`
    screens.append(text)
}

equals.addEventListener("click", () => {
    equate()
})