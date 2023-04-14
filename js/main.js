const display = document.querySelector('#display') ;

const btn = document.querySelectorAll('.exp') ;
btn.forEach(item => item.addEventListener('click',toDisplay)) ;


document.querySelector('#deleteOne').addEventListener('click',deleteOne);
document.querySelector('#allClear').addEventListener('click',allClear);
document.querySelector('#signChange').addEventListener('click',signChange);
document.querySelector('#evaluate').addEventListener('click',evaluate);

function deleteOne(){
    display.textContent = display.textContent.slice(0,-1) ;
}

function allClear(){
    display.textContent = '';
}

function signChange(){
    if(!isNaN(display.textContent)){
        display.textContent = - (+display.textContent);
    }
}

function toDisplay(e){
    display.textContent = display.textContent + e.target.textContent ;
}

function add(num1,num2){
    return num1+num2 ;
}
function subtract(num1,num2){
    return num1-num2 ;
}
function multiply(num1,num2){
    return num1*num2 ;
}
function division(num1,num2){
    return num1/num2 ;
}
function remainder(num1,num2){
    return num1%num2 ;
}