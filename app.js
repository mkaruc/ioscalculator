console.log("merhaba");

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const counted = document.querySelector('countedValue')
const counting = document.querySelector('countingValue')

counting.forEach(item=>{
  item.addEventListener('click',() =>{
    if(item.value==="."){
      if(!counting.innerHTML.includes(".")){
        counting.innerHTML+=item}
      }
    else if (counting.innerHTML != "0"){
      counting.innerHTML += item.value
  }else if(counting.innerHTML === "0"){
      counting.innerHTML = item.value
}})
}
)

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
    operate = "dvd"
}

const percent = function(){
    firstNumber = counting.innerHTML
    counting.innerHTML = "0"
    operate = "per"
}

substractBtn.addEventListener("click", subtract)

addBtn.addEventListener("click", addition)

multiplyBtn.addEventListener("click", multiply)

divideBtn.addEventListener("click", divide)

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
        case "dvd":
            counting.innerHTML = (+firstNumber / +secondNumber)
            break
    }


}

assignBtn.addEventListener("click", equals)



// delete & percent & clear

const converter = function(){
    counting.innerHTML = -(counting.innerHTML)
}

convertBtn.addEventListener("click", converter)



const getPercent = function(){
    counting.innerHTML /= 100
}

percentBtn.addEventListener("click", getPercent)

const clear = function(){
    counting.innerHTML = 0
    firstVar = 0
    secondVar = 0
}

deleteBtn.addEventListener("click", clear)