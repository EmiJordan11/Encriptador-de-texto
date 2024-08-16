//definiciones
vocalesTildes = ["á", "é", "í", "ó", "ú"]


function mostrarResultado(texto){
    //Oculto los elementos predeterminados
    document.getElementById('contenido__salida__imagen').style.display = "none";
    document.getElementById('contenido__salida__titulo').style.display = "none";
    document.getElementById('contenido__salida__texto').style.display = "none";


    let respuestaHTML = document.getElementById('contenido__salida__respuesta');
    let botonCopiarHTML = document.getElementById("copiar")

    //Ingreso el texto y muestro los elementos ocultos
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
                Swal.fire({
                    title: "Texto inválido",
                    text: "Por favor ingrese un nuevo texto sin mayúsculas, tildes ni caracteres especiales",
                    icon: "error",
                    position: "top"
                })

                /*Limpia la entrada de texto*/
                resetearEstilos();

                return 1;
            }
        }
    }
    return 0;
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