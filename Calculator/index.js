/*
To DO
-----
inverting a number with a comma and a decimal removes the commas
*/
let clicked = document.querySelectorAll(".calcButton");
clicked.forEach(el => el.addEventListener("click", function () {
  el.style.animation = "buttonAnimation 0.5s"
}));

let message = document.querySelector(".messages");

let addCommas = () => {
  const finalRun = (afterDecimal = "") => {
    let newStr = entered.innerHTML.replace(/[,-.]/g,"");
    if (newStr.length < 4){
      entered.innerHTML = newStr+afterDecimal;
    } else if (newStr.length === 4){
      entered.innerHTML = newStr.slice(0,1)+","+newStr.slice(1)+afterDecimal;
    } else if (newStr.length === 5){
      entered.innerHTML = newStr.slice(0,2)+","+newStr.slice(2)+afterDecimal;
    } else if (newStr.length === 6){
      entered.innerHTML = newStr.slice(0,3)+","+newStr.slice(3)+afterDecimal;
    } else if (newStr.length === 7){
      entered.innerHTML = newStr.slice(0,1)+","+newStr.slice(1,4)+","+newStr.slice(4)+afterDecimal;
    } else if (newStr.length === 8){
      entered.innerHTML = newStr.slice(0,2)+","+newStr.slice(2,5)+","+newStr.slice(5)+afterDecimal;
    } else if (newStr.length === 9){
      entered.innerHTML = newStr.slice(0,3)+","+newStr.slice(3,6)+","+newStr.slice(6)+afterDecimal;
    }
    if(hasNegativeNumber){
      entered.innerHTML = "-"+entered.innerHTML;
    }
  }
  let clicked = document.querySelectorAll(".calcButton");
  clicked.forEach(el => {
      el.style.animation = "animationReset";
    });
  let entered = document.querySelector(".screen");
  let hasNegativeNumber = entered.innerHTML.includes("-");
  let hasDecimal = entered.innerHTML.includes(".");
  let hasComma = entered.innerHTML.includes(",");
  if(hasDecimal && hasComma){
    let foundAt = entered.innerHTML.indexOf('.');
    let includesDecimal = entered.innerHTML.slice(foundAt)
    finalRun(includesDecimal)
    return;
  } else if(hasDecimal){
    return;
  } else {
      finalRun();
  }
}

const keypad = (param) => {
  clearMessage();
  let entered = document.querySelector(".screen");
  if(entered.innerHTML === "0"){
    entered.innerHTML = param;  
    return;
  } if(entered.innerHTML.length === 6){
    entered.style.fontSize = "45px";
  } if(entered.innerHTML.length === 9){
    entered.style.fontSize = "35px";
  } if(entered.innerHTML.length === 11){
    // Calculator to not allow more than 11 placeholders
    message.innerHTML = "Placeholder limit reached";
    message.style.fontSize = "20px";
    message.style.color = "black";
    return;
  } if (entered.innerHTML.includes('.')){
    if (param != '.'){
      entered.innerHTML += param;
    }
  } if (!entered.innerHTML.includes('.')){
    entered.innerHTML += param;
    addCommas();
  }
}
const clearIt = () => {
  let clearIt = document.querySelector(".screen");
  clearIt.innerHTML = 0;
  clearIt.style.fontSize = "60px";
  clearMessage();
};
const clearMessage = () => {
  message.innerHTML = "";
  message.style.fontSize = "2px";
  message.style.color = "white";
}
const invert = () => {
  let entered = document.querySelector(".screen");
  let isNegative = entered.innerHTML.includes('-');
  if(isNegative){
    entered.innerHTML = entered.innerHTML.slice(1);
  }
  else {
    entered.innerHTML = "-" + entered.innerHTML;
  }
}
