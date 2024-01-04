"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num1element = document.getElementById('num1');
var num2element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
buttonElement.addEventListener('click', function () {
    var num1 = num1element.value;
    var num2 = num2element.value;
    var result = add(+num1, +num2);
    console.log(result);
});
