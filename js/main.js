
function creaNodo(){
    //empezamos a crear html cada vez que el botón se pulse y por lo tanto ejecutamos esta función

    let texto = document.createTextNode("Hola estamos en clase.");
    let p = document.createElement("p");
    p.appendChild(texto);

    document.getElementById("contenedor").appendChild(p);
    console.log(texto);
}


