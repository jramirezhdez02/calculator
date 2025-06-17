// redondear decimales
const displayText=document.querySelector('#text')
displayText.textContent = '';

const clear=document.querySelector('#clear');
const backspace=document.querySelector('#backspace')
const add=document.querySelector('#add')
const sub=document.querySelector('#sub')
const mul=document.querySelector('#mul')
const div=document.querySelector('#div')
const equal=document.querySelector('#equal')
const dot=document.querySelector('#dot')

let num1=''
let first=''
let second=''
let resultado=''
let punto=false
let contiene
let resultadoMostrado=false



clear.addEventListener('click', () => {
    displayText.textContent = '';
    resultado='';
});

backspace.addEventListener('click', ()=>{
    num1=displayText.textContent= displayText.textContent.slice(0,-1)
    resultado=''
    resultadoMostrado = false;
})

add.addEventListener('click', ()=> {
    if (resultado=='0'){
        first=resultado
    }
    else if(resultado==''){
    first=parseFloat(num1);}
    else{first=resultado}
    displayText.textContent+='+';
    operation=suma;
    sign='+'
    
} )
sub.addEventListener('click', ()=> {
    if (resultado==''){
        first=parseFloat(num1);}
        else{first=resultado}
    displayText.textContent+='-';
    operation=resta;
    sign='-'
} )

mul.addEventListener('click', ()=> {
    if (resultado==''){
        first=parseFloat(num1);}
        else{first=resultado}
    displayText.textContent+='x';
    operation=multiplica;
    sign='x'
} )

div.addEventListener('click', ()=> {
    if (resultado==''){
        first=parseFloat(num1);}
        else{first=resultado}
    displayText.textContent+='÷';
    operation=divide;
    sign='÷'
} )

equal.addEventListener('click', ()=>{
    operator(operation,sign,first,second)
    resultadoMostrado = true;
    sign=''
})

dot.addEventListener('click', ()=>{
    displayText.textContent+='.'
})

for (let i = 0; i <= 9; i++) {
    const btn = document.querySelector(`#btn${i}`);
    btn.addEventListener('click', () => {
        if(resultadoMostrado && sign===''){
            displayText.textContent=''
            resultado=''
        }
        resultadoMostrado = false;
        num1=displayText.textContent += i;   
    });
}

function suma(op1,op2){
    return res=op1+op2
}

function resta(op1,op2){
    return res=op1-op2
}

function multiplica(op1,op2){
    return res=op1*op2
}

function divide(op1,op2){
    if(op2==0){
        alert('La division entre cero no esta definida master')
    }
    else{
    res=op1/op2
    if (toString(res).length>8){
        res=Number(res.toFixed(8))
    }
    return res
}
}
function operator(operation,sign,first,second){
    let posicion = displayText.textContent.indexOf(sign);
    console.log(posicion)
    second=parseFloat(displayText.textContent.slice(posicion+1,displayText.textContent.length));
    resultado=displayText.textContent=operation(first,second)
}
