const screens = document.querySelector(".screen")
const clear = document.querySelector("#clear")
const calc = document.querySelectorAll(".calc")
const equals = document.querySelector("#equals")

let first = 0
let second  = 0
let operator = null

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
    let theText = text.textContent
    if (theText.toString().length < 8) {
        if (operator == null && isNaN(e.target.id) == false || operator == null && e.target.id == '.') {
            first += e.target.id
            text.textContent += `${e.target.id}`
            screens.append(text) 
        } else if (operator != null && isNaN(e.target.id) == false || operator != null && e.target.id == '.') {
            second += e.target.id
            text.textContent += `${e.target.id}`
            screens.append(text)
        } else if (operator == null && isNaN(e.target.id) == true && e.target.id != '.') {
            operator = e.target.id
            text.textContent += `${operator}`
            screens.append(text)
        }
    }
    theText = text.textContent
}

addEventByClass("calc", "click", addToScreen)

clear.addEventListener("click", () => {
    text.textContent = ''
    first = 0
    second = 0
    operator = null
    screens.append(text)
})

// complete equation using info from calculator (clean up possibly with operator being input into each equation?)
function equate() {
    let answer
    if (operator == '+'){
          answer = +first + +second
    
        if (answer.toString().length <= 8) {
          text.textContent = `${answer}`
          screens.append(text)
        }
        else {
          text.textContent = 'Error'
          screens.append(text)
         }
    } else if (operator == '-'){
          answer = +first - +second
    
        if (Number(first <= 99999999)) {
          text.textContent = `${answer}`
          screens.append(text)
        }
        else {
          text.textContent = 'Error'
          screens.append(text)
         }
    } else if (operator =='x'){
          answer = +first * +second
    
        if (Number(first <= 99999999)) {
          text.textContent = `${answer}`
          screens.append(text)
        }
        else {
          text.textContent = 'Error'
          screens.append(text)
         }
    } else if (operator == '/'){
          answer = +first / +second
    
        if (Number(first <= 99999999)) {
          text.textContent = `${answer}`
          screens.append(text)
        }
        else {
          text.textContent = 'Error'
          screens.append(text)
         }
    }
    operator = null
    first = answer
    second = 0
}

equals.addEventListener("click", () => {
    equate()
})