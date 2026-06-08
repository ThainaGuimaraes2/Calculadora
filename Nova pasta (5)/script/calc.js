"use strict";

let camp1= document.querySelector("#num1");
let camp2 = document.querySelector("#num2");
let btn = document.querySelector("#Soma");
let abt = document.querySelector("#menos");
let mult = document.querySelector("#multiplicar");
let divi = document.querySelector("#dividir");
let resp = document.querySelector("#resultado");

btn.addEventListener('click',()=>{
    let num1=Number(camp1.value);
    let num2=Number(camp2.value)
    let soma=num1+num2;
    resp.value=soma;
});
abt.addEventListener('click',()=>{
    let num1=Number(camp1.value);
    let num2=Number(camp2.value)
    let menos=num1-num2;
    resp.value=menos;
});
mult.addEventListener('click',()=>{
    let num1=Number(camp1.value);
    let num2=Number(camp2.value)
    let Mult=num1*num2;
    resp.value=Mult;
});
divi.addEventListener('click',()=>{
    let num1=Number(camp1.value);
    let num2=Number(camp2.value)
    let div=num1/num2;
    resp.value=div;
});



