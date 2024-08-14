/*definiciones*/
vocalesTildes = ["á", "é", "í", "ó", "ú"]


function mostrarResultado(texto){
    //oculto los otros elementos
    document.getElementById('contenido__salida__imagen').style.display = "none";
    document.getElementById('contenido__salida__titulo').style.display = "none";
    document.getElementById('contenido__salida__texto').style.display = "none";


    let respuestaHTML = document.getElementById('contenido__salida__respuesta');
    let botonCopiarHTML = document.getElementById("copiar")

    respuestaHTML.innerHTML = texto;
    respuestaHTML.style.display = "block";
    botonCopiarHTML.style.display = "block";

    return;
}

function copiarTexto(){
    let texto = document.getElementById("contenido__salida__respuesta").innerText;
    navigator.clipboard.writeText(texto)
    console.log(texto)
    return;
}

function encriptarTexto(){

    let cadena = document.getElementById('contenido__entrada__input').value

    /*verifico si el texto tiene mayusculas o acentos*/
    if (verificarMayusculasYAcentos(cadena)) {
        return ;
    }
    

    cadena = cadena.replaceAll("e", "enter");
    cadena = cadena.replaceAll("i", "imes");
    cadena = cadena.replaceAll("a", "ai");
    cadena = cadena.replaceAll("o", "ober");
    cadena = cadena.replaceAll("u", "ufat");

    mostrarResultado(cadena);
    console.log(cadena);
}



function desencriptarTexto(){
    let cadena = document.getElementById('contenido__entrada__input').value

    /*verifico si el texto tiene mayusculas o acentos*/
    if (verificarMayusculasYAcentos(cadena)) {
        return ;
    }
    
    cadena = cadena.replaceAll("enter", "e");
    cadena = cadena.replaceAll("imes", "i");
    cadena = cadena.replaceAll("ai", "a");
    cadena = cadena.replaceAll("ober", "o");
    cadena = cadena.replaceAll("ufat", "u");

    mostrarResultado(cadena);

}

function verificarMayusculasYAcentos(texto){
    
    for (const letra of texto) {
        if (letra!==" ") {
            if (letra.toUpperCase()==letra || vocalesTildes.includes(letra) ) {
                /*Muestro la advertencia*/
                document.getElementById('advertencia').style.display='block'

                return 1;
            }
        }
    }
    return 0;
}

function ocultarAdvertencia(){
    document.getElementById('advertencia').style.display='none';

    /*Limpia la entrada de texto*/
    resetearEstilos();
}

function resetearEstilos(){
    /*Limpia la entrada de texto*/
    document.getElementById('contenido__entrada__input').value='';

    /*Limpia la salida de texto*/
    document.getElementById('contenido__salida__respuesta').style.display='none'
    document.getElementById('copiar').style.display='none'

    /*Muestro lostextos iniciales*/
    
    document.getElementById('contenido__salida__titulo').style.display = "block";
    document.getElementById('contenido__salida__texto').style.display = "block";

    /*Muestro la imagen solo si la pantalla es la adecuada*/
    if (window.innerWidth>900) {
        document.getElementById('contenido__salida__imagen').style.display = "block";
    }
}