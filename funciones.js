var desaparecer = document.querySelector(".desaparecer");
var textoIngresado = document.querySelector("textarea");
var mensajeEncriptado = document.querySelector(".mostrarMensaje");
var botonEncriptar = document.querySelector("botton");
var boton_aparte = document.querySelector(".boton_aparte");

function textoEncriptado(){
    desaparecer.style.display = "none";
    mensajeEncriptado.value = encriptar(textoIngresado.value);
    textoIngresado.value = "";
    boton_aparte.style.display = "block";
}

function textoDesencriptado(){
    desaparecer.style.display = "none";
    mensajeEncriptado.value = desEncriptar(textoIngresado.value);
    textoIngresado.value = "";
    boton_aparte.style.display = "block";
}

function copiar(){
    desaparecer.style.display = "block";
    mensajeEncriptado.select();
    navigator.clipboard.writeText(mensajeEncriptado.value);
    mensajeEncriptado.value = "";
    alert("Mensaje copiado");
    boton_aparte.style.display = "none";
    textoIngresado.focus();
}

function encriptar(textoEncriptar){
    var vocalesCambian = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o","ober"], ["u","ufat"]];
    //                      0    1       0      1   etc
    textoEncriptar = textoEncriptar.toLowerCase();

    for(var posicion = 0 ; posicion < vocalesCambian.length; posicion++){
        if(textoEncriptar.includes(vocalesCambian[posicion][0])){
            textoEncriptar = textoEncriptar.replaceAll(vocalesCambian[posicion][0], vocalesCambian[posicion][1])
        }                
    }
    return textoEncriptar;
}

function desEncriptar(textoEncriptar){
    var vocalesCambian = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o","ober"], ["u","ufat"]];

    for(var posicion = 0; posicion < vocalesCambian.length; posicion++){
        if(textoEncriptar.includes(vocalesCambian[posicion][1])){
            textoEncriptar = textoEncriptar.replaceAll(vocalesCambian[posicion][1], vocalesCambian[posicion][0])
        }
    }
    return textoEncriptar;
}



