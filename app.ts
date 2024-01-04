export{}
const num1element = document.getElementById('num1') as HTMLInputElement;
const num2element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button');

function add (num1:number,num2:number){
    return num1+num2
}

buttonElement.addEventListener('click',()=>{
    const num1 = num1element.value;
    const num2 = num2element.value;
    const result = add(+num1,+num2);
    console.log(result)
})