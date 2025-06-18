// poder concatenar operaciones en pantalla de una sola vez ej: 5+5+5
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
let resultadoMostrado=false
let sign=''

clear.addEventListener('click', () => {
    displayText.textContent = '';
    resultado='';
    sign=''
});

backspace.addEventListener('click', ()=>{
    num1=displayText.textContent= displayText.textContent.slice(0,-1)
    resultado=''
    resultadoMostrado = false;
})

add.addEventListener('click', ()=> {
    if(sign!=''){
        operator(operation,sign,first,second)
        resultadoMostrado = true;
        sign=''
        punto=false
    }
    if (resultado=='0'){
        first=resultado
    }
    else if(resultado==''){
    first=parseFloat(num1);}
    else{first=resultado}
    displayText.textContent+='+';
    operation=suma;
    sign='+'
    punto=false
    
} )
sub.addEventListener('click', ()=> {
    if(sign!=''){
        operator(operation,sign,first,second)
        resultadoMostrado = true;
        sign=''
        punto=false
    }
    if (resultado=='0'){
        first=resultado
    }
    else if(resultado==''){
    first=parseFloat(num1);}
    else{first=resultado}
    displayText.textContent+='-';
    operation=resta;
    sign='-'
    punto=false
} )

mul.addEventListener('click', ()=> {
    if(sign!=''){
        operator(operation,sign,first,second)
        resultadoMostrado = true;
        sign=''
        punto=false
    }
    if (resultado=='0'){
        first=resultado
    }
    else if(resultado==''){
    first=parseFloat(num1);}
    else{first=resultado}
    displayText.textContent+='x';       
    operation=multiplica;
    sign='x'
    punto=false
} )

div.addEventListener('click', ()=> {
    if(sign!=''){
        operator(operation,sign,first,second)
        resultadoMostrado = true;
        sign=''
        punto=false
    }
    if (resultado=='0'){
        first=resultado
    }
    else if(resultado==''){
    first=parseFloat(num1);}
    else{first=resultado}
    displayText.textContent+='÷';       
    operation=divide;
    sign='÷'
    punto=false
} )

equal.addEventListener('click', ()=>{
    operator(operation,sign,first,second)
    resultadoMostrado = true;
    sign=''
    punto=false
})

dot.addEventListener('click', ()=>{
    if(!punto){
    displayText.textContent+='.'
    punto=true}
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
    second=parseFloat(displayText.textContent.slice(posicion+1,displayText.textContent.length));
    resultado=displayText.textContent=operation(first,second)
}