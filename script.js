// Reemplazar las siguientes letras por codigos
// e -> enter
// o -> ober 
// i -> imes
// a -> ai
// u -> ufat 

function encriptar() {
    var texto = document.getElementById ("input-texto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm, "enter");
    // txt cifrado replace ("/e/[igm]")
    // [igm]
    // i es para que afecte a mayusculas y minusculas
    // g es para toda la linea u oracion
    // m es para que afecte a multiples lineas o parrafos
    
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById('imagen-derecha').style.display = "none";
    document.getElementById('texto').style.display = "none";
    document.getElementById('texto2').innerHTML = txtCifrado;
    document.getElementById('copy').style.display = "show";
    document.getElementById('copy').style.display = "inherit";
    
}

function desencriptar() {
    var texto = document.getElementById ("input-texto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm, "e");
    // txt cifrado replace ("/e/[igm]")
    // [igm]
    // i es para que afecte a mayusculas y minusculas
    // g es para toda la linea u oracion
    // m es para que afecte a multiples lineas o parrafos
    
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById('imagen-derecha').style.display = "none";
    document.getElementById('texto').style.display = "none";
    document.getElementById('texto2').innerHTML = txtCifrado;
    document.getElementById('copy').style.display = "show";
    document.getElementById('copy').style.display = "inherit";
    
}

function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado exitosamente");
}