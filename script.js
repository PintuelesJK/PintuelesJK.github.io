
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");


function validarTexto(){
    let palabra = document.getElementById("textoenc").value;
    let validador = palabra.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()) {
         encriptarTexto()
    }
}

function encriptarTexto() {
  const encodeMatrix = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
  };
  const palabra = document.getElementById("textoenc").value;
  let resultado = "";
  
  for (let letra of palabra.toLowerCase().split('')) {
    const substitution = encodeMatrix[letra];

    if (substitution) {
      resultado += substitution;
    } else {
      resultado += letra;
    }
  }

  document.getElementById("textoenc").value = "";
  mensaje.value = resultado;
}

function desencriptarTexto() {
  const encodeMatrix = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u",
  };
  const palabra = document.getElementById("textoenc").value;
  let resultado = "";

  for (let i = 0; i < palabra.length; i++) {
    let actual = palabra.substring(i);
    for (let key in encodeMatrix) {
      if (actual.indexOf(key) === 0) {
        resultado += encodeMatrix[key];
        i += key.length - 1;
        break;
      } else if (key === Object.keys(encodeMatrix)[Object.keys(encodeMatrix).length - 1]) {
        resultado += actual.charAt(0);
      }
    }
  }

  document.getElementById("textoenc").value = "";
  mensaje.value = resultado;
}

function copiar()
{
  mensaje.select();
  navigator.clipboard.writeText( mensaje.value )
  mensaje.value = "";
}

    