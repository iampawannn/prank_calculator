const allButtonElm = document.querySelectorAll(".btn");
let strToDisplay = "";
const displayElm = document.querySelector(".display");

const operators = ["%", "/", "*", "-", "+"];
let lastOperator = "";
const buttonAction = (value) => {
    console.log(value);

    if (value === "AC") {
        strToDisplay = "";
        return display(strToDisplay);
    }
     
    if (value === "=") { 
        lastOperator = ""
        // get the last character
        const lastChar = strToDisplay[strToDisplay.length - 1];

        // check if is one of the operators
        if (operators.includes(lastChar)) {
            strToDisplay = strToDisplay.slice(0, -1);
        }
        return displayTotal();
    }
    if (value === "C") {
        strToDisplay = strToDisplay.slice(0, -1);
        return display(strToDisplay);
    }
    //show only last clicked operator
    if(operators.includes(value)) {
        lastOperator = value
        //get the last character 
        const lastChar = strToDisplay[strToDisplay.length -1];

    if (operators.includes(lastChar)) 
    {
        strToDisplay = strToDisplay.slice(0, -1);
    }
    }
    //handle the multiple dot click
    if(value === ".") {
        const lastOperatorIndex = strToDisplay.
        lastIndexOf(lastOperator);
        const lastNumberSet = strToDisplay.slice(lastOperatorIndex);

        if (lastNumberSet.includes(".")) {
            return;
        }


        if (!lastOperator && strToDisplay.includes(".")) {
            return;
        }
    }


    strToDisplay += value;
    display(strToDisplay);
};

allButtonElm.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;
       buttonAction(value);
    })
})


const display = (str) => {
    displayElm.innerText = str || "0.0";
};
//calculate total 
const displayTotal = () => {
const total = eval(strToDisplay);
strToDisplay = total.toString();
display(strToDisplay);
};

