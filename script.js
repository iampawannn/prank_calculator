const allButtonElm = document.querySelectorAll(".btn");
let strToDisplay = "";
const displayElm = document.querySelector(".display");

const operators = ["%", "/", "*", "-", "+"];
let lastOperator = "";
const buttonAction = (value) => {
    displayElm.classList.remove("prank");

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
    btn.addEventListener("mousedown", () => {
        btn.style.scale=".9"
    })
    btn.addEventListener("click", () => {
        btn.style.scale = "1";
        const value = btn.innerText;
       buttonAction(value);
    })
})


const display = (str) => {
    displayElm.innerText = str || "0.0";
};
//calculate total 
const displayTotal = () => {
    const extraValue = randomValue();
    if (extraValue) {
        displayElm.classList.add("prank");
    }
    const total = eval(strToDisplay) + extraValue;

    strToDisplay = total.toString();
    display(strToDisplay);
};

const randomValue = () => {
    const num = Math.round(Math.random() * 10);  
    return num < 4 ? num : 0;
}