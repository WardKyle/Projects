/*
To DO
-----
1. Percentages - trying to add comma when percent 1,000.23 ex/
2. keypad() adding a number to inverted/negative number removes negative
*/

let message = document.querySelector(".messages");

const finalRun = (afterDecimal = "") => {
  let entered = document.querySelector(".screen");
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
const addCommas = () => {
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
  } if(screenLength(entered)){  
  if (entered.innerHTML.includes('.')){
    if (param != '.'){
      entered.innerHTML += param;
    }
  } if (!entered.innerHTML.includes('.')){
    entered.innerHTML += param;
    addCommas();
  }}
}
// Calculator to not allow more than 11 placeholders
const screenLength = (currScreen, converted = "") => {
  if(currScreen.innerHTML.length >= 11 || converted.length >= 10){
    message.innerHTML = "Placeholder limit reached";
    message.style.fontSize = "20px";
    message.style.color = "black";
    return false;
  } if(currScreen.innerHTML.length >= 9 || converted.length >= 9){
    currScreen.style.fontSize = "35px";
    return true;
  } if(currScreen.innerHTML.length >= 6 || converted.length >= 6){
    currScreen.style.fontSize = "45px";
    return true;
  } 
  return true;
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
  if(entered.innerHTML == '0'){
    return;
  }
  let isNegative = entered.innerHTML.includes('-');
  if(isNegative){
    entered.innerHTML = entered.innerHTML.slice(1);
  }
  else {
    entered.innerHTML = "-" + entered.innerHTML;
  }
}
const clicked = (clickedId) => {
  let clicked = document.querySelector(clickedId);
  clicked.style.opacity = "0.4";
  setTimeout(() => {
    clicked.style.opacity = "1";
  }, 100);
};
const percentage = () => { 
  const findDecimal = (num) => {
    if(Number.isInteger(num)){
      return 2;
    }
    return num.toString().split('.')[1].length+2;
  };
  let entered = document.querySelector(".screen");
  let percent = Number(entered.innerHTML.replace(/,/g,""));
  let decimals = findDecimal(percent);  
  percent /= 100;
  let converted = percent.toFixed(decimals);
  if(screenLength(entered,converted.toString())){
    entered.innerHTML = converted;



    // let foundAt = converted.indexOf('.');
    // let includesDecimal = converted.slice(foundAt)
    // finalRun(includesDecimal)
  }
};
