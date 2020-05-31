// Obtener números y operandos desde HTML

document.getElementById("num1").addEventListener("click",num1);
document.getElementById("num2").addEventListener("click",num2);
document.getElementById("num3").addEventListener("click",num3);
document.getElementById("num4").addEventListener("click",num4);
document.getElementById("num5").addEventListener("click",num5);
document.getElementById("num6").addEventListener("click",num6);
document.getElementById("num7").addEventListener("click",num7);
document.getElementById("num8").addEventListener("click",num8);
document.getElementById("num9").addEventListener("click",num9);
document.getElementById("num0").addEventListener("click",num0);

document.getElementById("sumar").addEventListener("click",signoSuma);
document.getElementById("restar").addEventListener("click",signoResta);
document.getElementById("dividir").addEventListener("click",signoDivision);
document.getElementById("multiplicar").addEventListener("click",signoMultiplicacion);
document.getElementById("limpiar").addEventListener("click",limpiar);

document.getElementById("resultado").maxLength = "14";


// Mostrar números en pantalla

function num1() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("num1").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

function num2() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("num2").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

function num3() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("num3").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

function num4() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("num4").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

function num5() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("num5").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

function num6() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("num6").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

function num7() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("num7").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

function num8() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("num8").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

function num9() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("num9").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

function num0() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("num0").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

// Mostrar operandos en pantalla

function signoSuma() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("sumar").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

function signoResta() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("restar").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

function signoDivision() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("dividir").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

function signoMultiplicacion() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("multiplicar").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
}

// Funciones operaciones

function sumar() {
    let resultadoactual = document.getElementById("resultado").innerHTML;
    let printNum = document.getElementById("multiplicar").innerHTML;
    document.getElementById("resultado").innerHTML = resultadoactual + printNum;
    

}





function limpiar(){
    
    document.getElementById("resultado").innerHTML = "";
   
} 
