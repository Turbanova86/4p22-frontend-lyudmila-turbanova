'use strict';

console.log('calculator'.toUpperCase());
const str = 'calculator';

const btnCalc = document.getElementById('btnCalc');

btnCalc.addEventListener('click', (event) => {
    event.preventDefault();
    const firstNum = document.getElementById('firstNum').value;
    const operator = document.getElementById('operator').value;
    const secondNum = document.getElementById('secondNum').value;
    let result;

    switch(operator) {
        case '+': result = Number(firstNum) + Number(secondNum); break;
        case '-': result = Number(firstNum) - Number(secondNum); break;
        case '*': result = Number(firstNum) * Number(secondNum); break;
        case '/': result = Number(firstNum) / Number(secondNum); break;
        default: result = 'Программа не поддерживает такую операцию'; break;
    }

    if (firstNum === '') {
        result = 'Первое число не указано';
    }

    if (operator === '') {
        result = 'Не введен знак';
    }

    if (secondNum === '') {
        result = 'Второе число не указано';
    }

    if (isNaN(firstNum) || isNaN(secondNum)) {
        result = 'Некорректный ввод чисел';
    }
    
    if (operator === '/' && (firstNum) || (secondNum) === 0) {
        result = 'Операция некорректна';
    }

    document.getElementById('result').innerText = result;
    console.log(result);
});