const display = document.querySelector('#display') ;

const btn = document.querySelectorAll('.exp') ;
btn.forEach(item => item.addEventListener('click',toDisplay)) ;


document.querySelector('#deleteOne').addEventListener('click',deleteOne);
document.querySelector('#allClear').addEventListener('click',allClear);
document.querySelector('#signChange').addEventListener('click',signChange);
document.querySelector('#evaluate').addEventListener('click',evaluate);


function evaluate (){
    const array = Array.from(display.children,element => element.textContent);
    const regex = /[+\-\/*%]/ ;
    let num1 = null ;
    let num2 = null ;
    let operator = null ;
    for(let i = 0 ; i < array.length ; i++){
        if(!isNaN(array[i]) && operator === null){
            num1 = num1 === null ? array[i] : num1 + array[i];
        }else if (array[i].match(regex)){
            if (operator === null){
                operator = array[i];
            }else{
                num1 = operation(num1,num2,operator).toString();
                num2 = null;
                operator = array[i];
            }
        }else{
            num2 = num2 === null ? array[i] : num2 + array[i];
        }
    }
    console.log(num1,operator,num2);
    num1 = operation(num1,num2,operator);
    display.innerHTML = `<i>${num1}</i>`;
}


function deleteOne(){
    display.removeChild(display.lastChild)
}

function allClear(){
    display.textContent = '';
}

function signChange(){
    if(!isNaN(display.textContent)){
        const num =  (-(+display.textContent)).toString().split('');
        display.innerHTML = '';
        for(let i = 0 ; i < num.length ; i++){
            const newI = document.createElement('i');
            newI.textContent = num[i] ;
            display.appendChild(newI);
        }
    }
}

function toDisplay(e){
    const toAdd  = `<i>${e.target.textContent}</i>`;
    display.innerHTML += toAdd ;
}


function operation(num1,num2,operator){
    switch (operator){
        case '+' : return add(num1,num2);
        case '-' : return subtract(num1,num2);
        case '*' : return multiply(num1,num2);
        case '/' : return division(num1,num2);
        case '%' : return remainder(num1,num2);
    }
}


function add(num1,num2){
    return +num1 + +num2 ;
}
function subtract(num1,num2){
    return +num1 - +num2 ;
}
function multiply(num1,num2){
    return +num1 * +num2 ;
}
function division(num1,num2){
    return +num1 / +num2 ;
}
function remainder(num1,num2){
    return +num1 % +num2 ;
}