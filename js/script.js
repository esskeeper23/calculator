const display = document.querySelector(".display")
const operators = document.querySelectorAll(".operators")
const numbers = document.querySelectorAll(".num")

operators.forEach(operator => {
    operator.addEventListener("click", operator => {
         console.log(operator.target.innerText)
    })
});

numbers.forEach(number => {
    number.addEventListener("click", number => {
        let x = number.target.innerText
        display.innerHTML += x
    })
});

