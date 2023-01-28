//Tiene que ir en este orden
//a - ai
//e - enter
//i - imes
//o - ober
//u - ufat

function encriptar() {
   var texto = document.querySelector(".input-texto").value.toLowerCase();
   //i es para que afecte tanto a minusculas como a mayusculas -- e_E
   //g es para toda la linea
   //m es para que afecte a multiples lineas u oraciones
   var txtCifrado = texto.replace(/e/gim, "enter");
   var txtCifrado = txtCifrado.replace(/o/gim, "ober");
   var txtCifrado = txtCifrado.replace(/i/gim, "imes");
   var txtCifrado = txtCifrado.replace(/a/gim, "ai");
   var txtCifrado = txtCifrado.replace(/u/gim, "ufat");

   document.querySelector(".muneco").style.height = "500px";
   document.querySelector(".muneco-imagen").style.display = "none";
   document.querySelector(".muneco-titulo").style.display = "none";
   document.querySelector(".muneco-subtitulo").style.display = "none";
   document.querySelector("#invisible").style.visibility = "visible";
   document.querySelector("#invisible").value = txtCifrado;
}

function desencriptar() {
   var texto = document.querySelector(".input-texto").value.toLowerCase();
   //i es para que afecte tanto a minusculas como a mayusculas -- e_else {}
   //g es para toda la linea
   //m es para que afecte a multiples lineas u oraciones
   var txtCifrado = texto.replace(/enter/gim, "e");
   var txtCifrado = txtCifrado.replace(/ober/gim, "o");
   var txtCifrado = txtCifrado.replace(/imes/gim, "i");
   var txtCifrado = txtCifrado.replace(/ai/gim, "a");
   var txtCifrado = txtCifrado.replace(/ufat/gim, "u");

   document.querySelector(".muneco").style.height = "500px";
   document.querySelector(".muneco-imagen").style.display = "none";
   document.querySelector(".muneco-titulo").style.display = "none";
   document.querySelector(".muneco-subtitulo").style.display = "none";
   document.querySelector("#invisible").style.visibility = "visible";
   document.querySelector("#invisible").value = txtCifrado;
}

function copiar() {
   const contenido = document.querySelector("#invisible");
   navigator.clipboard.writeText(contenido.value);
   alert("!El texto se copio correctamente!!!!");
}
