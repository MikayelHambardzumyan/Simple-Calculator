let num1 = "";
let num2 = "";
let operation = "";
let finish = false;

const digit = ["0","1","2","3","4","5","6","7","8","9","."];
const action = ["+","-","x","÷","%"];

const calcOut = document.querySelector(".calcScreen");

function clearAll() {
    num1 = ""; // first number and result
    num2 = ""; // secnd number
    operation = ""; // operation
    finish = false;
    calcOut.textContent = 0;
}

document.querySelector(".clean").onclick = clearAll;

document.querySelector(".keypad").onclick = (event) => {
    // not pressed button
    if (!event.target.classList.contains("key")) return;
    // button pressed clearAll ac
    if (event.target.classList.contains("clean")) return;

    calcOut.textContent = "";
    // getting the button pressed
    const key = event.target.textContent;

    // if the button is pressed 0-9 and .
    if (digit.includes(key)){
        if (num2 === "" && operation === "") {
            num1 += key;
            calcOut.textContent = num1;
        }else if (num1 !== "" && num2 !=="" && finish){
            num2 = key;
            finish = false;
            calcOut.textContent = num2;
        }else {
            num2 += key;
            calcOut.textContent = num2;
        }
        return;
    }
    // if the operation is pressed - +  * ÷
    if (action.includes(key)){
        operation = key;
        calcOut.textContent = operation;
        
        return;
    }

    // if the ecual is pressed =
    if (key === "="){
        if(num2 ==="") num2 = num1;
        switch (operation){
            case "+":
                num1 = (+num1)  + (+num2);
                break;
            case "-":
                num1 = num1 - num2;
                break;
            case "x":
                num1 = num1 * num2;
                break;
            case "÷":
                if(num2 == 0){
                    calcOut.textContent = "Error";
                    num1 = "";
                    num2 = "";
                    operation = "";
                    return;
                }
                num1 = num1 / num2;
                break;
            case"%":
                num1 = (num1 * num2) / 100;
                break;
        }
        finish = true;
        calcOut.textContent = num1;
    }
}