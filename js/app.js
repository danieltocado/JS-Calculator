var operando1;
var operando2;
var operacion;

function init () {

    //Definir variables
    var resultado = document.getElementById("resultado");

        //Numeros
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num3 = document.getElementById("num3");
    var num4 = document.getElementById("num4");
    var num5 = document.getElementById("num5");
    var num6 = document.getElementById("num6");
    var num7 = document.getElementById("num7");
    var num8 = document.getElementById("num8");
    var num9 = document.getElementById("num9");
    var num0 = document.getElementById("num0");

        //Operaciones
    var sumar = document.getElementById("sumar");
    var restar = document.getElementById("restar");
    var multiplicar = document.getElementById("multiplicar");
    var dividir = document.getElementById("dividir");
    var modulo = document.getElementById("modulo");

        //Resultado
    var resultadofinal = document.getElementById("resultadofinal");

    //Mostrar números en resultado
    num1.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    num2.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    num3.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    num4.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    num5.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    num6.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    num7.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    num8.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    num9.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    num0.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }

    
    // Operaciones
    sumar.onclick = function(e){
        operando1 = resultado.textContent;
        operacion = "+";
        limpiar();
    }

    restar.onclick = function(e){
        operando1 = resultado.textContent;
        operacion = "-";
        limpiar();
    }

    multiplicar.onclick = function(e){
        operando1 = resultado.textContent;
        operacion = "*";
        limpiar();
    }

    dividir.onclick = function(e){
        operando1 = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    modulo.onclick = function(e){
        operando1 = resultado.textContent;
        operacion = "%";
        limpiar();
    }

    resultadofinal.onclick = function(e){
        operando2 = resultado.textContent;
        resolver();
    }
}

function limpiar(){
    resultado.textContent = "";
}

function resolver() {
    var res = 0;
    switch(operacion){
        case "+":
            res = Number(operando1) + Number(operando2);
            break;
        case "-":
            res = Number(operando1) - Number(operando2);
            break;
        case "*":
            res = Number(operando1) * Number(operando2);
            break;  
        case "/":
            res = Number(operando1) / Number(operando2);
            break;     
        case "%":
            res = Number(operando1) % Number(operando2);
            break;                 
    }
    
    resultado.textContent = res;
}