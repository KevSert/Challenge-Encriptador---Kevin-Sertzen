//reglas del desafio
//la letra "e" se vuelve "enter"
//la letra "i" se vuelve "imes"
//la letra "a" se vuelve "ai"
//la letra "o" se vuelve "ober"
//la letra "u" se vuelve "ufat"

let original = document.getElementById('cuadro');
const aviso = 'No se permiten mayusculas ni acentos';

function enviarEncriptar(){

    let mensaje = original.value;
    var contar = 0;
    var cadena = mensaje;
    var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZáéíóú";

    for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if(cadena[x]==mayusculas[i]){
                contar+=1;
            }
        }    
    }

    if(mensaje === ""){
        
        window.onload = document.querySelector("div.datos").removeAttribute('hidden');
        window.onload = document.querySelector("div.aparece").setAttribute('hidden', 'true');
        document.getElementById('cuadro').value = '';

    } else {
        if(contar == 0){

            window.onload = document.querySelector("div.aparece").removeAttribute('hidden');

            window.onload = document.querySelector("div.datos").setAttribute('hidden', 'true');

            let ver1 = encriptaE(mensaje, 'e');
            let ver2 = encriptaI(ver1, 'i');
            let ver3 = encriptaA(ver2, 'a');
            let ver4 = encriptaO(ver3, 'o');
            let ver5 = encriptaU(ver4, 'u');  

        
            function encriptaE(texto, letra){
                return texto.replaceAll(letra, 'enter');
            } 
            
            function encriptaI(texto, letra){
                return texto.replaceAll(letra, 'imes')
            }

            function encriptaA(texto, letra){
                return texto.replaceAll(letra, 'ai')
            }

            function encriptaO(texto, letra){
                return texto.replaceAll(letra, 'ober')
            }

            function encriptaU(texto, letra){
                return texto.replaceAll(letra, 'ufat')
            }

            document.getElementById('texto-respuesta').innerHTML= ver5;

            document.getElementById('cuadro').value = '';
        
        }else{
            document.getElementById('texto-respuesta').innerHTML= aviso.toLocaleUpperCase();
        } 
    }
}

function enviarDesencriptar(){

    window.onload = document.querySelector("div.aparece").removeAttribute('hidden');

    window.onload = document.querySelector("div.datos").setAttribute('hidden', 'true');

    window.onload = function () { 
        var imageSrc = document.querySelector("div.aparece").removeAttribute('hidden');
        console.log(imageSrc);
    }

    let mensaje = original.value;
    var contar = 0;
    var cadena = mensaje;
    var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZáéíóú";

    for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if(cadena[x]==mayusculas[i]){
                contar+=1;
            }
        }    
    }

    if(mensaje === ""){
        
        window.onload = document.querySelector("div.datos").removeAttribute('hidden');
        window.onload = document.querySelector("div.aparece").setAttribute('hidden', 'true');
        document.getElementById('cuadro').value = '';

    } else {

        if(contar == 0){
            let mensaje = original.value;
            let ver1 = encriptaE(mensaje, 'ufat');
            let ver2 = encriptaI(ver1, 'ober');
            let ver3 = encriptaA(ver2, 'ai');
            let ver4 = encriptaO(ver3, 'imes');
            let ver5 = encriptaU(ver4, 'enter');
            

            function encriptaE(texto, letra){
                return texto.replaceAll(letra, 'u');
            }

            function encriptaI(texto, letra){
                return texto.replaceAll(letra, 'o')
            }

            function encriptaA(texto, letra){
                return texto.replaceAll(letra, 'a')
            }

            function encriptaO(texto, letra){
                return texto.replaceAll(letra, 'i')
            }

            function encriptaU(texto, letra){
                return texto.replaceAll(letra, 'e')
            }

            document.getElementById('texto-respuesta').innerHTML= ver5;

            document.getElementById('cuadro').value = '';
        } else{
            document.getElementById('texto-respuesta').innerHTML= aviso.toLocaleUpperCase();     
        }
    }
}

function textoCopia() {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById('texto-respuesta').innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}
  
