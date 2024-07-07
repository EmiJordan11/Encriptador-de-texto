
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
    cadena = cadena.replaceAll("enter", "e");
    cadena = cadena.replaceAll("imes", "i");
    cadena = cadena.replaceAll("ai", "a");
    cadena = cadena.replaceAll("ober", "o");
    cadena = cadena.replaceAll("ufat", "u");

    mostrarResultado(cadena);

}