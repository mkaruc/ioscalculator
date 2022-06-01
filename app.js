const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const minusButton = document.querySelector('[data-operation=plmn]')
const percentButton = document.querySelector('[data-operation=percent]')
const divideButton = document.querySelector('[data-operation=divide]')
const multiplyButton = document.querySelector('[data-operation=multply]')
const subsButton = document.querySelector('[data-operation=subs]')
const addButton = document.querySelector('[data-operation=addi]')
// const counted = document.querySelector('.countedValue')
const counting = document.querySelector('.countingValue')

numberButtons.forEach(item=>{
  item.addEventListener('click',() =>{
    if(item.value==="."){
      if(!counting.innerHTML.includes(".")){
        counting.innerHTML+=item.value}
      }
    else if (counting.innerHTML != "0"){
      counting.innerHTML += item.value
  }else if(counting.innerHTML === "0"){
      counting.innerHTML = item.value
}})
}
)
;
let firstNumber;
let secondNumber;
let operate;

const addition = function(){
    firstNumber = counting.innerHTML
    counting.innerHTML = "0"
    operate = "add"
}

const subtract = function(){
    firstNumber = counting.innerHTML
    counting.innerHTML = "0"
    operate = "sub"
}

const multiply = function(){
    firstNumber = counting.innerHTML
    counting.innerHTML = "0"
    operate = "mult"
}

const divide = function(){
    firstNumber = counting.innerHTML
    counting.innerHTML = "0"
    operate = "divd"
}

const percent = function(){
    firstNumber = counting.innerHTML
    counting.innerHTML = "0"
    operate = "per"
}

addButton.addEventListener("click", addition)
subsButton.addEventListener("click", subtract)
multiplyButton.addEventListener("click", multiply)
divideButton.addEventListener("click", divide)

// equals

const equals = function(){
    secondNumber = counting.innerHTML
    counting.innerHTML = "0"
    
    switch(operate){
        case "add":
            counting.innerHTML = (+firstNumber + +secondNumber)
            break
        case "sub":
            counting.innerHTML = (+firstNumber - +secondNumber)
            break
        case "mult":
            counting.innerHTML = (+firstNumber * +secondNumber)
            break
        case "divd":
            counting.innerHTML = (+firstNumber / +secondNumber)
            break
    }


}

equalsButton.addEventListener("click", equals)



// delete & percent & clear

const negativeConverter = function(){
    counting.innerHTML = -(counting.innerHTML)
}

minusButton.addEventListener("click", negativeConverter)



const getPercent = function(){
    counting.innerHTML /= 100
}

percentButton.addEventListener("click", getPercent)

const clear = function(){
    counting.innerHTML = 0
    firstNumber = 0
    secondNumber = 0
}

deleteButton.addEventListener("click", clear)

